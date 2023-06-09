import './TaskList.css'
import { useState} from 'react'
import {  useTask } from './TaskProvider'
export default function TaskList(){
const {tasks,deleteTask,setTasks} = useTask()
const [condition,setCondition] = useState(null)
const [value,setValue] = useState("")

const handleOnchange = (e) => {
	setValue(e.target.value)
}

const handleKeyDown = (e) => {
	if(e.key === 'Enter'){
		setCondition(null)
		setTasks((prev) => (	
			prev.map((prev,index) => {
				if (index === +e.target.name)
					return value
		    	return prev
			})
			
		))
		setValue("")	
	}						
}

const taskslist = tasks.map(
	(task,id) => (
		<li key={id}>

			{condition === id ? <input name={id} value = {value || task } onChange={handleOnchange}
			onKeyDown={handleKeyDown} /> : task}

			<button className='button1' onClick={()=> deleteTask(id)}>Delete</button>
			<button className='button2' onClick={()=> setCondition(id)}>Edit</button>

		</li>
	)
)

console.log("TaskList rendered")
return (
	<ul className='list'>
		{taskslist}
	</ul>
)

}