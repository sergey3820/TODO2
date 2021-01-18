import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './Header/Header'
import TodoContent from './TodoContent/TodoContent'
import { Context } from "./context"

function App() {

  const [todo, setTodo] = useState([
    { id: 1, title: "Washing", com: false, doneBtn: false },
    { id: 2, title: "Have brackfast", com: false, doneBtn: false },
    { id: 3, title: "Buy milk", com: false, doneBtn: false },
  ])

  const [input, setInput] = useState('')
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  const done = id => {
    setTodo(todo.map(t => {
      if (t.id === id) {
        t.com = !t.com
        t.doneBtn = !t.doneBtn
      }
       return t;
    }))
  }

  const takeValue = (e) => {
     console.log(e.target.value)
     setInput(e.target.value)
  }

  const addTodo = () => {
    setTodo([
      ...todo,
      { id: Date.now(), title: input, com: false, doneBtn: false },
    ])
    setInput('')
  }

   const deleteTodo = (id) => {
     setTodo(todo.filter(to => to.id !== id))
   }

  return (
    <Context.Provider value={{
       takeValue, addTodo, done, deleteTodo
    }}>
      <>
      { loader ? (
        <h1 className="loading_title">Loading... </h1>
      ) : <div className="app_wrapper"> 
      <Header input={input} setInput={setInput} />
      { todo.length ? (
          <TodoContent todo={todo} setTodo={setTodo}  />
      ) : (
         <div className="content_wrapper">
           <h1 className="notTodo">Not Todo</h1>
         </div>
      ) }
   </div> }
    </>
    </Context.Provider>
  )
}

export default App
