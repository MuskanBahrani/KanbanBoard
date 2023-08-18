import React, { useState } from 'react';
import Column from './Column';
import './KanbanBoard.css';

const initialTasks = [
  { id: 1, title: 'Task 1', column: 'todo' },
  { id: 2, title: 'Task 2', column: 'inprogress' },
  { id: 3, title: 'Task 3', column: 'done' },
  // Add more tasks here
];

const Board = () => {
 
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (newTask.trim() === '') return;
  
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        column: 'todo',
      };
  
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    };
  
   
    const handleMoveTask = (taskId, newColumn) => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, column: newColumn } : task
      );
      setTasks(updatedTasks);
    };
    return (
      <div className="board">
        <Column title="To Do" tasks={tasks.filter(task => task.column === 'todo')} onMoveTask={handleMoveTask} />
        <Column title="In Progress" tasks={tasks.filter(task => task.column === 'inprogress')} onMoveTask={handleMoveTask} />
        <Column title="Done" tasks={tasks.filter(task => task.column === 'done')} onMoveTask={handleMoveTask} />
    
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="New task..."
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    );
   
    
    
    
    
    
    
   
  
  
    
  
    
  };
  
  
  

export default Board;
