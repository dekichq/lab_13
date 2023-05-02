// //Завдання 1
// let array = [1, "qwe", true, null]
// console.log("Кількість елементів у масиві: ", array.length);
// let smthn = prompt("Введіть 5-ий елемент масиву");
// array[4] = smthn;
// console.log(array[4]);
// array.shift();
// console.log(array);

// //Завдання 2
// let cities = ["Ternopil", "Lviv", "Warsaw"];
// let string = " ";
// for (let count = 0; count < cities.length; count++) {
//     string += cities[count];
//     string += "*";
// }
// console.log(string);

// // Завдання 3
// //Завдання з циклом for
// let array = [2, 3, 4, 5];
// let multiple = 0;
// for(let a = 0; a < array.length; a++) {
//     if (multiple != 0) {
//         multiple *= array[a];
//     } else {
//         multiple = array[a];
//     } 
// }

// console.log("Добуток масиву: ", multiple);
// //Завдання з циклом while
// let count = 0;
// let multiple1 = 0;
// while (count < array.length) {
//     if (multiple1 != 0) {
//         multiple1 *= array[count];
//     } else {
//         multiple1 = array[count];
//     } 
//     count++;
// }
// console.log("Добуток масиву: ", multiple);

// //Завдання 4
// for(let a = 0; a <= 15; a++) {
//     if(a % 2 == 0) {
//         console.log(a, " = even");
//     } else {
//         console.log(a, " = odd")
//     }  
// }

// //Завдання 5
// function randArray(k) {
//     let array = [];
//     for(let a = 0; a < k; a++) {
//         array[a] = Math.round(Math.random() * (500 - 1) + 1);
//     }
//     return array;
// }
// let int = 5;
// console.log(randArray(int));

// //Завдання 6
// function raiseToDegree(a, b) {
//     let result = Math.pow(a, b);
//     return result;
// }
// let a = prompt("Введіть число: ");
// let b = prompt("Введіть степінь до якого потрібно піднести число: ");
// console.log(raiseToDegree(a, b));

// //Завдання 7
// function findMin() {
//     return Math.min.apply(null, arguments);
// }
// console.log(findMin(1, 2, 3, 4, 5, 123, 54, 657, 24435, 124));
// console.log(findMin(3, 2));

// //Завдання 8
// function findUnique(arr) {
//     let isUnique = true;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 console.log("i = ", arr[i])
//                 console.log("j = ", arr[j])
//                 isUnique = false;
//             }
//         }       
//     }
//     return isUnique;    
// }
// let array = [1, 2, 3, 5, 3];
// let array2 = [1, 2, 3, 5, 11];
// console.log(findUnique(array));
// console.log(findUnique(array2));