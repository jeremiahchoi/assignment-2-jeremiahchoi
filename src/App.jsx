import './App.css'
import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Submit INFO 153A Assignment 2", completed: true},
    {id: 2, text: "Get a job", completed: false},
  ])
  const [list, setList] = useState('all');

  const createTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false 
    };
    setTasks([...tasks, newTask]);
  }

  const completeTask = (id) => {
    setTasks(tasks.map(t => t.id == id ? { ...t, completed: !t.completed} : t));
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id != id))
  }

  const activeTasks = 
    list === 'completed' ? tasks.filter(t => t.completed)
      : list === 'active' ?
      tasks.filter(t => !t.completed)
      : tasks;

  return (
    <div className="app">
      <header className = "main-header">
        <TaskCounter tasks={tasks} />
      </header>

      <div className="page-layout">
      <nav aria-label="Task categories">
        <ul>
            <li>
                <img src="/src/assets/inbox_icon.png" alt="" />
                <span>Inbox</span>
                <span className="task-count"> {tasks.length}</span>
            </li>
            <li>
                <img src="/src/assets/calendar_icon.png" alt="" />
                <span>Today</span>
                <span className="task-count">{tasks.length}</span>
            </li>
            <li>
                <img src="/src/assets/upcoming_icon.png" alt="" />
                <span>Upcoming</span>
            </li>
        </ul>
    </nav>
      <main>
        <h1>Tasks</h1>
        <div className = "filters">
          <button className={list === 'all' ? 'active' : ''}
            onClick = {() => setList('all') }
          >All</button>
          {' | '}
          <button
            className={list === 'active' ? 'active': ''}
            onClick = {() => setList('active')}
            >Active</button>
          {' | '}
          <button 
            className={list === 'completed' ? 'active': ''}
            onClick = {() => setList('completed')}
          >Completed</button>
        </div>
        <TaskForm onCreate={createTask}/>
        <TaskList
          tasks={activeTasks}
          onToggle={completeTask}
          onDelete= {deleteTask}
        />
      </main>

      </div>
    </div>
  )
}

export default App
