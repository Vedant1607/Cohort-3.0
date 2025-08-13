//Types
// In TypeScript, think of types as set of Values
// TypeScript's types are open and not sealed

type Employee = {
    name:string;
    startDate:string;
};

type Manager = {
    name:string;
    department:string;
};

// Intersection
type TeamLead = Employee & Manager;
// & --> AND --> this means both employee and manager properties need to be here

let e: Employee = {
    name:"Harkirat",
    startDate:"01-02-2024",
}

let m: Manager = {
    name:"harkirat",
    department:"Electricity",
}

let t:TeamLead = {
    name:"harkirat",
    department:"electricity",
    startDate:"01-02-2025"
}

type GoodUser = {
    name:string;
    gifts:string;
};

type BadUser = {
    name:string;
    ip:string;
};

// Union
type User = GoodUser | BadUser;
// | --> OR --> this means user can be either goodUser or BadUser

const user:User = {
    name:"harkirat",
    ip:"aafsdfa",
    gifts:"gerger",
}