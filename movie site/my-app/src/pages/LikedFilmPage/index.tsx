import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../../components/FilmPageInfo";
import Post from "../../components/Post";
import PageHeader from "../../components/PageHeader";
import Navigation from "../../components/RouterNavigation";
// import {PATHS} from '../../components/RouterNavigation'

const LikedFilmPage = () => {
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)

    // const even = () => {
    //     filteredList.map(movie => movie.isLiked === true)
    //     // element === true;
    // }

    console.log('filteredList liked film', filteredList)
    return (
        <div>
            <Navigation />


            {
                filteredList.map(movie => {

                        // if (movie.isLiked === true) {
                        if (movie.isLiked === true) {

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

export default LikedFilmPage;