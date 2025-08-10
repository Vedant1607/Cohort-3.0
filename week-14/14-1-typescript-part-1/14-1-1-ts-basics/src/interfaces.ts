// defining type of object everytime violates the DRY principle
// that's why we use interfaces
let person:{
    name:string,
    age:number
} = {
    name:"vedant",
    age:20
}

function greet(user:{
    name:string,
    age:number,
}) {
    console.log(`hello ${user.name}`)
}

greet({
    name:"vedant",
    age:20
})

////



interface UserType {
    firstName:string,
    lastName:string,
    age:number
}

function greet2(user:UserType) {
    if (user.age > 18) {
        console.log("Legal")
    } else {
        console.log("Not Legal")
    }
}

greet2({
    firstName:"vedant",
    lastName:"sinha",
    age:20,
})