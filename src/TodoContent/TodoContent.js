import React, { useContext } from 'react'
import Todo from './Todo/Todo'
import "./TodoContent.css"
import { Context } from "../context"

function TodoContent({ todo }) {

    const {done, deleteTodo} = useContext(Context)

    return (
        <div className="content_wrapper">
           { todo.map((el) => (
               <Todo all={el} done={done} key={el.id} deleteTodo={deleteTodo} />
           )) }
        </div>
    )
}

export default TodoContent
