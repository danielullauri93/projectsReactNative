import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchTask } from '../data/fetchTask';
import { Layout, TaskList } from '../components';

// Define el tipo de la tarea (Task)
interface Task {
  id: number;
  title: string;
  description: string;
}

export const HomeScreen = () => {
  // Especifica que el estado 'tasks' es un array de tipo 'Task'
  const [tasks, setTasks] = useState<Task[]>([]); // Se define como Task[]

  // Tipamos correctamente el tipo de la variable `data` en `loadTasks`
  const loadTasks = async (): Promise<void> => {
    const data = await fetchTask();
    if (data) {
      setTasks(data); // Actualizamos el estado con los datos obtenidos
    } else {
      console.log('No se pudieron cargar las tareas');
    }
  };

  // Ejecutamos la función `loadTasks` al montar el componente
  useEffect(() => {
    loadTasks();
  }, []); // Este array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
};
