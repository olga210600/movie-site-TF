import React, {useState} from 'react';
import styled from 'styled-components'
import Navigation, { PATHS} from "../RouterNavigation";
import {Link as RouterLink} from "react-router-dom";

import ModalWindow from "../ModalWindow";
import {IMovie, editMovie, addNewMovie, likedFilm, watchLateFilm, removeMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
// import {editMovie} from '../../store/reducers/moviesReducer'
import {createBrowserHistory} from "history";


const PageWrapper = styled.div`
  width: 63%;
  min-width: 750px;
  height: 100%;
  background: #2b2a2a;
  margin: 70px 0 70px 0;
  font-family: sans-serif;
  padding-bottom: 20px;
  justify-content: center;
  //background: orange;

  

`

const FilmInfoWrapper = styled.div`
  display: flex;
  //margin: auto;
`

const FilmInfo = styled.div`
  width: 570px;
  //background: darkgrey;
  height: 100%;
  color: white;
`

const ImageWrapper = styled.div`
  width: 450px;
  height: 400px;
  margin: 40px;
  object-fit: cover;
  


`
const Image = styled.img`
  width: 100%;
  height: 100%;
  
  


`

const MovieName = styled.p`
  font-size: 30px;
  margin: 30px 0 10px 10px;
`

const MovieYear = styled.p`
  font-size: 18px;
  margin: 10px;
`

const MovieGenre = styled.p`
  font-size: 20px;
  margin: 10px;

`

const MovieDirected = styled.p`
  font-size: 20px;
  margin: 10px;

`
const MovieDescription = styled.p`
  font-size: 17px;
  //margin: 10px;
  color: white;
  width: 600px;
  margin: auto;
  text-align: justify;
  text-indent: 20px;
  font-family: sans-serif;

`
const MovieVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px 0;

`


const NavigationWrapper = styled.div`
  //width: 100%;
  height: 50px;
  background: white;
  display: flex;
  color: black;
  //justify-content: space-around;

  & div {
    display: contents;
  }
`
export const Link = styled(RouterLink)`
 color: white;
  font-size: 20px;
  
`



const FilmPageInfo = ({movie}) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const movies: IMovie[] = useSelector((state: any) => state.moviesList)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isActiveModalWindow: IMovie[] = useSelector((state: any) => state.isActiveModalWindow)
    console.log('isActive',isActiveModalWindow)
    const dispatch = useDispatch()
    const history = createBrowserHistory();
    console.log('history', history)

    const currentPage = history.location.pathname;

    // закоментиррвала
    const [editModalActive, setEditModalActive] = useState(false)

    // const currentFunction = (values) => {
    //    editMovie(values)
    // }

    const currentFunction = (values) => {
        //разкоментировать!!!!!!!*/}
       // dispatch(editMovie(value))*/}
      dispatch(editMovie(values))
   }
    {/*закоментировада*/}

    return (


        <PageWrapper>
            <NavigationWrapper>
                <Navigation/>

                {/*закоментировада*/}

                    <div>
                        {isAdmin && <button  onClick={() => setEditModalActive(true) }>Edit Film</button>}

                    </div>




            </NavigationWrapper>

            <FilmInfoWrapper>

                {/*{*/}
                {/*    editModalActive &&*/}
                {/*    // <ModalWindow currentButton='Edit'   date={movie} active={editModalActive} />*/}
                {/*    <EditWindow  currentButton='Edit'   date={movie} handleClose={() => setEditModalActive(false)}*/}

                {/*    />*/}


                {/*}*/}


                {isAdmin &&

                <Link to={PATHS.MAIN}
                      onClick={() => dispatch(removeMovie(movie.id))}
                >
                    X
                </Link>

                }
                <ImageWrapper>
                    <Image src={movie.image}/>
                    {isAuthorized &&
                    <div>
                        <button onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'like'}</button>

                        <button onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}</button>

                    </div>

                    }
                </ImageWrapper>




                <FilmInfo>
                    <MovieName>{movie.name}</MovieName>
                    <MovieYear>Year of release: {movie.year}</MovieYear>
                    <MovieGenre>Genre: {movie.genre}</MovieGenre>
                    <MovieDirected>Directed by: {movie.director}</MovieDirected>
                </FilmInfo>
            </FilmInfoWrapper>
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


         {/*/!*ТУТ*!//////////////////////////////////////////////////////////////*/}
            {
                editModalActive &&
                <ModalWindow
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