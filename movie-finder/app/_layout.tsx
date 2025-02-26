import { Stack } from 'expo-router' // Importa Stack para manejar la navegación entre pantallas
import { PaperProvider } from 'react-native-paper' // Importa PaperProvider para aplicar Material Design

// Componente principal de la aplicación que define la estructura de navegación
export default function RootLayout() {
	return (
		// PaperProvider envuelve toda la app para habilitar los estilos de react-native-paper
		<PaperProvider>
			{/* Stack define la navegación en pila */}
			<Stack>
				{/* Pantalla principal (tabs) */}
				<Stack.Screen
					name="(tabs)" // Hace referencia al archivo (tabs) en la carpeta de páginas
					options={{
						headerShown: false // Oculta el header en la pantalla de pestañas
					}}
				/>

				{/* Pantalla de detalles de la película */}
				<Stack.Screen
					name="movie/[id]" // Hace referencia a la ruta dinámica de detalles de una película
					options={{
						title: 'Detalles' // Muestra "Detalles" como título en la barra de navegación
					}}
				/>
			</Stack>
		</PaperProvider>
	)
}
