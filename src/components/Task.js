import React from 'react';

const Task = ({ text, category, onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Call the onDelete callback passed from TaskList component
  };

  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="category">{category}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
