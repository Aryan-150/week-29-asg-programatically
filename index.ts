import express from "express";
import os from "os";

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello world...!");
})

app.get("/host", (req,res) => {
    res.send(os.hostname());
})

app.listen(3000);