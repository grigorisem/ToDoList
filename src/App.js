import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputToDo } from './components/InputToDo';
import { TaskToDo } from './components/TaskToDo';


function App() {
  const [toDo, setToDo] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskToDo = {
      id : Math.random(),
      value : toDo,
      status : false,
    };
    //let newTask = [taskToDo, ...tasks];
    //setTasks(newTask);
    if (toDo != '') {
      setTasks(prev => [taskToDo, ...prev])};
    setToDo('');
  }
  const deleteTask = (id) => {
    let del = tasks.filter(e => e.id !== id);
    setTasks(del);
  }

  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status} : {...e});
    setTasks(toggle);
  }
  
  const taskToDoList = tasks.map(e => <TaskToDo 
    id = {e.id} value = {e.value} 
    status = {e.status} 
    deleteTask = {deleteTask}
    toggleTask = {toggleTask} />
  )
  return (
    <div className="App">
      <Header />
      <InputToDo addTask={addTask} toDo = {toDo} setToDo = {setToDo}/>
      {taskToDoList}
    </div>
  );
}

export default App;
