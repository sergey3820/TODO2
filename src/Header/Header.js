import React, { useContext } from 'react'
import "./Header.css"
import { Context } from "../context"

function Header() {

    const {takeValue, addTodo} = useContext(Context)

    return (
        <div className="header_wrapper">
            <div className="input_wrapper">
            <input type="text" placeholder="Enter your task..." className="header_inp" onChange={takeValue} />
            <button type="button" className="btn btn-dark add" onClick={addTodo}>+</button>
            </div>
        </div>
    )
}

export default Header
