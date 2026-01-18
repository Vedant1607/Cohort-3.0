import express from "express";

const app = express();

app.get("/healthcheck", (req, res) => {
  res.send("Hello World");
});

app.get("/signin", (req, res) => {
  res.send("hello world");
});

app.get("/chat", (req, res) => {
  res.send("hello world");
});

app.listen(3001);