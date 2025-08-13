const user = {
    name:"harkirat",
    age:21,
};
user.name = "ahgiruheg";

console.log(user.name);

const a = [1,2,3];
a[0] = 4
console.log(a)
// even after using const, we're able to change values of arrays and objects;

type User = {
    name:string;
    age:number;
}
// type User = {
//     readonly name:string;
//     readonly age:number;
// }

const user2:Readonly<User> = {
    name:"John",
    age:21
}

// Readonly property lets us fix the contents of the objects so that we won't be able to change them afterwards in the future

// user2.age=12 // --> this throws an error

// real-world example
// we've marked config as readonly so some other developer won't be able to mistakenly change the apiendpoints and apikey
interface Config {
    endpoint:string;
    apikey:string;
}
const config:Readonly<Config> = {
    endpoint:"https://api.example.com",
    apikey:"agihguiehrgu2984"
};

// config.apikey = ""
