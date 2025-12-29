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
Grade >= 80 เป็นเกรด A
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
let counter = -5;
while (counter < 10) {
    console.log('Hello world')
    counter += 1

}

for (let i = 0; i < 10; i++) {
    console.log('Hello world from for loop')
}