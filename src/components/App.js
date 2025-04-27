// App.js
import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data"; // You already have these
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
