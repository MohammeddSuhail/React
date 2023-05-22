import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  let todoStyle = {
    minHeight:"45vh"
  }
  return (
    <div className="container" style={todoStyle}>
      <h3 className="text-center my-3">Todo List </h3>
      
      {/* fir looping through todos  */}
      {props.todos.length === 0 ? "No To-Do to display" : 
       props.todos.map((todo)=>{
        return <TodoItem todo = {todo } sno={todo.sno} onDelete={props.onDelete}/>
      })}

    {/*  
        If we want to add more than 1 tag in return satement
        {props.todos.map((todo)=>{
          return( 
          <>
          <h4>Yo</h4>
          <TodoItem todo = {todo}/>
          </>
          )
        })}

      */}
      
    </div>
  ) 
}
