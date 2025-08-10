function greet(name:string):string {
    return `Hello ${name}`;
}

function isEven(num:number):boolean{
    if(num%2 === 0) {
        return true;
    }
    return false;
}
interface Address {
    city:string;
    country:string;
    pincode:number;
}

interface User {
    name:string;
    age:number;
    address?: Address
};

interface Office {
    address?: Address
};

let user:User = {
    name:"Vedant",
    age:20,
    // address:{
    //     city:"Delhi",
    //     country:"India",
    //     pincode:0,
    // }
}
function isLegal (user:User):boolean {
    return user.age > 18 ? true : false
}
const ans = isLegal(user);

ans ? console.log("Legal") : console.log("Not Legal");