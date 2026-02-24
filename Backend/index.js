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
    let user = req.body
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('results', results)
    res.json({
        message: 'User created successfully',
        data: results[0]
    
    })
})

// par th = put /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id
    let updatedUser = req.body
    //หา user ที่มี id ตรงกับ id ที่ส่งมา
    let selecetedIndex = users.findIndex(user => user.id == id)

    //อัพเดตข้อมูลของ user นั้นด้วยข้อมูลที่ส่งมาใน body ของ request
    if (selecetedIndex.name) {
        users[selecetedIndex].name = updatedUser.name
    }
    if (selecetedIndex.email) {
        users[selecetedIndex].email = updatedUser.email
    }


    //ส่ง response กลับไปว่าอัพเดตสำเร็จแล้ว
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: selecetedIndex
        }
    })
})


app.listen(port, async () => {
    await initDBconnection()
    console.log(`Server runing is on port ${port}`)
})