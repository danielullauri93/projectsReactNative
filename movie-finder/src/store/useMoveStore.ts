import { create } from 'zustand'
import axios from 'axios'
import { API_KEY, API_URL } from '../constants/api'

// Exporta la interfaz Movie
export interface Movie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
	Plot: string
	Genre: string
	Director: string
	Rated?: string
	Released?: string
	Runtime?: string
	Writer?: string
	Actors?: string
	Language?: string
	Country?: string
	Awards?: string
	Ratings?: { Source: string; Value: string }[]
	Metascore?: string
	imdbRating?: string
	imdbVotes?: string
	Type?: string
	DVD?: string
	BoxOffice?: string
	Production?: string
	Website?: string
	Response?: string
}

interface MovieState {
	movies: Movie[]
	loading: boolean
	error: string | null
	searchMovies: (query: string) => Promise<void>
	fetchMovieDetails: (id: string) => Promise<Movie | null>
}

export const useMovieStore = create<MovieState>(set => ({
	movies: [],
	loading: false,
	error: null,
	searchMovies: async query => {
		set({ loading: true, error: null })
		try {
			const response = await axios.get(
				`${API_URL}?apikey=${API_KEY}&s=${query}`
			)
			set({ movies: response.data.Search || [], loading: false })
		} catch (error) {
			set({ error: 'Error al buscar películas', loading: false })
		}
	},
	fetchMovieDetails: async id => {
		try {
			const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`)
			return response.data
		} catch (error) {
			return null
		}
	}
}))
