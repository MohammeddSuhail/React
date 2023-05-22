import React, { useState } from 'react';

export const AddTodo = (props) => {
    //connecting title and desc from form to these
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); //page won't reload
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }else{
            props.addTodo(title, desc);
            //for clearing the input field
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className="container my-3" >
        <h3>Add a Todo</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="titlt" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc}  onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            <button type="submit" onClick={submit} className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}
