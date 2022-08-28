import {createSlice} from '@reduxjs/toolkit';
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
        defaultData,
        filteredMovies: defaultData,
        isAdmin: false,
        isUser: false,
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
            // console.log('action: ', action)
            return{
                ...state,
                isUser: true
            }
        },
        adminLogIn(state, action) {
            // console.log('action: ', action)
            return{
                ...state,
                isAdmin: true,

            }
        },
        logOut(state, action) {
            // console.log('action: ', action)
            return{
                ...state,
                isAdmin: false,
                isUser: false
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
export const {selectedFilms, userLogIn, adminLogIn, logOut} = moviesSlice.actions

