import React from 'react' // Importa React
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native' // Importa los componentes necesarios de React Native
import { Link } from 'expo-router' // Importa Link de expo-router para la navegación

// Define la interfaz de propiedades que espera el componente MovieCard
interface MovieCardProps {
	movie: {
		imdbID: string // ID único de la película
		Title: string // Título de la película
		Year: string // Año de lanzamiento
		Poster: string // URL del póster de la película
	}
}

// Componente que muestra la tarjeta de una película
export default function MovieCard({ movie }: MovieCardProps) {
	return (
		// Usa Link de expo-router para navegar a la página de detalles de la película
		<Link href={`/movie/${movie.imdbID}`} asChild>
			{/* TouchableOpacity hace que la tarjeta sea presionable */}
			<TouchableOpacity style={styles.container}>
				{/* Muestra el póster de la película */}
				<Image source={{ uri: movie.Poster }} style={styles.poster} />
				{/* Contenedor de la información de la película */}
				<View style={styles.info}>
					<Text style={styles.title}>
						{movie.Title} {/* Muestra el título de la película */}
					</Text>
					<Text style={styles.year}>
						{movie.Year} {/* Muestra el año de lanzamiento */}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	)
}

// Estilos para el componente
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', // Alinea los elementos en fila (imagen + info)
		marginBottom: 16, // Margen inferior entre tarjetas
		backgroundColor: '#fff', // Fondo blanco
		borderRadius: 8, // Bordes redondeados
		overflow: 'hidden', // Evita que los hijos sobresalgan del borde
		elevation: 3 // Sombra en Android
	},
	poster: {
		width: 100, // Ancho del póster
		height: 150 // Altura del póster
	},
	info: {
		flex: 1, // Ocupa el espacio restante
		padding: 12, // Espaciado interno
		justifyContent: 'center' // Centra el contenido verticalmente
	},
	title: {
		fontSize: 18, // Tamaño del texto del título
		fontWeight: 'bold' // Hace que el título sea negrita
	},
	year: {
		fontSize: 14, // Tamaño del texto del año
		color: '#666' // Color gris para diferenciarlo del título
	}
})
