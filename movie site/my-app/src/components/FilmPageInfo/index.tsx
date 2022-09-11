import React, {useState} from 'react';
import styled from 'styled-components'
import Navigation, {PATHS} from "../RouterNavigation";
import {Link as RouterLink} from "react-router-dom";
import ModalWindow from "../ModalWindow";
import {
    IMovie,
    editMovie,
    likedFilm,
    watchLateFilm,
    removeMovie
} from "../../store/reducers/moviesReducer";

import {PageWrapper,
    Link,
    EditBtnWrapper,
    MovieDescription,
    MovieDirected,
    MovieGenre,
    MovieYear,
    MovieName,
    ImageWrapper,
    FilmInfoWrapper,
    FilmInfo,
    BtnWrapper,
    ButtonsWrapper,
    DeleteBtnWrapper,
    HeaderFilmInfo,
    Image,
    LikeBtn,
    MovieVideo,
    UserBtnWrapper,
    WatchLateBtn

} from './style'
import {useDispatch, useSelector} from "react-redux";
// @ts-ignore
import deleteImg from '../../img/delete-svgrepo-com.svg'
// @ts-ignore
import editImg from '../../img/edit-svgrepo-com.svg'
// @ts-ignore
import HeaderImgPost from "../../img/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg";
import {mockedOptions} from "../../router";

const FilmPageInfo = ({movie}) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const movies: IMovie[] = useSelector((state: any) => state.moviesList)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isActiveModalWindow: IMovie[] = useSelector((state: any) => state.isActiveModalWindow)
    const dispatch = useDispatch()

    // const history = createBrowserHistory();
    // const currentPage = history.location.pathname;

    const [editModalActive, setEditModalActive] = useState(false)

    const currentFunction = (values) => {
        dispatch(editMovie(values))
    }

    return (
        <PageWrapper>
            <Navigation/>

            <HeaderFilmInfo>
                <FilmInfoWrapper>
                    <ImageWrapper>
                        <Image src={movie.image}/>
                    </ImageWrapper>

                    <FilmInfo>
                        <MovieName>{movie.name}</MovieName>
                        <MovieYear>Year of release: {movie.year}</MovieYear>
                        <MovieGenre>Genre: {movie.genre}</MovieGenre>
                        <MovieDirected>Directed by: {movie.director}</MovieDirected>

                        {isAuthorized &&
                        <UserBtnWrapper>

                            <LikeBtn
                                onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'Like'}
                            </LikeBtn>

                            <WatchLateBtn
                                onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}
                            </WatchLateBtn>
                        </UserBtnWrapper>
                        }

                        {isAdmin &&
                        <ButtonsWrapper>
                            <EditBtnWrapper>
                                <BtnWrapper>
                                    <img
                                        src={editImg}
                                        alt='editBtn'
                                        onClick={() => setEditModalActive(true)}
                                    />
                                </BtnWrapper>

                            </EditBtnWrapper>

                            <DeleteBtnWrapper>
                                <Link to={PATHS.MAIN} onClick={() => dispatch(removeMovie(movie.id))}>
                                    <img title='delete film' src={deleteImg}/>
                                </Link>
                            </DeleteBtnWrapper>

                        </ButtonsWrapper>
                        }

                    </FilmInfo>
                </FilmInfoWrapper>
            </HeaderFilmInfo>

            <MovieDescription>{movie.description}</MovieDescription>

            <MovieVideo>
                <iframe
                    width="490"
                    height="320"
                    src={movie.video}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>

            </MovieVideo>

            {
                editModalActive &&
                <ModalWindow
                    options={mockedOptions}
                    currentButton='Edit'
                    currentFunction={currentFunction}
                    date={movie}
                    handleClose={() => setEditModalActive(false)}
                />
            }

        </PageWrapper>
    );
};

export default FilmPageInfo;