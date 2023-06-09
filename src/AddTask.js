import './AddTask.css'
import { useState } from 'react'
import { useTask } from './TaskProvider'

export default function AddTask(){
	const [task,setTask] = useState('')
	const {handleAdd} = useTask()

	const handleOnchange = e => {
		setTask(e.target.value)
	}

	const handleKeyDown = e =>{
		if(e.key === 'Enter')
		handleAdd(task)
	}

	console.log("AddTask rendered")

	return (
		<div className='AddTask'>
			<input placeholder='Add task here' className='taskinput'
			onChange={handleOnchange} onKeyDown={handleKeyDown}/>
			<button className='AddTaskButton' onClick={()=>handleAdd(task)}>Add Task</button>
		</div>
	)
	
}