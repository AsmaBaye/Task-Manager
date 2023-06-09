import { createContext,useContext,useState } from "react";

const TaskContext = createContext()


function TaskProvider({children}){

	let storedTasks = JSON.parse(localStorage.getItem('tasks'))
	const [tasks,setTasks] = useState(storedTasks || [])

	function handleAdd(newtask){
		setTasks((prev) => {
			const updated = [...prev,newtask]
			localStorage.setItem('tasks',JSON.stringify(updated))
			return updated
	})
   }

   function deleteTask(id){
   	const updated= [...tasks.slice(0,id),...tasks.slice(id+1)]
   	localStorage.setItem('tasks',JSON.stringify(updated))
   	setTasks(updated)
   }

   return (
		<TaskContext.Provider value={{tasks,handleAdd,deleteTask,setTasks}} >
			{children}
		</TaskContext.Provider>
	)

}
function useTask(){
	const context = useContext(TaskContext)
	if(!context){
		throw new Error('useTask must be used within a TaskProvider')
	}
	return context
}
export {TaskContext,TaskProvider,useTask};