// String, Number, Boolean , Object , Array

/*//1. String
let fristname = "John doe" //let ทำให้ ตัวแปรสามารถเปลี่ยนค่าได้
const idcard = "123456789" //const ทำให้ ตัวแปรไม่สามารถเปลี่ยนค่าได้

//2. Number
let age = 30
let height = 5.9

//3. Boolean
let isStudent = false;
console.log('My name is', fristname, 'and I am', age, 'years old.');
/*การบวก ลบ คูณ หาร หารเอาเศษ */

/*let number1 = 'John'
let number2 = 'Doe'

let result = number1 + number2; // บวก //ลบ // คูณ // หาร // หารเอาเศษ //+ ถ้าเป็น string จะเป็นการต่อ string
console.log("ผลการคำนวณ =", result)*/

// conditionall statement
// if, else if , else
// == , === , != , !== , > , < , >= , <=
// && , ||,!

/*let number3= 10
let number4= 20

let condition1 = number3 == number4; //Boolean ค่า True หรือ False
console.log('result of condition1 =', condition1);*/

//แบบฝึกเรื่อง if else
// if - else conditional
/*if (condition) {} */
/*if (number3 >= number4) {
    console.log('do something')
} 
else if (number3 == number4) {
    console.log('do else if something')
}
else {
    console.log('dont do every thing') 
}*/


//แบบฝึกหัด เกรด
/*
Grade >= 80 เป็นเกรด A:
Grade >= 70 เป็นเกรด B
Grade >= 60 เป็นเกรด C
Grade >= 50 เป็นเกรด D
Grade < 50 เป็นเกรด F
*/
/*let score = prompt('กรุณากรอกคะแนนของคุณ:') //prompt ใช้สำหรับรับค่าจากผู้ใช้
console.log('คะแนนของคุณคือ', score);
if (score >= 80) {
    console.log('เกรด A')
}
else if (score >= 70) {
    console.log('เกรด B')
}
else if (score >= 60) {
    console.log('เกรด C')
}
else if (score >= 50) {
    console.log('เกรด D')
}
else {
    console.log('เกรด F') 
}
*/


/* && และ || หรือ ! not หรือ ไ่ม่ */


//แบบฝึกหัด AND OR NOT
/*
let number1 = 5
let number2 = 10

let condition = number1 >= 3 || number2 >= 10;
console.log('condition =:', condition);

let age = 30
let gender = 'ชาย'

//true && true = true
if (age >= 20 && gender === 'ชาย') {
    console.log('คุณเป็นผู้ชายที่มีอายุ 20 ปีขึ้นไป')
} */

/* while loop , for loop */
/*let counter = -5;
while (counter < 10) {
    console.log('Hello world')
    counter += 1

}

for (let i = 0; i < 10; i++) {
    console.log('Hello world from for loop')
} */

/*
let ages = [25,30,35]
console.log(ages)
console.log(ages[1])

ages = [40,45,50]

console.log(ages)

//ต่ออาเรย์
ages.push(55)
console.log(ages)

//ความยาวของอาเรย์
console.log(ages.length)

//ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop()
console.log(ages)

if (ages.includes(45)) {
    console.log("พบ 45 ในอาเรย์") //พบ 45 ในอาเรย์
}

let = numbers = [90,60,80,40,50]
numbers.sort()
console.log(numbers) // [ 40, 50, 60, 80, 90 ]

let names = [ 'John', 'Jane', 'Doe',]
names.push('Smaith')
console.log(names)
console.log(names.length)

i  = 0
for (i = 0; i < names.length; i++) {
    console.log(names[i])
}

/* Object */
/*let student = [{ 
    age: 20,
    name: 'Emma',
    grade: 'A'
},{
    age: 22,
    name: 'Liam',
    grade: 'B'
}]
console.log(student)
console.log(student.name)

for (let i = 00; i < student.length; i++) {
    console.log('Student ' + (i + 1) + ':')
    console.log('Name: ' + student[i].name)
    console.log('Age: ' + student[i].age)
    console.log('Grade: ' + student[i].grade)
}

student.push({
    age: 21,
    name: 'Olivia',
    grade: 'A'
})
console.log(student) */ 

//ประกาศ Function

/* function calculate_grade(score) {
    if (score>= 90) {
        grade = 'A'
    }
    if (score>= 80) {
        grade = 'B'
    }
    if (score>= 70) {
        grade = 'C'
    }
    if (score>= 60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }
    return grade
}
//เรียกใช้ฟังก์ชัน
let student_score = 85
let student_grade = calculate_grade(student_score)
console.log('Student is grade is'+ student_grade) */

/*let score = [10,20,30,40,50]

for (i = 0; i < score.length; i++) {
    console.log(score[i])
    console.log(`Score at index ${i} is ${score[i]}`)
    //console.log('Score at index ' + i + ' is ' + score[i])
}

score = score.map((s) => {
    return s * 2
})


score.forEach((s) => {  
    console.log('score', s)
}) */

/*let score = [10,20,30,40,50]
for (let index = 0; index < score.length; index++) {
    console.log('score', score[index])      
 }
let newScore = score.filter((s)=> {
    if( s >= 30) {
        return true
    } else {
        return false
    }
}) 
 
let newScore = score.filter((s) => { 
    return s >= 30
}) */

//object + function 
/*
let students = [
    {
        name: 'aa',
        score: 50,
        grade: 'A'
    },
    {
        name: 'bb',
        score: 60,
        grade: 'B'f6q6r5r
console.log('Student :', students[0])

let student = students.find((s) => {
    if (s.name == 'bb') {
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})


console.log('student: ', student)

console.log('doublescore_student: ', doublescore_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 110) {
        return true
    }
})

console.log('highScore_student: ', highScore_student) */