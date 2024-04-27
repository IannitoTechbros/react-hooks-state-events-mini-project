import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = { text: taskText, category: taskCategory };
    onTaskFormSubmit(newTask);
    setTaskText(""); // Reset input fields after submission
    setTaskCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          name="text"
          aria-label="Details"
        />
      </label>
      <label>
        Category
        <select
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
          name="category"
          aria-label="Category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
