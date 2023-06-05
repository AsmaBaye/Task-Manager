import './AddTask.css'
import { useState } from 'react'

export default function AddTask(props){
	const [task,setTask] = useState('')

	const handleOnchange = e => {
		setTask(e.target.value)
	}

	const handleKeyDown = e =>{
		if(e.key === 'Enter')
			props.handleAdd(task)
	}

	return (
		<div className='AddTask'>
			<input placeholder='Add task here' className='taskinput'
			onChange={handleOnchange} onKeyDown={handleKeyDown}/>
			<button className='AddTaskButton' onClick={()=>props.handleAdd(task)}>Add Task</button>
		</div>
	)
	
}