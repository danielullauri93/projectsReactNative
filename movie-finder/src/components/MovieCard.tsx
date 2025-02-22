import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

interface MovieCardProps {
	movie: {
		imdbID: string
		Title: string
		Year: string
		Poster: string
	}
}

export default function MovieCard({ movie }: MovieCardProps) {
	return (
		<Link href={`/movie/${movie.imdbID}`} asChild>
			<TouchableOpacity style={styles.container}>
				<Image source={{ uri: movie.Poster }} style={styles.poster} />
				<View style={styles.info}>
					<Text style={styles.title}>
						{movie.Title}
					</Text>
					<Text style={styles.year}>
						{movie.Year}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 16,
		backgroundColor: '#fff',
		borderRadius: 8,
		overflow: 'hidden',
		elevation: 3
	},
	poster: {
		width: 100,
		height: 150
	},
	info: {
		flex: 1,
		padding: 12,
		justifyContent: 'center'
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	year: {
		fontSize: 14,
		color: '#666'
	}
})
