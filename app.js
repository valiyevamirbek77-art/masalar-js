// // forEach
// let numbers1 = [1, 2, 3, 4, 5];
// numbers1.forEach(function (son) {
//   console.log(son * 2);
// });

// // for of
// let words = ["apple", "banana", "cherry"];
// for (const word of words) {
//   console.log(word.toUpperCase(words));
// }

// // map
// let nums = [1, 2, 3, 4, 5];
// let kvadrat = nums.map(n=>n * n)
// console.log(kvadrat);

// // filter
// let numbers = [1, 2, 3, 4, 5, 6];
// const juftSonlar = numbers.filter(function (num) {
//   return num % 2 === 0
// })
// console.log(juftSonlar);

// // eng kattasi va eng kichigi
// let arr = [12, -5, 34, 7, 0, 89, -20];
// let engKattaSon = []
// let engKichikSon = []

// function engKattaniTop() {
//     let kattasi = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > kattasi) {
//             kattasi = arr[i];
//         }
//     }
//     engKattaSon.push(kattasi);
//     console.log(arr);
//     console.log(engKattaSon);
// }

// engKattaniTop();

// function engKichikTop() {
//     let kichik = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < kichik) {
//             kichik = arr[i];
//         }
//     }
//     engKichikSon.push(kichik);
//     // console.log(arr);
//     console.log(engKichikSon);
// }

// engKichikTop();

// yosh
// let users = [
//   { name: "Ali", age: 17, active: true },
//   { name: "Sara", age: 22, active: false },
//   { name: "John", age: 19, active: true },
//   { name: "Malika", age: 25, active: true }
// ];
// users.filter(function (user) {
//   if (user.age >= 18 && user.active === true) {
//     console.log(user);
    
//   }
// })

// narxlar
// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 }
// ];
// let product = products.map(function (product) {
//   return product.price * 1.5;
  
// })
//   console.log(product);

// baholar
//   let scores = [45, 78, 90, 32, 67, 88, 59];
// let sum = 0,
//  baho = 0;

// scores.forEach(score => {
//   if (score >= 60) 
//     sum += score,
//    baho++,
//     console.log(score);
// });

// unli harflar
// let text = "JavaScript Programming Language";
// let unli = "euioaEUOIA"
// let harf= 0;

// for (const char of text) {
// if (unli.includes(char)) {
//   harf++;
// }
// }
// console.log("unli harflar soni:",harf);
