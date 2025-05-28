import express from 'express';

function calculateSum(n){
    let ans = 0;
    for (let i=0;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/",function(req,res){ // req, res => request and response
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(`Hi your answer is ${ans}`);
    // res.send("Hello World!");
})

app.listen(3000);