import express from 'express';

const app = express();

const isOldEnoughMiddleware = (req, res, next) => {
    if (req.query.age >= 18) return next();
    res.json({
        msg:("You cannot drink")
    })
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/drink', isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg:"You can drink"
    })
}) 

app.listen(3000);