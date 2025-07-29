function sum(a,b){
    return parseInt(a) + b;
}

let ans = sum(2,3);
// console.log(ans);

function sum(n) {
    let ans = 0;
    for (let i=0;i<=n;i++){
        ans += i;
    }
    // return ans;
    return (n*(n+1))/2;
}

// console.log(sum(10));

// I/O heavy operations
// Synchornous Approach
const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt","utf-8");
// console.log(contents2)

// Asynchronous Approach
// function print(err, data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",print);
// fs.readFile("b.txt","utf-8",function(err,data){
//     console.log(data);
// });

// console.log("Done");


function timeout() {
    console.log("Click the button");
}

console.log("Hi");

setTimeout(timeout,1000);

console.log("Welcome to loupe.");

let c = 0;
for (let i=0;i<10000000000;i++){
    c++;
}
console.log(c);
console.log("Expensive operation done");