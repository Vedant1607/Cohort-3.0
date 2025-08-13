// interfaces vs types
// create two types called user and admin
// create a function that takes either a user or an admin as an input and returns a string saying "welcome [name]"

type User = {
    name:string;
    permission:string;
}

type Admin = {
    name:string;
    age:number;
}

function greet(person:User|Admin) {
    console.log(`Hello ${person.name}`);
}

interface user {
    age:number | string;
}

interface Point2d{
    x:number;
    y:number;
}

const intermediaryPoint = {x:1,y:1,name:"john"}
const p3:Point2d = intermediaryPoint;