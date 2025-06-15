import express from 'express';
import { UserModel, TodoModel } from './db.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

await mongoose.connect("mongodb+srv://sinhavedant0705:hezydZQgstLI0Ma7@cluster0.pn2ykoe.mongodb.net/todo-app-database")

const JWT_SECRET = "legionSecret";

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.create({
        name:name,
        password:password,
        email:email,
    });

    res.json({
        message: "You are logged in",
    })
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_SECRET);

        res.json({
            message: "You are logged in",
            token: token,
        })
    } else {
        res.status(400).json({
            message: "Incorrect credentials",
        })
    }
});

app.get("todos", function (req, res) {

});

app.listen(3000, () => {
    console.log("Server is running");
});