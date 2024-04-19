//High order Function

// function sum(a, b, fun) {
//     const ans = a + b;
//     fun(ans);
// }

// function print(x) {
//     console.log('**** ', x, ' ***');
// }

// sum(3, 4, print);



// let arr = [2, 3, 4, 5, 6];

// function printArray(arr) {
// for (let i = 0; i < arr.length; i++) {
//     pP(arr[i]);
// }
// arr.forEach(function pP(elem) {
//     console.log(':', elem);
// });


// arr.forEach((a) => {
//     console.log(a);
// });



//if two function are passed then the array and the array index will be printed
// arr.forEach((a, b) => {
//     console.log(a, b);
// });



//     arr.forEach((a, b, c) => {
//         console.log(a, b, c);
//     });

// }
// printArray(arr);




// function myFunction() {
//     console.log('myFunction');
//     let ans = 2 + 3;
//     console.log(ans);
//     console.log('hello');
// }
// setTimeout(myFunction, 8000);
// console.log('GEC end');







// console.log('start');




// const req = fetch("https://api.github.com/users/deepak3440");

// console.log(req);



// console.log('start');


// const req = fetch('https://dummyjson.com/products/1')
// console.log(req);
// const res = req.then(res => res.json())
// console.log(res);
// res.then((data) => console.log(data))
//     .catch((err) => {
//         console.log("Error ouucured in fetch api");
//     });
// // .then(json => console.log(json))

// console.log('end');









//Syntax of promise
// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 5;
//     if (x == 0) {
//         myResolve("ok");
//     } else {
//         myReject("Error");
//     }
// });
// myPromise.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); },
// );










