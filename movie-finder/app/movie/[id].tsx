import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { useMovieStore, Movie } from '../../src/store/useMoveStore';

export default function MovieDetailsScreen() {
  const { id } = useLocalSearchParams();
  const movieId = Array.isArray(id) ? id[0] : id;
  const { fetchMovieDetails } = useMovieStore();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
      setLoading(false);
    };

    loadMovieDetails();
  }, [movieId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!movie) {
    return <Text>No se encontró la película</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.year}>{movie.Year}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
      <Text style={styles.genre}>{movie.Genre}</Text>
      <Text style={styles.director}>{movie.Director}</Text>
      <Link href="/" asChild>
        <Text style={styles.backButton}>Volver al listado</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  year: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  plot: {
    fontSize: 16,
    marginBottom: 8,
  },
  genre: {
    fontSize: 16,
    marginBottom: 8,
  },
  director: {
    fontSize: 16,
  },
  backButton: {
    fontSize: 16,
    color: '#0000ff',
    marginTop: 16,
  },
});