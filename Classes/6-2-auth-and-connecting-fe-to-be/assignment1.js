import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const JWT_SECRET = "legion007";

let users = [];

app.use(express.json());

const logger = function (req, res, next) {
    console.log(req.method + " request came");
    next();
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username.length < 5) {
        res.json({
            msg:"Size of username must be between 5 and 10"
        })
        return;
    }

    if (users.find(u => u.username === username )) {
        res.json({
            msg:"User with this username already exist"
        })
        return;
    }

    users.push({
        username:username,
        password:password,
    })

    res.json({
        msg:"You are signed in"
    })

    console.log(users);
})

app.post('/signin', logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser){
        const token = jwt.sign({
            username: username,
        }, JWT_SECRET);

        res.header('jwt', token);
    
        res.json({
            jwt:token,
        })
    } else {
        res.status(400).send({
            msg:"Wrong credentials"
        });

    }
})

const auth = function (req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", logger, auth, function (req, res) {
    const foundUser = users.find(u => u.username === req.username);

    if (foundUser) {
        res.json({
            username:foundUser.username,
            password:foundUser.password,
        })
    } else {
        res.json({
            message: "Token invalid",
        })
    }
})


app.listen(3000, () => {
    console.log("Server is Running");
})