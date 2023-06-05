import './TaskList.css'
import { useState } from 'react'

export default function TaskList(props){



const taskslist = props.tasks.map(
	(task,id) => (
		<li key={id}>

			{task}

			<button className='button1' >Delete</button>
			<button className='button2' >Edit</button>

		</li>
	)
)

return (
	<ul className='list'>
		{taskslist}
	</ul>
)

}