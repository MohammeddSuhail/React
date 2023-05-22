import React from 'react'
                  //or prop , then prop.todo.title
export const TodoItem = ({todo , onDelete}) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>                               {/* we dont directy use onDelete(todo) because it will called while rendering itself */}
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
      <hr />
    </>
  )
}
