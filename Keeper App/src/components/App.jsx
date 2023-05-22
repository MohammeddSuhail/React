import React, { useState }  from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateSrea';


function App(){

    const [notes, setNotes] = useState([]); //it's an array of objects

    //adds the new note that it gets from child component(CreateSrea.jsx)
    function addNote(note){
        setNotes((prevValues)=>{
            return [...prevValues,note];
        });
    }

    //called in map function for displaying each note, inside it calls Note component for displaying notes
    function makeANote(note,index){
        return <Note 
                key={index}
                index={index}
                title={note.title}
                content={note.content}
                delFunc={delNote}
                />
    }

    //deletes array element(in this case a sigle note(object)) of notes whose index is passed from Note component
    function delNote(id){
        setNotes((prevValues) => {
            return prevValues.filter((item,index) =>{
                return index !== id;
            });
        });
    }


    return (
        <div>
            <Header/>
            <CreateArea addFunc={addNote}/>
            {notes.map(makeANote)}
            <Footer/>
        </div>
    );
}

export default App