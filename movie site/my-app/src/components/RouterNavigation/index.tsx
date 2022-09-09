import React, {useMemo} from "react";
import {createBrowserHistory} from "history";
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from '../../store/reducers/moviesReducer'
import './style.css'
// @ts-ignore

import add from '../../img/add-tool-svgrepo-com.svg'
// @ts-ignore
import HeaderImgPost from "../../img/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg"


export const Wrapper = styled.div`
  display: flex;
min-width: 1200px;
  position: relative;
  //margin:auto ;
  //width: 100%;
  ////height: 50px;
  //height: 380px;
  ////background: rebeccapurple;
  ////justify-content: space-between;


  & nav {
    display: flex;
    margin: 0;
    justify-content: right;
    width: 70%;
    //max-width: 600px;

    //min-width: 500px;
    height: 50px;
    align-items: center;
    //position: absolute;
    ////top: 10px;
    //background: darkgrey;

    //justify-content: space-around;
  }
`


const LogoNameWrapper = styled.div`
  width: 30%;
  min-width: 330px;
  //background: grey;
  //margin-left: 5px;

`

const LogoName = styled.h1`
  font-family: 'Teko', Arial, sans-serif;
  font-size: 50px;
  width: 327px;
`

export const LinkWrapper = styled.div`

  display: flex;
  align-items: center;
`

export const SelectWrapper = styled.div`
  display: flex;
  margin-right: 25px;


  && select {
    margin-left: 7px;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    text-align: center;
    background: none;
    color: white;
    font-size: 14px;
  }

  && option {
    color: white;
    background: #1b1b2b;
  }
`

export const RegistrationWrapper = styled.div`
  display: flex;
  align-items: center;
  //padding-top: 13px;
`


const LogInOutWrapper = styled.div`
  width: 80px;

`

export const Link = styled(RouterLink)`
  text-decoration: none;

  && {
    text-decoration: ${({isActive}) => (isActive ? "underline red" : "none")};
    color: ${({isActive}) => (isActive ? "white" : "white")};
    margin-right: 15px;

    ///////
    padding: 5px;

    :hover {
      //color: #564949;
      //font-weight: bold;
      background: grey;
      //height: 30px;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;


const AddBtn = styled.button`
  font-size: 16px;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border: none;
  background: #69696d;
  color: white;
  border-radius: 5px;


  && {
      //background: ${({isActive}) => (isActive ? "darkgrey" : "white")};
      //color: ${({isActive}) => (isActive ? "grey" : "black")};
    //border-radius: 5px;
      //cursor: ${({isActive}) => (isActive ? "none" : "pointer")};

  }

  :hover {
    color: grey;
  }
`

const UserFilmWrapper = styled.div`
  color: white;
  display: flex;

  //width: 300px;
  //background: blue;

`

const WatchLateFilmsWrapper = styled.div`
  width: 140px;
  box-sizing: border-box;
`

const LikedFilmsWrapper = styled.div`
  width: 98px;
  box-sizing: border-box;
`

const ImgWrapper = styled.div`
  width: 100%;
  //height: 380px;
  height: 400px;
  position: relative;
  color: white;
  //background: blue;
  //margin: 0;
  //padding: 0;
  //background: rebeccapurple;
  //margin: auto;
  //background: orange;
  //padding: 0 20px;
`

// top
const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  //margin: auto;
  //z-index:;
`

const HeaderWrapper = styled.div`
position: absolute;
  top: 25px;
  display: flex;
  //align-items: center;
  //justify-content: center;
  color: white;
  //margin: auto;
  width: 92%;
  //background: rebeccapurple;
  justify-content: center;
  align-items: center;
  //margin-left:0;
  margin-left: 4%;
  margin-right: 4%;
  left: -1px;

  //@media (max-width: 1213px)  { 
  //  width:800px ;
  //  
  //  background: rebeccapurple;
  //  justify-content: center;
  //  //color: rebeccapurple;
  //  display: block;
  //  margin: auto;
  //}

`


export const PATHS = {
    MAIN: "/",
    REGISTRATION_FORM: "/registration-form",
    LIKED_MOVIE_PAGE: '/liked-movies',
    WATCH_LATE_MOVIE_PAGE: '/watch-late-movies'
};

const Navigation = ({setAddModalActive, handleCategoryChange}: any) => {
    const history = createBrowserHistory();
    console.log('history', history)

    const currentPage = history.location.pathname;
    console.log('currentPage', typeof (currentPage))

    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const isUser: boolean = useSelector((state: any) => state.moviesList.isAuthorized)
    const isAdmin: boolean = useSelector((state: any) => state.moviesList.isAdmin)


    console.log('movies: ', movies)

    // const likedMovies = movies.map((movie) => {
    //     if (movie.isLiked) {
    //         return movie
    //     }
    // })

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
                            </select>

                        </SelectWrapper>
                    </LinkWrapper>

                    <div>

                        {
                            isUser &&
                            <UserFilmWrapper>
                                {!!likedMovies.length && (
                                    <LikedFilmsWrapper>
                                        <Link isActive={currentPage === PATHS.LIKED_MOVIE_PAGE} to={PATHS.LIKED_MOVIE_PAGE}>
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
