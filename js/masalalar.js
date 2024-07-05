// obyekt metodlariga oid masalalar
// 1-masala
// let player = {
//     name : "kevin",
//     age : 32,
//     team : "Manchester city"
// }
// for (const key in player) {
//     console.log(key);
// }


// 2-masala
// let player = {
//     name : "kevin",
//     age : 32,
//     team : "Manchester city"
// }
// for (const key in player) {
//     console.log(player[key]);
// }



// 3-masala
// let player = {
//     name : "kevin",
//     age : 32,
//     team : "Manchester city"
// }
// console.log(Object.entries (player));



// 4-masala
// let player = {
//     name : "kevin",
//     age : 32,
//     team : "Manchester city"
// }
// console.log(Object.freeze (player));
// player.name = "fgd"




// Massiv metodlariga oid masalalar.
// 1-masala
// let arr = [2,5,"salom",6,true,9];
// const takeElements = (arr) => arr.slice(1, 4);
// console.log(takeElements(arr));


// 3-masala
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// const add =(arr1,arr2,arr3) =>{
//     return arr2.concat(arr3,arr1);
// }
// console.log(add(arr1,arr2,arr3));



// 4-masala
// let arr = [4,6,7,3,'hello'];
// const checkedElement = (arr,element) =>{
//     if (arr.includes(element)) {
//          return arr.indexOf(element)**4
//     }
//     return res
// }
// console.log(checkedElement(arr,3));



// 5-masala
// let arr = [5,7,`hello`,6,5,8,4];
// function searchElement(arr,element) {
//     return arr.lastIndexOf(element)
// }
// console.log(searchElement(arr,5));



// 6-masala



// 7-masala
// let arr = [4,6,7,3,'hello'];
// const checkedElement = (arr,element) =>{
//     return arr.includes(element)
// }
// console.log(checkedElement(arr,3));



// 8-masala
// let arr = [456,56,78,357,789,235];
// const searchElement =(arr) =>{
//     let toq = 0;
//     let sum =0;
//     arr.forEach(function (value) {
//         if (value>99 && value<1000 && value%2==1)  {
//             sum+=value;
//             toq++
//         }
//     });
//     return sum/toq
// }
// console.log(searchElement(arr));



// 9-masala
// let arr = [2,3,4,5,6,8];
// const addElement = (arr) =>{
//     let res = arr.map(function (value) {
//         if (value % 2==0) {
//             return value**2
//         }else{
//             return value**3
//         }
//     })
//     return res
// }
// console.log(addElement(arr));




// 10-masala
// let arr = ['salom','hello','everyone','metod'];
// const takeEndElement = (arr) => {
//     let res = arr.map(function (value) {
//         return value[value.length -1]
//     })
//     return res
// }
// console.log(takeEndElement(arr));


// 11-masala
// let arr = [`salom`,`nma`,'hi','hello'];
// const change = (arr) =>{
//     return arr.filter(function (value) {
//         if (value.length < 4) {
//             return value
//         } })
// }
// console.log(change(arr));



// 12-masala
// let user = [
//     {name : "John" , age : 5},
//     {name : "Doe" , age : 20},
//     {name : "Alex" , age : 50},
// ]
// function findelement(arr) {
//     return arr.some(function (value) {
//         if (value.age > 18) {
//             return true     
//         }
//     })
// }
// console.log(findelement(user));



// 13-masala
// let arr = [`Javohir`,`Odiljon`,`Bahromjon`,`Asat`];
// const checkmassive = (arr) =>{
//     return arr.every(function (value) {
//         return value.endsWith("jon")
//     })
// }
// console.log(checkmassive(arr));




// 14-masala
// let arr = [345,4365,34,245,];
// const findElement = (arr) =>{
//     return arr.find(function (value) {
//         if (value > 99 && value < 1000 && value % 5 ==0) {
//             return value
//         }
//     })
// }
// console.log(findElement(arr));



// 15-masala
// let arr =['javohir','islombek','abrorbek','abdulaziz'];
// const findElement =(arr) => {
//     let res = arr.forEach(function (value) {
//         if (value.endsWith("bek")) {
//             return arr.findIndex(value)
//         }
//     });
//     return res
// }
// console.log(findElement(arr));