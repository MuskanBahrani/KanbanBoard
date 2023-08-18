import React from 'react';
import Card from './Card';
import './Column.css'; 


const Column = ({ title, tasks, onMoveTask }) => {
    const handleTaskMove = (taskId, newColumn) => {
      onMoveTask(taskId, newColumn);
    };
  
    return (
      <div className="column">
        <h3>{title}</h3>
        {tasks.map(task => (
          <div key={task.id} className="card">
            {task.title}
            {title === 'To Do' && (
              <button id="btn3" onClick={() => handleTaskMove(task.id, 'inprogress')}>
                Move to In Progress
              </button>
            )}
            {title === 'In Progress' && (
              <>
                <button id="btn1" onClick={() => handleTaskMove(task.id, 'todo')}>
                  Move to To Do
                </button>
                <button id="btn2" onClick={() => handleTaskMove(task.id, 'done')}>
                  Move to Done
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  
  
  
  export default Column;
 

  

