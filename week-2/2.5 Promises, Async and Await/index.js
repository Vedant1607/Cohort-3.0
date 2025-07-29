function setTImeoutPromisified(duration){
    return new Promise((resolve) => {
        // setTimeout(()=> {
        //     console.log("Hi");
        //     resolve("Executed")
        // },duration);
        setTimeout(resolve,duration);
    });
}

// const p = setTImeoutPromisified(3000)
// p.then((data) => console.log(data));

function callback() {
    console.log("1 second has passed");
}
// setTImeoutPromisified(1000).then(callback)


// Callback Hell
// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hello There");
//         },5000);
//     },3000);
// },1000);

// Use of Promise
// setTImeoutPromisified(1000).then(function(){
//     console.log("Hi");
//     return setTImeoutPromisified(3000)
// }).then(function(){
//     console.log("Hello");
//     return setTImeoutPromisified(5000)
// }).then(function(){
//     console.log("Hello There");
// });

// Async await syntax
async function solve(){
    await setTImeoutPromisified(1000);
    console.log("hi");
    await setTImeoutPromisified(3000);
    console.log("Hello");
    await setTImeoutPromisified(5000);
    console.log("Hi There");
}

// solve();
// console.log("after solve function");
const fs = require("fs")
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("arrgr.txt","utf-8",function(err,data){
            // err
            if (err){
                reject("File not found");
            } else {
                resolve(data);
            }
        })
    });
}

readFileAsync()
.then((d) => console.log("File has been found" + d))
.catch((e) => console.log(e));