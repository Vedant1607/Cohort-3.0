abstract class User {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    abstract greet():string;

    hello() {
        console.log("hi there")
    }
}
// in case of abstract class, we can give default implementation as well

class Employee extends User {
    name:string;
    constructor(name:string) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi";
    };
}