import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

interface Task {
  title: string;
  description: string;
}
export const TaskFormScreen = () => {
  
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
  });

  const handleChange = (name: string, value: string) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    // Enviar la tarea al API o hacer algo con ella
    console.log(task);
    // Resetear el formulario
    setTask({ title: '', description: '' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write a Title"
        placeholderTextColor="#546557"
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a Description"
        placeholderTextColor="#546557"
        onChangeText={(text) => handleChange('description', text)}
      />

      <TouchableOpacity style={styles.btnSave} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  input: {
    marginBottom: 10,
    padding: 4,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#222',
  },
  btnSave: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00897B',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 3,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
