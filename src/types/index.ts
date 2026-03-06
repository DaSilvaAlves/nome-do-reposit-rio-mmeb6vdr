interface Task  id: number;
  title: string;
  description: string;
  priority: string  completed: boolean;
}

interface TaskContext {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}