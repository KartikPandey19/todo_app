const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kartikDb:gCGrOsUhN1F9izeM@cluster0.v7ud9lb.mongodb.net/Todo_App")

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('Todo_app',todoSchema);


module.exports={
    todo
}