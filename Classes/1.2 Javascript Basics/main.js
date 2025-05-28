// var a = 1;
// a = "Vedant";
// a = true;

// while(1){
//     a++;
//     console.log(a);
// }

function add(num1,num2){
    return num1 + num2;
};

// console.log(add("2","3"));

const canVote = function(age){
    return age>18 ? true:false
};

// console.log(canVote(17));

const sumToNum = function(num){
    sum = 0;
    for (let i =0;i<=num;i++){
        sum+=i;
    }
    return sum
};

// console.log(sumToNum(10));

const user = {
    "name":"Vedant",
    "age":19,
    "gender": "male",
};

// console.log("My name is "+user["name"])

function greet(user){
    let a = null;
    if (user.gender === "male"){
        st = "Mr.";
    } else {
        st = "Ms.";
    }
    console.log(`Hi ${st} ${user.name}, your age is ${user.age}`);
};

// greet(user);

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const isAdult = function(arr){
    for (let i=0;i<arr.length;i++){
        if (arr[i].age > 18 && arr[i].gender === "male"){
            console.log(arr[i]);
        }
    }
};

arrUsers = [{
    name:"Vedant",
    age:19,
    gender:"male"
    },
    {
        name:"Awnish",
        age:19,
        gender:"male"
    },
    {
        name:"John",
        age:15
    },
    {
        name:"Akrushi",
        age:19,
        gender:"female"
    }
];

// isAdult(arrUsers);

let arr = ["Vedant",21,{
    name:"Vedant",
    isAge:19,
    cities:["Delhi","Mumbai",{
        country:"Vedant"
    }]
}];

// console.log(arr[2].cities[2].country)

const isAdultModified = function(arr){
    // for (let i=0;i<arr.length;i++){
    //     if (arr[i].age > 18 && arr[i].gender === "male"){
    //         console.log(arr[i]);
    //     }
    // }

    newArr = arr.filter(arr => arr.age>18 && arr.gender === "male")
    return newArr;
};

newList = isAdultModified(arrUsers);
console.log(newList)