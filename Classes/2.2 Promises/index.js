// Classes in JS
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, "blue"); // instance of the rectangle class, object of the rectangle class
const rect2 = new Rectangle(2, 10, "red");
// console.log(rect.width * rect.height);
const area = rect.area();
// console.log(area);
// console.log(rect2.area())
// rect.paint()
// rect2.paint()

// Assignment-1: Create a circle class

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    const area = this.radius * this.radius * Math.PI;
    return area;
  }

  paint() {
    console.log(`Painting with ${this.color}`);
  }
}

const circle = new Circle(4, "orange");
// console.log(circle.area())
// circle.paint();

class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log(`Painting with ${this.color}`);
  }
  getDiscription() {
    console.log(`A shape with color ${this.color}`);
  }
}

class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }
  area() {
    const area = this.side ** 2;
    return area;
  }
}

const sqr = new Square(4, "green");
// console.log(sqr.area());
// sqr.paint()
// sqr.getDiscription()

const now = new Date(); // Current date and time
// console.log(now.getDate()); // Outputs the date in ISO format

const map = new Map();
map.set("name", "Vedant");
map.set("age", 30);
const firstName = map.get("name");
// console.log(firstName);

// A Promise in JavaScript is an object that represents the eventual completion
// (or failure) of an asynchronous operation and its resulting value.

function main() {
  console.log("");
}

// setTimeout(main,3000); // callback the main function after 3 seconds

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed");
}
// setTimeoutPromisified(3000).then(callback);

function wait3s(resolve) {
  setTimeout(resolve, 3000);
}
function promisified() {
  return new Promise(wait3s);
}
function main() {
  console.log("main is called");
}
// promisified().then(main);

// callback hell
/*
setTimeout(function(){
    console.log("Hi");
    setTimeout(()=>{
        console.log("Hello");
        setTimeout(function(){
            console.log("Hello There");
        },5000);
    },3000);
},1000);
*/

// Promisified version

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hello there");
        });
    });
});


// create the promisified version of fs.readfile, fs.writefile,cleanfile
const fs = require("fs");

function print(err, data) {
  console.log(data);
}
function read_file() {
  return new Promise((resolve) => {
    const newdata = fs.readFile("a.txt", "utf-8", print);
    // console.log(newdata);
  });
}
// read_file().then(console.log("Done"));

function write_file(data){
    return new Promise(resolve =>{
        fs.writeFile("a.txt",data,"utf-8",(err) => {
            if(!err){
                resolve("File written successfully");
            }
        });
    });
}

// write_file("Hi, I am Legion")
//     .then((message)=>{
//         console.log(message);
//         console.log("Done");
//     });

function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    });
}

function readFile(filename){
    return new Promise(readTheFile);
}
const p = readFile();

function callback(contents){
    console.log(contents);
}
p.then(callback);