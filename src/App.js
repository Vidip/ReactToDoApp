import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState, useEffect } from 'react';

function App() {

  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
    useEffect(() => {
      console.log("hello");
      filterHandler();
    }, [todos,status]);

  //Functions
const filterHandler = () => {
  switch(status)
  {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}

  return (
      <div className="App">
        <header>
         <h1>Vidip's ToDo List</h1>
        </header>
        <Form todos={todos} inputText={inputText} 
        setTodos={setTodos} setStatus={setStatus}
        setInputText={setInputText}/>
        <ToDoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
      </div>
  );
}

export default App;
