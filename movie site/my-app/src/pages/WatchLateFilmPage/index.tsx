import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../../components/FilmPageInfo";
import Post from "../../components/Post";
import PageHeader from "../../components/PageHeader";
import Navigation from "../../components/RouterNavigation";
// import {PATHS} from '../../components/RouterNavigation'

const WatchLateFilmPage = () => {
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)

    return (
        <div>
            <Navigation />

            {
                filteredList.map(movie => {

                        if (movie.isWatchLate === true) {

                            return (


                                <Post filmId={movie.name} movie={movie}/>


                            )
                        } else {
                            // return(
                            //         // <h1>No one film</h1>
                            //     )

                        }

                    }
                )

            }
        </div>


    );
};

export default WatchLateFilmPage;