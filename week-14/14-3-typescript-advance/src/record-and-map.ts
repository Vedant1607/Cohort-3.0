type User = {
    id:string;
    username:string;
}

type Users = {
    [key:string]:User;
}

const users:Users = {
    "ras@qd1": {
        id:'ras@qd1',
        username:"harkirat",
    },
    "ras1dr@":{
        id:"ras1dr@",
        username:"raman",
    }
}

// the above code is messy and not clean that's why record and map comes into picture

// Record
type Users2 = Record<string, {age:number,name:string}>;

const users2:Users2 = {
    "ras@qdr1":{age:21,name:"harkirat"},
    "ras1dr@":{age:33,name:"agrwgr"},
}
console.log(users2);

// Map
// map contains key, value pairs

type UserType = {
    name:string;
    age:number;
};

const users3 = new Map<string, UserType>()

users3.set("ras@qdr1",{age:21,name:"harkirat"});
users3.set("ras1dr@",{age:33,name:"agrwgr"});

console.log(users3)

const getUser = users3.get("ras@qdr1");
console.log(getUser);

users3.delete("ras@qdr1")