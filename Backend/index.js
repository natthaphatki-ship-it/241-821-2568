const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

const port = 8000;
app.use(bodyParser.json());
app.use(cors());
let users = [];
let counter = 1;

let conn = null
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

app.get('/users/:id', async (req, res) => {
    try{
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if(results[0].length == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json(results[0][0]);
    } catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message:'Error fetching user',
            error: error.message
        });
    }
})

app.put('/users/:id', async (req, res) => {
    try{
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        if(results[0].length == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        console.error('Error updating user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message:'Error updating user',
            error: error.message
        });
    }
})

app.delete('/users/:id', async (req, res) => {
    try{
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', id);
        if(results[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json({message: 'User deleted successfully'});
    } catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message:'Error deleting user',
            error: error.message
        });
    }
})


const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ:  ☺')
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล: ☺')
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ')
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศของคุณ')
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกงานอดิเรกของคุณ')
    }
    if (!userData.description) {
        errors.push('กรุณาใส่คำอธิบายของคุณ')
    }
    return errors;
}

// path = post /user
app.post('/users', async (req, res) => {
    try {
    let user = req.body;
    const errors = validateData(user)
    if (errors.length > 0) {
        //ถ้ามี error
        throw {
            message: 'กรอกข้อมูลไม่ครบถ้วน',
            errors: errors
        }
    }
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('results:', results);
    res.json({ 
        message: 'User added successfully',
        data: results[0]
    });
    }catch (error) {
        const errorMessage = error.message || 'Error creating user'
        const errors = error.errors || [];
        console.error('Error adding user:', error.message);
        res.status(500).json({ 
            message: errorMessage,
            errors: errors
        });
    }
});

//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;

    //หา user ที่มี id ตรงกับ id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัพเดตข้อมูลของ user นั้นด้วยข้อมูลที่ส่งมาใน body
    if (selectedIndex === -1) {
        users[selectedIndex].name = users[selectedIndex].name;
        users[selectedIndex].email = users[selectedIndex].email;
    }
    users[selectedIndex].name = updatedUser.name || users[selectedIndex].name;
    users[selectedIndex].email = updatedUser.email || users[selectedIndex].email;

    //ส่ง response กลับไปว่าอัพเดตสำเร็จหรือไม่

    res.json({ 
        message: 'User updated successfully',
        data: {
         user: updatedUser,
         indexUpdated: selectedIndex
        } 
        });
})

// path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
//หา user ที่มี id ตรงกับ id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
    delete users[selectedIndex];
    users.splice(selectedIndex, 1);
    res.json({ 
        message: 'User deleted successfully',
         indexDeleted: selectedIndex
        });
});

app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`);
});