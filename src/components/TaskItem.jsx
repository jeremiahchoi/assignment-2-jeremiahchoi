function TaskItem({ t, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => onToggle(t.id)}
        />
        <span className ={t.completed ? 'done': ''}>{t.text}</span>
      </label>
      <button onClick={() => onDelete(t.id)}>delete</button>
      <hr />
    </li>
  );
}

export default TaskItem;