import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

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

  const name = 'Chaiyarin';
  const x = true;
  return (
    <div className="container">
      <Header title="Chaiyarin"></Header>

      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'ไม่มีข้อมูล'}
      
    </div>
  );
}

export default App;
