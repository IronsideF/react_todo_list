import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {name:'Buy Shopping', priority:false},
    {name:'Clean Bathroom', priority:true},
    {name:"Car's MOT", priority:false},
  ]);

  const [newTaskName, setNewName] = useState("");
  const [newTaskPrio, setNewPrio] = useState(null);
  
  const taskNodes = tasks.map((task, i) => <li key={i} className={task.priority ? 'high' : 'low'}>
    <span>{task.name}</span>
  </li>);

  const handleTaskInput = (event) => {
    setNewName(event.target.value);
  }

  const addNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    console.log(newTaskPrio);
    copyTasks.push({name:newTaskName, priority:newTaskPrio});
    setTasks(copyTasks);
    setNewName("");
    setNewPrio(null);
  }

  return (
    <>
    <h1>ToDo's</h1>
    <form onSubmit={addNewTask}>
      <label htmlFor="task">Task Name</label>
      <input type="text" name='task' id='task'
        value={newTaskName} onChange={handleTaskInput}
      />
      <label htmlFor="high">High</label>
      <input type="radio" name="priority" id="high" onClick={() => setNewPrio(true)} />
      <label htmlFor="low">Low</label>
      <input type="radio" name="priority" id="low" onClick={() => setNewPrio(false)} />
      <input type="submit" value="Save Item" />
    </form>

    <ul>{taskNodes}</ul>

    </>);
}

export default App;
