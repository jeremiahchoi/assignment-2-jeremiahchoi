import { useState } from 'react';

function TaskForm({ onCreate }) {
  const [draft, setDraft] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (draft.trim() === '') { return; }
    onCreate(draft);
    setDraft('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Create task"
      />
      <button type= "submit">Create</button>
    </form>
  )
}

export default TaskForm;