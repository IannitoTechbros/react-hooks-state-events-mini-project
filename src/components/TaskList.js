import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(index)} // Pass onDelete callback
        />
      ))}
    </div>
  );
};

export default TaskList;
