import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask)
      })
    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        (task.id === id ? { ...task, reminder: data.reminder } : task)
      )
    )
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) // javascript object to json string 
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  const name = 'Chaiyarin';
  const x = true;
  return (
    <Router>
      <div className="container">
        <Header title="Chaiyarin" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
        {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'ไม่มีข้อมูล'}
        <Route path='/about' component={About} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
