import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function(socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("Current price of solana is " + Math.random() * 1000);
    }, 500);

    socket.on("message", (e) => {
        console.log(e.toString());
    })
});
