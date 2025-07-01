import express from 'express';
import { UserModel, TodoModel } from './db.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { JWT_SECRET, auth } from './auth.js';

await mongoose.connect("mongodb+srv://sinhavedant0705:hezydZQgstLI0Ma7@cluster0.pn2ykoe.mongodb.net/todo-app-database")

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
        console.log(user._id);
        console.log(user._id.toString());
        const token = jwt.sign({
            id: user._id.toString(),
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

app.post('/todo', auth, function (req, res) {
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })
    
    res.json({
        userId: userId
    });
});

app.get("todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("Server is running");
});