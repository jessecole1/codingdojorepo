import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
import React, {useState} from 'react';

function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {return}

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodoList([...todoList, todoItem]);
    setNewTodo("");
  }

  const handleDelete = (deleteIdx) => {
    const filteredIdx = todoList.filter((todo, idx) => {return idx !== deleteIdx;})
    setTodoList(filteredIdx)
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todoList.map((todo, i) => {
      if (idx === i) {todo.complete = !todo.complete}
      return todo;
    })
    setTodoList(updatedTodos);
  }


  return (
    <div className="App">
      <form onSubmit={(e) => {handleNewTodo(e);}}>
        <input onChange={(e) => {setNewTodo(e.target.value)}} type="text" value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>
        {
          todoList.map((item, idx) => {

            const classArr = [];
            if (item.complete) {classArr.push("lineThrough")}

            return (
            <div key={idx}>
              <input onChange={(event) => {handleToggleComplete(idx)}} type="checkbox"/>
              <span className={classArr.join(" ")}>{item.text}</span>
              <span><button style={{marginLeft: "20px"}} onClick={(e) => {handleDelete(idx)}}>Delete</button></span>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;
