import React, {useMemo} from "react";
import {createBrowserHistory} from "history";
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from '../../store/reducers/moviesReducer'
// @ts-ignore
import add from '../../img/add-tool-svgrepo-com.svg'
import {Link as RouterLink} from "react-router-dom";

// @ts-ignore
import HeaderImgPost from "../../img/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg"
import {
    Wrapper,
    Link,
    HeaderWrapper,
    HeaderImg,
    LogoNameWrapper,
    AddBtn,
    LinkWrapper,
    SelectWrapper,
    ImgWrapper,
    LikedFilmsWrapper,
    LogInOutWrapper,
    RegistrationWrapper,
    UserFilmWrapper,
    WatchLateFilmsWrapper,
    LogoName
} from './style'

export const PATHS = {
    MAIN: "/",
    REGISTRATION_FORM: "/registration-form",
    LIKED_MOVIE_PAGE: '/liked-movies',
    WATCH_LATE_MOVIE_PAGE: '/watch-late-movies'
};

const Navigation = ({setAddModalActive, handleCategoryChange}: any) => {
    const history = createBrowserHistory();
    const currentPage = history.location.pathname;
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const isUser: boolean = useSelector((state: any) => state.moviesList.isAuthorized)
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin)

    console.log('movies: ', movies)

    const likedMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isLiked) {
            acc.push(movie)
        }

        return acc
    }, [])

    const watchedLateMovies = movies.reduce((acc: IMovie[], movie: IMovie): IMovie[] => {
        if (movie.isWatchLate) {
            acc.push(movie)
        }

        return acc
    }, [])

    console.log('likedMovies: ', likedMovies)
    const dispatch = useDispatch()

    return (
        <Wrapper>

            <ImgWrapper>
                <HeaderImg src={HeaderImgPost}/>
            </ImgWrapper>

            <HeaderWrapper>
                <LogoNameWrapper>
                    <LogoName>GalacticFilms</LogoName>
                </LogoNameWrapper>
                <nav>
                    <LinkWrapper>
                        <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                            Main page
                        </Link>

                        <SelectWrapper>
                            <select
                                name="category-list"
                                id="category-list"
                                onChange={handleCategoryChange}
                            >
                                <option value="">All genres of films</option>
                                <option value="action movie">Action movie</option>
                                <option value="comedy">Comedy</option>
                                <option value="adventure movie">Adventure movie</option>
                                <option value="drama">Drama</option>
                                <option value="fantasy movie">Fantasy movie</option>
                                <option value="historical movie">Historical movie</option>
                                <option value="horror movie">Horror movie</option>
                                <option value="cartoons">Cartoons</option>
                            </select>

                        </SelectWrapper>
                    </LinkWrapper>

                    <div>
                        {
                            isUser &&
                            <UserFilmWrapper>
                                {!!likedMovies.length && (
                                    <LikedFilmsWrapper>
                                        <Link isActive={currentPage === PATHS.LIKED_MOVIE_PAGE}
                                              to={PATHS.LIKED_MOVIE_PAGE}>
                                            Liked Film
                                        </Link>
                                    </LikedFilmsWrapper>
                                )}

                                {!!watchedLateMovies.length && (
                                    <WatchLateFilmsWrapper>
                                        <Link isActive={currentPage === PATHS.WATCH_LATE_MOVIE_PAGE}
                                              to={PATHS.WATCH_LATE_MOVIE_PAGE}>
                                            Watch Late Film
                                        </Link>
                                    </WatchLateFilmsWrapper>
                                )}
                            </UserFilmWrapper>
                        }
                    </div>


                    <RegistrationWrapper>
                        {isAdmin &&
                        <AddBtn isActive={currentPage === '/movie-details'} onClick={() => setAddModalActive(true)}>
                            Add Film</AddBtn>
                        }

                        {!isAdmin && !isUser ?
                            <LogInOutWrapper>
                                <Link
                                    isActive={currentPage === PATHS.REGISTRATION_FORM}
                                    to={PATHS.REGISTRATION_FORM}
                                >
                                    Log in
                                </Link>
                            </LogInOutWrapper>
                            :
                            <LogInOutWrapper>
                                <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}
                                      onClick={() => dispatch(logOut())}>
                                    Log out
                                </Link>
                            </LogInOutWrapper>
                        }
                    </RegistrationWrapper>
                </nav>

            </HeaderWrapper>

        </Wrapper>
    );
};

export default Navigation;
