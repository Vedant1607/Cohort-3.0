let x:number = 1;
// x = "harkirat"; // --> throws an error
console.log(x);

const greetUser = (firstName:string) => {
    console.log(`Hello ${firstName}`);
};
greetUser("Vedant")
// greetUser(10)

const sumOfTwoFunctions = (a:number, b:number) => {
    return a + b;
}
console.log(sumOfTwoFunctions(5,4))

const isLegal = (age:number) => {
    if (age > 18) {
        return true;
    }
    return false;
}

console.log(isLegal(20));

function delayedCall(fn: (n:number) => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hello");
})

function log () {
    console.log("hi there")
    console.log("hi there")
}

delayedCall(log)

const greet = (name) => `Hello, ${name}!`;
greet("vedant");