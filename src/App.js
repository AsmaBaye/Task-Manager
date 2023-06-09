import './App.css'
import AddTask from './AddTask'
import { TaskProvider } from './TaskProvider';
import TaskList from './TaskList';
export default function App(){


   console.log("App rendered")
  return(
  <div className='App'>
    <h1 className='App-header'>
      Task List
    </h1>
    <TaskProvider>
      <AddTask />
      <TaskList />
    </TaskProvider>
  </div>
  );
}