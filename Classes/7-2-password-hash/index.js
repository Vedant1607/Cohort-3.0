import express from 'express';
import { UserModel, TodoModel } from './db.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { JWT_SECRET, auth } from './auth.js';
import bcrypt from 'bcrypt';
import { z } from 'zod';

await mongoose.connect("mongodb+srv://sinhavedant0705:hezydZQgstLI0Ma7@cluster0.pn2ykoe.mongodb.net/todo-app-database");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    // req.body
    // {
    //      email:stirng,
    //      password:string,
    //      name:string
    // }

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        // check the password has 1 uppercase char, 1 lowercase char, 1 spl character
        password: z.string().min(3).max(10).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/,
            "Password must contain at least one lowercase letter, one uppercase letter, and one special character")
    });

    // const parseData = requiredBody.parse(req.body);
    const parseDataWithSucces = requiredBody.safeParse(req.body); // using safeParse, it returns what error is in the object that we passed on as the body

    if (!parseDataWithSucces.success){
        res.json({
            message: "Incorrect format",
            error:parseDataWithSucces.error.issues[0].message
        })
        return;
    }
    // input validation
    
    // take input directly from the req.body
    /*
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    */

    // take input from the already parsed data
    const { email, password, name } = parseDataWithSucces.data;

    const hashPassword = await bcrypt.hash(password, 5);
    console.log(hashPassword);
    
    try {
        await UserModel.create({
            name:name,
            password:hashPassword,
            email:email,
        });
    } catch (e) {
        res.json({
            message:"User with this email already exist",
            error: e,
        })
        return;
    }

    res.json({
        message: "You are logged in",
    })
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    })

    if (!response) {
        res.status(403).json({
            message:"User does not exist in our db",
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        console.log(response._id);
        const token = jwt.sign({
            id: response._id.toString(),
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

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("Server is running");
});