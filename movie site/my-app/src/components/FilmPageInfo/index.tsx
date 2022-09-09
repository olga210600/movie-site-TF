import React, {useState} from 'react';
import styled from 'styled-components'
import Navigation, {PATHS} from "../RouterNavigation";
import {Link as RouterLink} from "react-router-dom";
import ModalWindow from "../ModalWindow";
import {
    IMovie,
    editMovie,
    addNewMovie,
    likedFilm,
    watchLateFilm,
    removeMovie
} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {createBrowserHistory} from "history";
// @ts-ignore
import deleteImg from '../../img/delete-svgrepo-com.svg'
// @ts-ignore
import editImg from '../../img/edit-svgrepo-com.svg'
// @ts-ignore
import HeaderImgPost from "../../img/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg";
import PageHeader from "../PageHeader";


const PageWrapper = styled.div`
  width: 100%;
  //min-width: 750px;
  height: 100%;
  background: #2b2a2a;
  box-sizing: border-box;
  //margin: 70px 0 70px 0;
  font-family: sans-serif;
  padding-bottom: 20px;
  justify-content: center;
  margin: 0;
  min-width: 1200px;
  //background: rebeccapurple;
  position: relative;

`


const HeaderFilmInfo = styled.div`
position: absolute;
  top: 170px;
`

const FilmInfoWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  //margin-top: 30px;
  //min-width: 1200px;
  //background: orange;
  justify-content: center;
  left: 200px;
 //margin-left: 20%;
 // margin-right: 20%;
`

const FilmInfo = styled.div`
  height: 100%;
  color: white;
  box-sizing: border-box;
`

const ImageWrapper = styled.div`
  width: 250px;
  height: 350px;
  margin: 40px 20px 40px 76px;
  object-fit: contain;
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
  font-size: 19px;
  margin: 10px;
`

const MovieDirected = styled.p`
  font-size: 19px;
  margin: 10px;
`

const MovieDescription = styled.p`
  font-size: 17px;
  color: #8c8686;
  width: 600px;
  margin: 200px auto 0;
  text-align: justify;
  text-indent: 20px;
  font-family: sans-serif;
  line-height: 25px;
  //margin-top: 100px;
`

const MovieVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px 0;
`

// const NavigationWrapper = styled.div`
//   //width: 100%;
//   height: 50px;
//   background: white;
//   display: flex;
//   color: black;
//   //justify-content: space-around;
//
//   & div {
//     display: contents;
//   }
// `

const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: -15px;
`

const DeleteBtnWrapper = styled.div`
  color: white;
  width: 40px;
  height: 40px;
  background: red;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
`

const BtnWrapper = styled.div`
  width: 25px;
  height: 25px;
`

const EditBtnWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #598d19;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const UserBtnWrapper = styled.div`
  width: 300px;
  margin-left: 10px;
  display: flex;
  //background: orange;
`

const LikeBtn = styled.button`
  width: 120px;
  height: 30px;
  background: #33333e;
  color: white;
  margin-right: 12px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  
`

const WatchLateBtn= styled.button`
  width: 120px;
  height: 30px;
  background: #33333e;
  color: white;
  margin-right: 12px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
`

const HeaderWrapper = styled.div`
  height: 380px;
  position: relative;
  color: white;
`
const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`


const FilmPageInfo = ({movie}) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const movies: IMovie[] = useSelector((state: any) => state.moviesList)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isActiveModalWindow: IMovie[] = useSelector((state: any) => state.isActiveModalWindow)
    console.log('isActive', isActiveModalWindow)
    const dispatch = useDispatch()
    const history = createBrowserHistory();
    console.log('history', history)

    const currentPage = history.location.pathname;

    // закоментиррвала
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

                    </FilmInfo>




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