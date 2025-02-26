import { create } from 'zustand' // Importa la librería Zustand para manejar el estado global
import axios from 'axios' // Importa Axios para hacer peticiones HTTP
import { API_KEY, API_URL } from '../constants/api' // Importa la URL y la clave de la API desde un archivo de constantes

// Define la interfaz Movie, que representa la estructura de una película obtenida de la API
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

// Define la interfaz MovieState, que representa el estado global de la aplicación relacionado con las películas
interface MovieState {
	movies: Movie[] // Lista de películas obtenidas de la API
	loading: boolean // Indica si hay una búsqueda en proceso
	error: string | null // Guarda un mensaje de error si la búsqueda falla
	searchMovies: (query: string) => Promise<void> // Función para buscar películas por nombre
	fetchMovieDetails: (id: string) => Promise<Movie | null> // Función para obtener los detalles de una película por ID
}

// Crea el estado global usando Zustand
export const useMovieStore = create<MovieState>(set => ({
	movies: [], // Inicialmente, la lista de películas está vacía
	loading: false, // No hay búsqueda en proceso al inicio
	error: null, // No hay errores al inicio

	// Función para buscar películas por nombre
	searchMovies: async query => {
		set({ loading: true, error: null }) // Establece el estado de carga en true antes de hacer la petición
		try {
			// Realiza la petición a la API de películas usando Axios
			const response = await axios.get(
				`${API_URL}?apikey=${API_KEY}&s=${query}`
			)
			// Guarda los resultados de la búsqueda en el estado global
			set({ movies: response.data.Search || [], loading: false })
		} catch (error) {
			// Si hay un error, lo guarda en el estado y desactiva la carga
			set({ error: 'Error al buscar películas', loading: false })
		}
	},

	// Función para obtener detalles de una película específica por su ID
	fetchMovieDetails: async id => {
		try {
			// Realiza la petición a la API para obtener los detalles de una película
			const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`)
			return response.data // Retorna los datos de la película
		} catch (error) {
			return null // Si hay un error, retorna null
		}
	}
}))
