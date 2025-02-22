import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator, Text } from 'react-native';
import { useMovieStore } from '../../src/store/useMoveStore';
import MovieCard from '../../src/components/MovieCard';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const { movies, loading, error, searchMovies } = useMovieStore();

  const handleSearch = () => {
    if (query.trim()) {
      searchMovies(query);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginBottom: 16,
        }}
        placeholder="Buscar película..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}

      {movies.length === 0 && !loading && <Text>No se encontraron resultados</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}