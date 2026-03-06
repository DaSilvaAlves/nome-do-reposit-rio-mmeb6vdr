import React, { useContext } from 'react';
import { Task } from '../types/index';
import { TaskContext } from '../types/index';

 Feature3 = () => {
  const { tasks, toggleCompleted } = useContext(TaskContext);

  const handleToggle = (id: number) => {
    toggleCompleted(id);
  };

  return (
    <div>
      <h2>Marcar como Concluída</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <>{task.title}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              aria-label="Marcar como concluída"
            />
          </li>
        ))}
      </ul>
   div>
  );
};

export default Feature3;