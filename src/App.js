import './App.css'
import AddTask from './AddTask'
import { useEffect, useState } from 'react';
import TaskList from './TaskList';
export default function App(){
  let storedTasks = JSON.parse(localStorage.getItem('tasks'))

  const [tasks,setTasks] = useState(storedTasks || [])
  console.log({tasks})
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
 
  },[tasks])
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