const express = require("express");

const {createTodo,updateTodo} = require("./types")
const {todo} = require("./db")
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors({}));
app.use(express.json());

app.post("/todo",(req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"you have sended worng inputs"
        })
        return;
    }
    todo.create({
        title:req.body.title,
        description:req.body.description,
        completed:false
    })
    .then(function(){
        res.json({
            msg:"user Created Successfully"
        })
    })
    .catch(function(){
        res.json({
            msg:"Admin Already Exists"
        })
    })

});

app.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put("/completed",async (req,res)=>{
     const updatePayLoad =req.body;
     const parsePayLoad = updateTodo.safeParse(updatePayLoad);

     if(!parsePayLoad.success){
        res.status(411).json({
            msg:"you have sended worng inputs"
        })
        return;
     }
     await todo.updateOne({
        id:req.body.id
     },{
        "$push":{
            completed:true
        }
     })
     res.json("Todo updated")
     

})


app.listen(port);