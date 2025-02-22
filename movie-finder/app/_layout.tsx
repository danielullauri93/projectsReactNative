import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        {/* Pantalla principal (tabs) */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false, // Oculta el header en las pantallas de tabs
          }}
        />
        {/* Pantalla de detalles de la película */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            title: 'Detalles', // Título de la pantalla de detalles
          }}
        />
      </Stack>
    </PaperProvider>
  );
}