const mongoose = require("mongoose");
mongoose.connect("")

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('Todo_app',todoSchema);


module.exports={
    todo
}