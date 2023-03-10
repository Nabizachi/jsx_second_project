import React, { useState } from 'react'
import Context from './context';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' },
  ])


  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }
  return (

    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>Список дел</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length
          ?
          <TodoList todos={todos} onToggle={toggleTodo} />
          :
          <h2>Дела закончились</h2>
        }
      </div>
    </Context.Provider>
  )
}

export default App;
