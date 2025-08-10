import express from 'express';

const app = express();

// function that returns a boolean if the age of the person is more than 14
function isOldEnough(age){
    if (age >= 14) {
        return true;
    } return false;
}

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if (age >= 14){
        next();
    } else {
        res.json({
            msg:"Sorry you're not of age yet"
        })
    }
}

// uses the middleware on the whole application
// app.use(isOldEnoughMiddleware);

app.get("/ride1", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg:"Sorry you're not of age yet"
        })
    }
})

// Uses the middleware only in this specific request
app.get("/ride2",isOldEnoughMiddleware , function (req, res) {
    res.json({
        msg: "You have successfully riden the ride 2"
    })
})

app.listen(3000);