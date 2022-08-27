import {configureStore} from '@reduxjs/toolkit'
import {moviesReducer} from "./reducers/moviesReducer";

const store = configureStore({
    reducer: {
        moviesList: moviesReducer,
    }
})

export default store