import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const handleSelectCategory = (category) => {
    if (category === "All") {
      setTasks(TASKS); // Show all tasks
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
