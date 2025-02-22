import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export default function TabsLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Inicio',
					tabBarIcon: ({ color, size }) =>
						<MaterialIcons name="home" size={size} color={color} />
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: 'Buscar',
					tabBarIcon: ({ color, size }) =>
						<MaterialIcons name="search" size={size} color={color} />
				}}
			/>
		</Tabs>
	)
}
