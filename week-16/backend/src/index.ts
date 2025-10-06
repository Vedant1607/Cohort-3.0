import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function(socket) {
    console.log("user connected");
    // setInterval(() => {
    //     socket.send("Current price of solana is " + Math.random() * 1000);
    // }, 500);

    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() === "ping");
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        console.log(e.toString());
    })
});
