import React from 'react';
import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, likedFilm, watchLateFilm} from '../../store/reducers/moviesReducer'
import cloneDeep from 'lodash/cloneDeep'
// // @ts-ignore
// import likeImg from '../../img/like-svgrepo-com.svg'
// // @ts-ignore
// import likedImg from '../../img/likedd-svgrepo-com (2).svg'

import {LinkWrapper, PATHS} from "../RouterNavigation";
import WatchLateFilmPage from "../../pages/WatchLateFilmPage";


const PostWrapper = styled.div`
  width: 200px;
  height: 440px;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;

`


const MovieName = styled.p`
  color: #b8b6b6;
  height: 70px;
  //background: orange;
  width: 200px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  //text-decoration: none;
  margin-top: 5px;
  cursor: pointer;
  line-height: 1.5;
  margin-bottom: 15px;
  align-items: center;
  display: flex;
`

const MovieImgWrapper = styled.div`
  width: 200px;
  height: 300px;
  cursor: pointer;
  margin: auto;

`
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;

`

const CloseBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background: red;
  font-size: 15px;
  border: none;
  position: absolute;
  left: 183px;
  top: -18px;
`

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 25px;
  //background: orange;
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`
const WatchLateBtnWrapper = styled.div`
  width: 90px;
  height: 25px;
  display: flex;
  align-items: center;
  background: #33333e;
  text-align: center;
  border-radius: 5px;
  color: white;
`

const LikedBtnWrapper = styled.div`
  width: 90px;
  height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  background: #33333e;
  color: white;
  margin-right: 12px;
  border-radius: 5px;


  //  width: 30px;
  //  height: 30px;
`

export const Link = styled(RouterLink)`
  && {
    text-decoration: none;
  }
`;


const Post = ({movie, filmId}: any) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const dispatch = useDispatch()


    return (
        <div>


            <PostWrapper >

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
                        {/*// onClick={() => dispatch(likedFilm(movie.id))}>*/}
                        {/*// {movie.isLiked ?*/}
                        {/*//     <img src={likedImg}/>*/}
                        {/*//     :*/}
                        {/*//     <img src={likeImg}/>*/}
                        {/*// }*/}
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