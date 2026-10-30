function TaskCounter({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;

  return (<p className="task-counter">
    <img src="/src/assets/check_icon.png" alt="" />
    <span>{tasks.length} / {completed}</span>
  </p>);
}

export default TaskCounter;