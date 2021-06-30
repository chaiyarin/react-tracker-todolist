import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        (task.id === id ? { ...task, reminder: !task.reminder } : task)
      )
    )
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task) // javascript object to json string 
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  const name = 'Chaiyarin';
  const x = true;
  return (
    <div className="container">
      <Header title="Chaiyarin" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'ไม่มีข้อมูล'}

    </div>
  );
}

export default App;
