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
        filteredMovies: defaultData
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

        }
    }
})


export function getFilteredList(selectedCategory, movieList) {

    if (!selectedCategory) {
        return movieList;
    }
    return movieList.filter((item) => item.genre === selectedCategory);
}


// const [movieList, setMovieList] = useState([]);
// const [selectedCategory, setSelectedCategory] = useState();
//
// useEffect(() => {
//     setMovieList(movies);
// }, []);
//
// function getFilteredList() {
//
//     if (!selectedCategory) {
//         return movieList;
//     }
//     return movieList.filter((item) => item.genre === selectedCategory);
// }
//
// let filteredList = useMemo(getFilteredList, [selectedCategory, movieList]);
//
// function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
// }


export const getMovies = (state: { moviesList: IMovie[] }) => state.moviesList;
export const moviesReducer = moviesSlice.reducer;
export const {selectedFilms} = moviesSlice.actions

