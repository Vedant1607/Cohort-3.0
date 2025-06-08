import express from 'express' ;
import jwt from 'jsonwebtoken';

const app = express();

const JWT_SECRET = "randommyapp"

// This middleware lets us parse json body
app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username.length < 5) {
        res.json({
            message: "Your username is very small"
        })
        return;
    }

    if (users.find(u => u.username === username)){
        res.json({
            message: "Your username already exist"
        })
        return;
    }

    users.push({
        username:username,
        password:password,
    })

    res.json({
        message:"You are signed in"
    })

    return;
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
        const token = jwt.sign({
            username: username,
        }, JWT_SECRET); // convert their username over to a jwt

        res.json({
            message: token,
        })
        console.log(users);
    } else {
        res.status(400).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", function (req, res) {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: yourusername}
    const username = decodedInformation.username;

    const foundUser = users.find(u => u.username === username);

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

app.listen(3000, function(){
    console.log("Server is running")
}); // https server is listening on port 3000