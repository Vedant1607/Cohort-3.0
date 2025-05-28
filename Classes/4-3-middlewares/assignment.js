import express from 'express';

const app = express();

// Create a global middleware the keeps count
/*
let requestCount = 0;

app.use(function(req,res,next){
    requestCount++;
    next();
})

app.get('/user',function(req,res){
    res.status(200).json(requestCount);
})

app.get('/requestCount',function(req,res){
    res.status(200).json(requestCount);
})*/


// Create a 
/*
let numberOfRequestForUser = {};
setInterval(()=>{
    numberOfRequestForUser = {}
},1000);

app.use(function(req,res,next){
    const userId = req.headers["user-id"];
    if (numberOfRequestForUser[userId]) {
        numberOfRequestForUser[userId]++;
        if (numberOfRequestForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    } else {
        numberOfRequestForUser[userId] = 1;
        next()
    }
})

app.get("/",function(req,res){
    res.json({
        msg:numberOfRequestForUser
    })
})*/

// Error Count
let errorCount = 0;

app.get("/user",function(req,res) {
    throw new Error("user not found");
    // res.status(200).json({name:"John"})
})

app.use(function(err, req ,res ,next) {
    errorCount++;
    res.status(500).send({error:err.message});
})

app.listen(3000);