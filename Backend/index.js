const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 8000

app.use(bodyParser.json())

let users = []
let counter = 1
// parth = GET /test
app.get('/users',(req,res) => {
    res.json(users)
})

// parth = POST /user
app.post('/user',(req,res) => {
    let user = req.body
    user.id = counter++
    users.push(user)
    res.json({
        message: 'User added successfully',
        user: user })
})

// parth = put /user/:id
app.put('/user/:id', (req,res) => {
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
  res.json ({
    message: 'User updated successfully',
    data: {
        user: updatedUser,
        indexUpdated: selecetedIndex
    }
    })
})

//path = Delete /user/:id
app.delete('/user/:id', (req,res) => {
    let id = req.params.id
//user จาก id ที่ส่งมา
   let selecetedIndex = users.findIndex(user => user.id == id)

   users.splice[selecetedIndex]


    res.json({
        message: 'User deleted successfully',
         indexDeleted: selecetedIndex
    })
})

app.listen(port, () => {
    console.log(`Server runing is on port ${port}`)
})