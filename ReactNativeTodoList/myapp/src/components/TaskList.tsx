import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskItem from './TaskItem';

// Define el tipo de la tarea (Task)
interface Task {
  id: number;
  title: string;
  description: string;
}

interface ItemProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: ItemProps) => {
  return (
    <View style={styles.container}>
      <FlatList<Task>
        data={tasks}
        ListHeaderComponent={() => <Text style={styles.header}>check tasks</Text>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Separador horizontal entre filas
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
