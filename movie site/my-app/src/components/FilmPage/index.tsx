import React from 'react';
import {createBrowserHistory} from 'history'
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../FilmPageInfo";

const FilmPage = (props) => {
    const history = createBrowserHistory()
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const params = new URLSearchParams(history.location.search);
    const filmName = params.get("filmId");

    console.log('name: ', filmName)
    console.log('history', history)

    return (
        <div>
            {
                movies.map(movie => {

                        if (movie.id === filmName) {

                            return (
                                <FilmPageInfo movie={movie}/>
                            )
                        }

                    }
                )

            }
        </div>
    );
};

export default FilmPage;
