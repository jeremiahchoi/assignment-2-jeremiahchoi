import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks in this list!</p>
  }

  return (
    <ul>
      {tasks.map(t=> (
        <TaskItem
          key={t.id}
          t={t}
          onToggle = {onToggle}
          onDelete = {onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList;