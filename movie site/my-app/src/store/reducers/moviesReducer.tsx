import {createSlice, current} from '@reduxjs/toolkit';
import {defaultData} from "../defaultData";


export interface IMovie {
    id: any;
    image: string;
    name: string;
    year: number;
    genre: string;
    description: string;
    video: any;
    director: string;
}

// initialState: {
//     defaultData,
//         filteredMovies: defaultData
// },

// initialState: defaultData as IMovie[],

const moviesSlice = createSlice({
    initialState: {
        // defaultData,
        defaultData: defaultData,
        filteredMovies: defaultData,
        isAdmin: false,
        isAuthorized: false,
    },
    name: 'moviesList',
    reducers: {
        selectedFilms(state, action) {
            console.log('action: ', action)
            return {
                ...state,
                filteredMovies: getFilteredList(action.payload, state.defaultData)
            }
            // return state.filteredMovies = getFilteredList(action.payload, state.defaultData)

        },
        userLogIn(state, action) {
            return {
                ...state,
                isAuthorized: true
            }
        },
        adminLogIn(state, action) {
            return {
                ...state,
                isAdmin: true,

            }
        },
        logOut(state, action) {
            return {
                ...state,
                isAdmin: false,
                isAuthorized: false
            }
        },
        removeMovie(state, action) {
            console.log('state.filteredMovies',current( state.filteredMovies))
            // state.filteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload)
            const clonedDefaultData = state.defaultData.filter(movie => movie.id !== action.payload)
            const clonedFilteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload)

            return {
                ...state,
                defaultData: clonedDefaultData,
                filteredMovies: clonedFilteredMovies,
            }
        },
        editMovie(state, action):any {
            // @ts-ignore
            // let currentFilmInDefaultData = state.defaultData.find((movie) => movie.id === action.payload)
            // let currentFilmInFilteredData = state.filteredMovies.find((movie) => movie.id === action.payload)
            // currentFilm[0] = state.filteredMovies
            // currentFilm[0] = state.defaultData

            console.log("currentFilm action.payload ",action.payload)

            const clonedStateDefaultData = state.defaultData.map(movie => {
                if (movie.id === action.payload.id) {
                    movie = action.payload
                    return movie
                }
                return movie
            })

            const clonedStateFilteredMovies = state.filteredMovies.map(movie => {


                if (movie.id === action.payload.id) {

                    movie = action.payload
                    return movie
                }

                return movie
            })

            console.log('clonedStateDefaultData' ,clonedStateDefaultData)

            return {
                ...state,
                defaultData: clonedStateDefaultData,
                filteredMovies:clonedStateFilteredMovies
                // defaultData: { ...action.payload },
                // filteredMovies: { ...action.payload }
            }


        },
    }
})


export function getFilteredList(selectedCategory, movieList) {

    if (!selectedCategory) {
        return movieList;
    }
    return movieList.filter((item) => item.genre === selectedCategory);
}

// export function goOnMainPage() {
//     history.("https://www.google.com/")
//   }


export const getMovies = (state: { moviesList: IMovie[] }) => state.moviesList;
export const moviesReducer = moviesSlice.reducer;
export const {selectedFilms, userLogIn, adminLogIn, logOut, removeMovie, editMovie} = moviesSlice.actions

