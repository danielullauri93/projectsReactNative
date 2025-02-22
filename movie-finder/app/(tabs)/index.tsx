import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useMovieStore } from '../../src/store/useMoveStore';
import MovieCard from '../../src/components/MovieCard';

export default function HomeScreen() {
  const { movies, loading, error, searchMovies } = useMovieStore();

  // Cargar películas populares al iniciar la pantalla
  useEffect(() => {
    searchMovies('Star'); // Término genérico para películas populares
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}