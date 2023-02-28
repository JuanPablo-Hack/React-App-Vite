import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { tasks as data } from './data/tasks'
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTask] = useState([])
  useEffect(() => {
    setTask(data)
  }, [])
  const createTask = (task) => {
    setTask([...tasks, {
      name: task.name,
      id: tasks.length,
      description: task.description
    }]);
  }
  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
