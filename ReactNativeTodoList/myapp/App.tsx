import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, TaskFormScreen } from './src/screens';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Tasks App',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20,
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskForm')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Add Task</Text>
              </TouchableOpacity>
            ),
          })}
        />
        {/* Pantalla TaskForm */}
        <Stack.Screen
          name="TaskForm"
          component={TaskFormScreen}
          options={{
            title: 'Add Task',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
