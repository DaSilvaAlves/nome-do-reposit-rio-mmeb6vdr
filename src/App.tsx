import React, { useState, createContext, useContext } from 'react';
import Feature1 from './features/feature-1/index';
import Feature2 from './features/feature-2/index';
import Feature3 from './features/feature-3/index';
import { Task } from './types/index';
import { TaskContext } from './types/index';

const TaskContextProvider = createContext<TaskContext | null>(null);

const App = () => {
  [tasks, setTasks] = useState<Task[]>([]);

  const add = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const editTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask.id === task.id ? task : prevTask))
    );
  };

  const deleteTask = (id: number) =>    setTasks((prevTasks) => prevTasks.filter(() => task.id id));
  };

  const toggleCompleted = (id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? {task, completed:task.completed } : task
      )
    );
  };

  const taskContext: TaskContext = {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleCompleted,
  };

  return (
    <TaskContextProvider.Provider value={taskContext}>
      <Feature1 />
      <Feature2      <Feature3 />
    </TaskContextProvider.Provider>
  );
export default App;