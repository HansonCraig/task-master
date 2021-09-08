import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Doctors appt',
        day: 'Feb 5th at 2:30PM',
        reminder: 'true',
      },
      {
        id: 2,
        text: 'Deacon Meeting',
        day: 'Feb 6th at 4:30PM',
        reminder: 'false',   
      },
      {
        id: 3,
        text: 'Baseball game',
        day: 'Feb 8th at 3:30PM',
        reminder: 'false',
      }
    ])

//Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task 
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder:
    !task.reminder } : task
      )
    )
}

  return (
    <div className='container'>
      <Header
       onAdd={() => setShowAddTask 
       (!showAddTask)} 
       showAdd={showAddTask} 
       />
      {showAddTask && <AddTask onAdd={addTask} 
      />}
      {tasks.length > 0 ? (
      <Tasks 
      tasks={ tasks } 
      onDelete={ deleteTask } 
      onToggle={toggleReminder} 
      />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App
