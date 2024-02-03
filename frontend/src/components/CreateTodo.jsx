import { useState } from "react";

export function CreateTodo() {
    const [title,setTitle] = useState(""); 
    const [description,setdescription] = useState(""); 
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input><br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setdescription(value);
        }}></input><br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            fetch("https://localhost:3000/todos",{
                method:"post",
            body: JSON.stringify({
                title:title,
                description:description,
            })
            })
            
            .then(async function(res){
                const json = await res.json();
                alert("todo added successfully");
            })
        }}
        >Add a Todo</button>
    </div>
}
