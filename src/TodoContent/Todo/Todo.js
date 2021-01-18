import React from 'react'
import "./Todo.css"

function Todo({ all, done, deleteTodo }) {
    return (
        <div className="todo_wrapper">
            <p className={all.com ? "t" : ""}>{ all.title }</p>
            <div className="icon_wrapper">
            <i className={all.doneBtn ? "fas fa-times-circle close" : "fas fa-check-circle done"} onClick={() => done(all.id)}></i>
            <i className="fas fa-trash-alt delete" onClick={() => deleteTodo(all.id)}></i>
            </div>
        </div>
    )
}

export default Todo
