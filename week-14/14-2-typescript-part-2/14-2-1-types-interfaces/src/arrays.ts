function getMax(nums: number[]): number | undefined {
    if (nums.length === 0) {
        return undefined;
    }

    // two ways to convince ts typesafety that nums is not undefined
    let maxValue = nums[0]!; // the "!" tells TS: this is definitely not undefined
    // let maxValue = nums[0] as number;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i]! > maxValue) { // add "!" here too
            maxValue = nums[i]!;
        }
    }
    return maxValue;
}

let ans = getMax([1, 2, 3, 4]);
console.log(ans);

interface Address {
    city:string;
    pincode:string;
}

interface User{
    name:string;
    age:number;
    // Both ways can be used to define an array of address
    addresses:{
        city:string;
        pincode:string
    }[];
    // addresses:Address[];
}

let user:User = {
    name:"harkirat",
    age:21,
    addresses:[],
}

function isLegal(user:User[]){
    let legalUsers = [];
    for (let i = 0;i<user.length;i++){
        if (user[i]!.age > 18){
            legalUsers.push(user[i]!.name);
        }
    }
    return legalUsers;
}

let dummy:User[] = [{
    name:"vedant",
    age:21,
    addresses:[],
}]
const filteredUsers = isLegal(dummy)
console.log(filteredUsers)