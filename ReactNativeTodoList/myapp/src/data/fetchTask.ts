const url = 'http://127.0.0.1:3000/tasks';

// Define una interfaz para las tareas
interface Task {
  id: number;
  title: string;
  description: string;
}

export const fetchTask = async (): Promise<Task[] | void> => {
  try {
    const request = await fetch(url);

    if (!request.ok) {
      throw new Error();
    }

    const tasks: Task[] = await request.json();
    return tasks;
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
  }
};
