import React, { useState, useContext } from 'react';
import { Task } from '../types/index';
import { TaskContext from '../types/index';

const Feature2 = () => {
  const [priority, setPriority] = useState('');
  const { tasks, edit } = useContext(TaskContext);

  const handleEdit = (task:) => {
    newTask: Task = { ...task, priority };
    editTask(newTask);
  };

  return (
    <div>
      <h2>Definir Prioridades</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <select
              value={task.priority}
              onChange={(e) => setPriority(e.target.value)}
              aria="Prioridade da tarefa"
            >
              <option value="">Selecione uma prioridade</option>
              <option value="baixa">Baixa</option>
              <option value="média">Média</option>
              <option value="alta">Alta</option>
            </select>
            <button
              type=""
              className="button"
              onClick={() => handleEdit(task)}
            >
              Salvar
            </button>
          </li>
             </ul>
    </div>
  );
};

export default Feature2;