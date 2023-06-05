import './TaskList.css'
import { useState } from 'react'

export default function TaskList(props){

const [condition,setCondition] = useState(null)
const [value,setValue] = useState("")

const handleOnchange = (e) => {
	setValue(e.target.value)
}



const taskslist = props.tasks.map(
	(task,id) => (
		<li key={id}>

			{condition === id ? <input name={id} value = {value || task } onChange={handleOnchange}
			 /> : task}

			<button className='button1' onClick={()=> props.handleDelete(id)}>Delete</button>
			<button className='button2' onClick={()=> setCondition(id)}>Edit</button>

		</li>
	)
)

return (
	<ul className='list'>
		{taskslist}
	</ul>
)

}