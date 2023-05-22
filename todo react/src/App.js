import './App.css';

import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';

import React, { useState, useEffect } from 'react';

function App() { 

  let initTodo;
  //checking whether todos exist, if no => use empty array else=> use it
  if(localStorage.getItem("todos") === null){
      initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    console.log("I am Gonna Delete He He He",todo)

    // //not possible to delte this way (won't change the display)
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);  //removing 1 ele at index

    //deleting the todo
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc) =>{
    let sno;
    if(todos.length === 0){
        sno = 1;
    }else{
      sno = todos[todos.length-1].sno;
    }
    
    const myTodo={
      sno: sno,
      title:title,
      desc: desc
    }
    //adding the todo
    setTodos([...todos, myTodo]);

    //saving done in 81st line itself so
    //updating todos in the local storage
    // localStorage.setItem("todos",JSON.stringify(todos));
  }

  //         //setTodos is func that updates todo
  // const [todos, setTodos] = useState(
  //     [{
  //       sno: 1,
  //       title: "Shop",
  //       desc: "Go to mart"
  //     },
  //     {
  //       sno: 2,
  //       title: "Watch a movie",
  //       desc: "Go to Cinema Hall"
  //     },
  //     {
  //       sno: 3,
  //       title: "Watch WWE",
  //       desc: "Watchwrestling"
  //     }]
  // );

            //setTodos is func that updates todo
  const [todos, setTodos] = useState(initTodo);

  //executed each time when there is change in todo
  //using useEffect because setTodos([...todos, myTodo]) won't immediately add the todo,
  //so sometimes localStorage.setItem("todos",JSON.stringify(todos)) may be executed before setTodos([...todos, myTodo]) so
  useEffect(() => {
      //updating todos in the local storage
      localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  return (

      <>
               {/* passing arguments to Header File*/}
        <Header title="My Todos List" searchBar={false}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
      </>
  );
}

export default App;
