const express = require("express");
const server = express();
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { createTask, removeTask, showTasks, updateTask, isComplete } = require("./src/controllers")


mongoose.connect("mongodb://localhost:27017/to-do-list");
mongoose.connection.on("connected", ()=>{
    console.log("DB Connected");
})
mongoose.connection.on("error", ()=>{
    console.log("DB error");
})


server.use(cors());
server.use(parser.json())

server.get("/show-tasks", showTasks);
server.post("/create-new-task",createTask);
server.put("/update-task",updateTask);
server.delete("/remove-task",removeTask);
server.patch("/patch",isComplete);


server.listen(5000, ()=>{
    console.log("CONNECTED TO PORT 5000");
})