interface People {
    name:string;
    age:number;
    // greet:() => string;
    isLegal:() => boolean;
}

let person:People = {
    name:"Vedant",
    age:21,
    // greet:() => {
        // return "hi";
    // }
    isLegal(){
        return true;
    }
}

// let greeting = person.greet();
// console.log(greeting);

class Manager implements People {
    // name:string;
    // age: number;

    constructor(public name:string, public age:number) {
        this.name = name;
        this.age = age;
    }
    isLegal = () => {
        return this.age > 18 ? true : false; 
    };
}

let user = new Manager("John", 30);
console.log(user.name);
console.log(user.isLegal())