import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //here we update the values of note as input changes
    function handleChange(event) {
        const { value, name } = event.target; 
    
        setNote((prevValue) => {
          if (name === "title") {
            return {
              title: value,
              content: prevValue.content
            };
          } else if (name === "content") {
            return {
              title: prevValue.title,
              content: value
            };
          }
        });
    }
    
    //when form is submiited, this function is called
    //we call a function of parent component(App.jsx) linked through props
    //we pass note object through that function
    function addNotePass(event){
        props.addFunc(note);
        setNote(() => {
            return {title: "",
                content: ""};
        });
        event.preventDefault();
    }


    return (
        <div>
        <form onSubmit={addNotePass}>
            <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
            <button type="submit">Add</button>
        </form>
        </div>
    );
}

export default CreateArea;