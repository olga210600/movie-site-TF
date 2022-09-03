import {createSlice, current} from '@reduxjs/toolkit';
import {defaultData} from "../defaultData";
import cloneDeep from "lodash/cloneDeep";


export interface IMovie {
    id: any;
    image: string;
    name: string;
    year: number;
    genre: string;
    description: string;
    video: any;
    director: string;
    ////////
    isLiked: boolean,
    isWatchLate: boolean,
}

// initialState: {
//     defaultData,
//         filteredMovies: defaultData
// },

// initialState: defaultData as IMovie[],

// @ts-ignore
const moviesSlice = createSlice({
    initialState: {
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
                isAuthorized: false,
                userLikedFilm: null,
            }
        },
        removeMovie(state, action) {
            console.log('state.filteredMovies', current(state.filteredMovies))
            // state.filteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload)
            const clonedDefaultData = state.defaultData.filter(movie => movie.id !== action.payload)
            const clonedFilteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload)

            return {
                ...state,
                defaultData: clonedDefaultData,
                filteredMovies: clonedFilteredMovies,
            }
        },
        editMovie(state, action): any {
            // @ts-ignore

            console.log("currentFilm action.payload ", action.payload)

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
            return {
                ...state,
                defaultData: clonedStateDefaultData,
                filteredMovies: clonedStateFilteredMovies
            }
        },
        likedFilm(state, action):any {
            console.log('action: ', action)
            const copiedDefaultData = cloneDeep(state.defaultData)
            const copiedFilteredMovies = cloneDeep(state.filteredMovies)
            //     const a = JSON.stringify(defaultData)
            // const b = JSON.parse(a)
            const likedDefaultData = copiedDefaultData.map((movie) => {
                if (movie.id === action.payload) {

                    movie.isLiked = !movie.isLiked

                    return movie
                }

                return movie
            })


            const likedFilteredMovies = copiedFilteredMovies.map((movie) => {
                if (movie.id === action.payload) {
                    movie.isLiked = !movie.isLiked
                    return movie
                }
                return movie
            })

            return {
                ...state,
                defaultData: likedDefaultData,
                filteredMovies: likedFilteredMovies,
            }
        },
        watchLateFilm(state, action):any {
            // console.log('action: ', action)
            const copiedDefaultData = cloneDeep(state.defaultData)
            const copiedFilteredMovies = cloneDeep(state.filteredMovies)

            const watchLateDefaultData = copiedDefaultData.map((movie) => {
                if (movie.id === action.payload) {

                    movie.isWatchLate = !movie.isWatchLate

                    return movie
                }

                return movie
            })


            const watchLateFilteredMovies = copiedFilteredMovies.map((movie) => {
                if (movie.id === action.payload) {
                    movie.isWatchLate = !movie.isWatchLate
                    return movie
                }
                return movie

            })


            return {
                ...state,
                defaultData: watchLateDefaultData,
                filteredMovies: watchLateFilteredMovies,
            }
        }


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
export const {selectedFilms, userLogIn, adminLogIn, logOut, removeMovie, editMovie, likedFilm, watchLateFilm} = moviesSlice.actions

