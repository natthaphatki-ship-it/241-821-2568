const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql2/promise')
const port = 8000
app.use(bodyParser.json())
let users = []
let counter = 1

let conn = null
const initDBconnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

//path = Get //users สำหรับ เก็บข้อมูล user ทั้งหมดที่มีอยู่ในระบบ
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0])

})


// parth = GET /test
app.get('/users', (req, res) => {
    res.json(users)
})

// parth = POST /user
app.post('/users', async (req, res) => {
    try {
        let user = req.body
        const results = await conn.query('INSERT INTO users SET ?', user)
        console.log('results', results)
        res.json({
            message: 'User created successfully',
            data: results[0]

        })
    } catch (error) {
        console.error('Error CREATING USER:', error);
        res.status(500).json({
            message: 'Error Creating user',
            error: error.message
        })

    }

})

app.get('/users/:id', async (req,res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0) {
            throw {statusCode: 404, message: 'User not found'}
        }
        res.json(results[0][0])
    }
    catch (error) {
        console.error('Error fetching user:',error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        })
    }
})

//PUT // users/:id สำหรับแก้ไขข้อมูลที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req,res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'}
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        })
    }
    catch (error) {
        console.error('Error updating user:',error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        })
    }
})




//Delete /users/:id user ที่มี od ตรงกับที่ส่งมา
app.delete('/users/:id', async (req,res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', id)
        if (results[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'}
        }
        res.json({
            message: 'User deleted successfully',
        })
    }
    catch (error) {
        console.error('Error deletubg user:',error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
            message: 'Error deleteing user',
            error: error.message
        })
    }
})




app.listen(port, async () => {
    await initDBconnection()
    console.log(`Server runing is on port ${port}`)
})