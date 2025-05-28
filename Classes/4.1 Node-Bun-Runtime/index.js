// function sum(a,b){
//     return a+b;
// }
// // console.log(sum(2,3));

// const chalk = require('chalk');

// console.log(chalk);

const fs = require("fs");

// fs.readFile("/d/Cohort 3.0/Classes/4.1 Node-Bun-Runtime/a.txt","utf-8",(err,data)=>{
//     const count = data.split(' ').length; 
//     console.log("You have "+count+" words in this file");
// });

fs.readFile('data.json', 'utf8', (err, data) => {
    let count = 0;
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try{

        const jsonData = JSON.parse(data); // Convert JSON string to object

        jsonData.push({id:count,data:"Hello"});
        console.log(jsonData);

        fs.writeFile('data.json',JSON.stringify(jsonData,null,2),err=>{
            if(err){
                console.log(err);
            } else {
                console.log("File Added");
            }
        });
    } catch(err){
        console.log(err);
    }
});