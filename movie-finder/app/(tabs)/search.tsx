import React, { useState } from 'react'
import {
	View,
	TextInput,
	Button,
	FlatList,
	ActivityIndicator,
	Text
} from 'react-native'
import { useMovieStore } from '../../src/store/useMoveStore'
import MovieCard from '../../src/components/MovieCard'

export default function SearchScreen() {
	// Estado local para guardar la consulta de búsqueda
	const [query, setQuery] = useState('')

	// Estado global con Zustand para manejar las películas
	const { movies, loading, error, searchMovies } = useMovieStore()

	// Función que se ejecuta al presionar el botón de búsqueda
	const handleSearch = () => {
		if (query.trim()) {
			// Verifica que el usuario haya escrito algo
			searchMovies(query) // Llama a la función para buscar películas
		}
	}

	return (
		<View style={{ flex: 1, padding: 16 }}>
			{/* Campo de entrada de texto */}
			<TextInput
				style={{
					height: 40,
					borderColor: '#ccc',
					borderWidth: 1,
					borderRadius: 8,
					paddingHorizontal: 8,
					marginBottom: 16
				}}
				placeholder="Buscar película..." // Texto de sugerencia
				value={query} // Valor actual del input
				onChangeText={setQuery} // Actualiza el estado cuando el usuario escribe
			/>

			{/* Botón de búsqueda */}
			<Button title="Buscar" onPress={handleSearch} />

			{/* Muestra el spinner mientras se cargan las películas */}
			{loading && <ActivityIndicator size="large" color="#0000ff" />}

			{/* Muestra un mensaje de error si la búsqueda falla */}
			{error &&
				<Text>
					{error}
				</Text>}

			{/* Muestra un mensaje si no hay resultados y no está cargando */}
			{movies.length === 0 &&
				!loading &&
				<Text>No se encontraron resultados</Text>}

			{/* Lista de películas encontradas */}
			<FlatList
				data={movies} // Datos de películas desde el store
				keyExtractor={item => item.imdbID} // Clave única de cada película
				renderItem={({ item }) => <MovieCard movie={item} />} // Renderiza cada película con MovieCard
			/>
		</View>
	)
}
