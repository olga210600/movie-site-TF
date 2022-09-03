import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../../components/FilmPageInfo";
// import {PATHS} from '../../components/RouterNavigation'

const LikedFilmPage = () => {
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)

    console.log( 'filteredList liked film',filteredList)
    return (
        <div>
            {
                filteredList.map(movie => {

                        if (movie.isLiked === true) {

                            return (



                                <div >
                                    {movie.name}
                                </div>




                            )
                        }

                    }
                )

            }
        </div>



    );
};

export default LikedFilmPage;