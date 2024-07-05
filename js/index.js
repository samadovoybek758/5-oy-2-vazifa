// 1 IIFE
// (function example1() {
//     // bu yerda funksanish ichiga berilgan uzgaruvchini tawqaridan chaqirirb bulmaydi
//     let a = "hello"
// })()


// // 2-namuna
// (function example1() {
//     function inner() {
//         let b = 5
//     }
// })()

// IIFE bizga yozgan kodlarimizni tashqaridan keladigan narsalardan ximoyalaydi
// yani ekranga chiqarilishi kerak bulmagan narsalarni foydalanuvchilar surasa bunda uwa malumotlarni tawqariga
// chiqarmaydi 








// 2
// a
// let arr = [3,4,5,6,7];
// function filterMassive(arr) {
//     return arr.filter(function (value) {
//         if (value % 2==0) {
//             return value
//         }
//     })
// }
// console.log(filterMassive(arr));



// b
// let arr = [5,7,3,4,9,6];
// const allElements =(arr) =>{
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(allElements(arr));



// c
// function five(element) {
//     return element**5
// }
// console.log(five(3));


// d
// 
// pure function -bu sof funksiya bulib unga tashqaridan beriladigan qiymatlar qiziq emas
// uning ichiga qiymat berilganda bix yul bilan chiqadi









// 3
// callback function --bu funksiyaning argumentiga funksiya yozilganda ishlaydi











// 4
// a
// function factorial(n) {
//     if (n == 0) {
//         return 1
//     }
//     factorial(n-1);
//     return factorial(n-1)
// }
// console.log(factorial(5));

// recusive function bu qaytariladigan funksiya yani u us funksiyasi ichida qullanilishi mumkin
// bunda qaytarish operatoriga uxshab qoladi va qayta qayta ishlab biz bergan shartni bajaradi