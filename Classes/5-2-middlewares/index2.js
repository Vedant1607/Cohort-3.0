import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    domains:["http://localhost:3000/sum"]
}));

// A way to host both front end and backend on the same server
// do this in commonJs
/*
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});*/

app.post("/sum", function(req,res) {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    })
});

app.listen(3000);