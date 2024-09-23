import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Comprar pan",
      completed: true,
      isNew: false,
    },
    {
      id: 2,
      text: "Preparar almuerzos",
      completed: false,
      isNew: false,
    },
  ]);

  const [item, setItem] = useState({
    id: Date.now(),
    text: "",
    completed: false,
    isNew: true,
  });

  function addTask(item) {
    if (item.text == "") {
      return;
    }

    const newTask = { ...item };

    let tempTasks = [];

    let isNew = true;
    tasks.forEach((task) => {
      if (task.id === item.id) {
        tempTasks = [...tempTasks, newTask];
        isNew = false;
      } else {
        tempTasks = [...tempTasks, task];
      }
    });

    if (isNew) {
      tempTasks = [...tempTasks, newTask];
    }

    setTasks(tempTasks);
    clearTask();
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function clearTask() {
    setItem({
      id: Date.now(),
      text: "",
      completed: false,
      isNew: true,
    });
  }

  function editTask(id) {
    const task = tasks.find((task) => task.id === id);
    task.isNew = true;
    task.completed = false;

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return task;
      } else {
        return task;
      }
    });

    setItem(task);
    setTasks(updatedTasks);
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <div className="todo-form">
        <input
          className="item-name"
          value={item.text}
          onChange={(e) =>
            setItem({
              id: item.id,
              text: e.target.value,
              completed: item.completed,
              isNew: item.isNew,
            })
          }
        />
        <button
          className="item-button item-button-send"
          onClick={() => addTask(item)}
        >
          {item.isNew ? (
            <i className="fas fa-plus"></i>
          ) : (
            <i className="fas fa-edit"></i>
          )}
          {item.isNew ? "Agregar" : "Editar"}
        </button>
        <button
          title="Limpiar"
          className="item-button"
          onClick={() => clearTask()}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      <hr></hr>
      <div className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </>
  );
}
export default TodoList;
