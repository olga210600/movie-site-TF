import React from 'react';
import {createBrowserHistory} from 'history'
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../FilmPageInfo";
import Navigation from "../PageHeader";

const FilmPage = (props) => {
    console.log(props)
    const history = createBrowserHistory()

    //визвать селектор , пройтись по мену и найти нужный обьектпо ключу let name
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)

    const params = new URLSearchParams(history.location.search);
    const name = params.get("filmId");
    console.log('name: ', name)

    console.log('history', history)
    return (
        <div>
            {
                movies.map(movie => {

                        if (movie.name === name) {

                            return (
                                <div>

                                    <FilmPageInfo movie={movie}/>

                                </div>


                            )
                        }

                    }
                )

            }
        </div>
    );
};

export default FilmPage;
