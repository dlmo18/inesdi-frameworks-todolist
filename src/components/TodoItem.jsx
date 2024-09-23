function TodoItem({ task, editTask, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  let className = "todo-item " + (task.completed ? "completed" : "in-progress");

  return (
    <div className={className}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <div className="control">
        <button onClick={() => editTask(task.id)} title="Eliminar">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={() => deleteTask(task.id)} title="Eliminar">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
