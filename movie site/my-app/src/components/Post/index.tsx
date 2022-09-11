import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, likedFilm, watchLateFilm} from '../../store/reducers/moviesReducer'
// // @ts-ignore
// // @ts-ignore
// import {LinkWrapper, PATHS} from "../RouterNavigation";
// import { PATHS} from "../RouterNavigation";
import {
    PostWrapper,
    CloseBtn,
    ButtonsWrapper,
    MovieName,
    Link,
    LikedBtnWrapper,
    MovieImg,
    MovieImgWrapper,
    WatchLateBtnWrapper
} from './style'


const Post = ({movie, filmId}: any) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const dispatch = useDispatch()


    return (
        <div>


            <PostWrapper>

                {isAdmin &&
                <CloseBtn onClick={() => dispatch(removeMovie(movie.id))}>&#10006;</CloseBtn>
                }

                <Link to={{pathname: `/movie-details?filmId=${filmId}`}}>

                    <MovieImgWrapper>
                        <MovieImg className='movie-img' src={movie.image}/>
                    </MovieImgWrapper>


                    <MovieName>{movie.name}</MovieName>
                </Link>

                {isAuthorized &&
                <ButtonsWrapper>
                    <LikedBtnWrapper
                        onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'Like'}
                    </LikedBtnWrapper>

                    <WatchLateBtnWrapper
                        onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}
                    </WatchLateBtnWrapper>
                </ButtonsWrapper>

                }
            </PostWrapper>


        </div>

    );
};

export default Post;