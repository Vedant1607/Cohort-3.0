import express from 'express' ;

const app = express();

// This middleware lets us parse json body
app.use(express.json());

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
         'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
         'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
         'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2' ,'3', '4', '5', '6', '7', '8', '9'];

    let token ="";

    for (let i=0;i<32;i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

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
        const token = generateToken();
        foundUser.token = token;
        users.token = token;
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
    const token = req.headers.token;
    const foundUser = users.find(u => u.token === token);

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