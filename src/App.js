import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Learn React',
			day: 'Monday',
			reminder: false
		},
		{
			id: 2,
			text: 'Learn Redux',
			day: 'Tuesday',
			reminder: true
		},
		{
			id: 3,
			text: 'Learn DevOps',
			day: 'Wednesday',
			reminder: false
		},
		{
			id: 4,
			text: 'Learn ReactHooks',
			day: 'Thursday',
			reminder: true
		},
		{
			id: 5,
			text: 'Learn ContextAPI',
			day: 'Friday',
			reminder: false
		}
	])

	// Delete task
	const deleteTask = id => {
		console.log('delete', id)
		setTasks(tasks.filter(task => task.id !== id))
	}

	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}

	return (
		<div className="container">
			<Header />
			<AddTask />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No tasks yet'
			)}
		</div>
	)
}

export default App
