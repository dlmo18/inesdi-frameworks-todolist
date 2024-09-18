import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Comprar pan',
            completed: true
        },
        {
            id: 2,
            text: 'Preparar almuerzos',
            completed: false
        }
    ]);
    
    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
   
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            } 
        }));
    }

    return (
        <>
            <div className="todo-form">
                <input
                    className="item-name" 
                    value={text}
                    onChange={e => setText(e.target.value)} 
                    />
                <button className="item-button" onClick={() => addTask(text)}>Agregar</button>
            </div>
            <hr></hr>
            <div className="todo-list">
                {tasks.map(task => (
                    <TodoItem
                        key={task.id} 
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted} 
                    />
                ))}
            </div>
        </>
    );
}
export default TodoList;
