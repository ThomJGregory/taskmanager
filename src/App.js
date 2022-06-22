import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	)
}

export default App
