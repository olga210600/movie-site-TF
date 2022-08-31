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
            console.log('state.delate',state.filteredMovies)

            return {
                ...state,
                defaultData: clonedDefaultData,
                filteredMovies: clonedFilteredMovies,
            }
        }
        // removeMovie(state, action) {
        //     return [
        //         ...state.filter(movie => movie.id !== action.payload)
        //     ]
        // },
        // editMovie(state, action) {
        //     return [
        //         // ...state.map(todo => {
        //         //     if (todo.id === action.payload.id) {
        //         //         return action.payload;
        //         //     }
        //         //
        //         //     return todo;
        //         // })
        //     ]
        // },
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
export const {selectedFilms, userLogIn, adminLogIn, logOut, removeMovie} = moviesSlice.actions

