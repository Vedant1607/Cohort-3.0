import express from 'express';

const app = express();

// Way to accept as queries
app.get("/add",function(req,res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        ans:a+b
    })
})

// Way to accept as params
app.get("/add/:a/:b",function(req,res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        ans:a+b
    })
})

app.get("/subtract",function(req,res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    res.json({
        ans:a-b
    })
})
app.get("/multiply",function(req,res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    res.json({
        ans:a*b
    })
})
app.get("/divide",function(req,res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    
    res.json({
        ans:a/b
    })
})

app.listen(3000);