import { Tabs } from 'expo-router' // Importa Tabs para la navegación con pestañas
import { MaterialIcons } from '@expo/vector-icons' // Importa MaterialIcons para los iconos de las pestañas

// Componente que define la navegación por pestañas
export default function TabsLayout() {
	return (
		<Tabs>
			{/* Primera pestaña: Inicio */}
			<Tabs.Screen
				name="index" // Corresponde al archivo app/(tabs)/index.tsx
				options={{
					title: 'Inicio', // Nombre que se muestra en la pestaña
					tabBarIcon: ({ color, size }) =>
						<MaterialIcons name="home" size={size} color={color} /> // Ícono de casa
				}}
			/>

			{/* Segunda pestaña: Buscar */}
			<Tabs.Screen
				name="search" // Corresponde al archivo app/(tabs)/search.tsx
				options={{
					title: 'Buscar', // Nombre en la pestaña
					tabBarIcon: ({ color, size }) =>
						<MaterialIcons name="search" size={size} color={color} /> // Ícono de lupa
				}}
			/>
		</Tabs>
	)
}
