import { useState } from "react"
import List from "./components/List"
import NewTask from "./components/NewTask"

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(tasks);
    console.log(newTask);
  }

  return (
    <>
      <NewTask onAddTask={addTask}/>
      <List tasks={tasks}/>
    </>
  )
}

export default App
