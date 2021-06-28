import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Document Appointment',
      day: 'Feb',
      reminder: true
    },
    {
      id: 2,
      text: 'Document Appointment 2',
      day: 'Feb',
      reminder: true
    }
    , {
      id: 3,
      text: 'Document Appointment 3',
      day: 'Feb',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
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
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
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
