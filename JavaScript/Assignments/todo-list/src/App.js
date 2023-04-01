import logo from './logo.svg';
import './App.css';
import Task from "./components/Task";
import React, {useState} from 'react';

function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodoList([...todoList, todoItem]);
    setNewTodo("");
  }

  const handleDelete = (deleteIdx) => {
    const filteredIdx = todoList.filter((todo, idx) => {
      return idx !== deleteIdx;
    })
    setTodoList(filteredIdx)
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        handleNewTodo(e);
      }}>
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }} type="text" value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>
        {
          todoList.map((item, idx) => {
            return (
            <div key={idx}>
              <span>{item.text}</span>
              <span><button style={{marginLeft: "20px"}} onClick={(e) => {
                handleDelete(idx)
              }}>Delete</button></span>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;
