import React, { useEffect } from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import { useMovieStore } from '../../src/store/useMoveStore'
import MovieCard from '../../src/components/MovieCard'

export default function HomeScreen() {
	// Extrae datos y funciones del store de Zustand
	const { movies, loading, error, searchMovies } = useMovieStore()

	// Cargar películas populares al iniciar la pantalla
	useEffect(() => {
		searchMovies('Star') // Busca películas con "Star" en el título al cargar la pantalla
	}, [])

	// Si la búsqueda está cargando, mostrar un spinner de carga
	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />
	}

	// Si hay un error, mostrar el mensaje de error
	if (error) {
		return (
			<Text>
				{error}
			</Text>
		)
	}

	return (
		<View style={{ flex: 1, padding: 16 }}>
			{/* Lista de películas */}
			<FlatList
				data={movies} // Datos de las películas obtenidos del store
				keyExtractor={item => item.imdbID} // Clave única para cada película
				renderItem={({ item }) => <MovieCard movie={item} />} // Renderiza cada película con MovieCard
			/>
		</View>
	)
}
