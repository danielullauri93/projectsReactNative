import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Define el tipo de la tarea (Task)
interface Task {
  id: number;
  title: string;
  description: string;
}

interface ItemProps {
  task: Task;
}

const TaskItem = ({ task }: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemDesc}>{task.description}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginBottom: 10,
    borderRadius: 3,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 14,
  },
});
