import './App.css'
import AddTask from './AddTask'
import { useState } from 'react';
import TaskList from './TaskList';
export default function App(){

  const [tasks,setTasks] = useState([])

  function handleAdd(newtask){
    setTasks((prev)=>{
      return [...prev,newtask]
    })
  }
  function handleDelete(id){
    return setTasks([...tasks.slice(0,id),...tasks.slice(id+1)])
  }

  return(
  <div className='App'>
    <h1 className='App-header'>
      Task List
    </h1>
    <AddTask handleAdd={handleAdd}/>
    <TaskList tasks={tasks} handleDelete={handleDelete} setTasks={setTasks}/>
  </div>
  );
}