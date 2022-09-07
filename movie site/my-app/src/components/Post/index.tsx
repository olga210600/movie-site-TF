import React from 'react';
import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, likedFilm, watchLateFilm} from '../../store/reducers/moviesReducer'
import cloneDeep from 'lodash/cloneDeep'

import {LinkWrapper, PATHS} from "../RouterNavigation";


const PostWrapper = styled.div`
  width: 240px;
  height: 370px;
  margin: 20px;
  cursor: pointer;
  background: #4c4848;
  padding: 10px;
  border-radius: 5px;
  position: relative;

`


const MovieName = styled.p`
  color: #b8b6b6;
  height: 50px;
  width: 230px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  //text-decoration: none;
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
  left: 238px;
  top: -16px;
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

            {isAuthorized &&
            <div>
                <button
                    onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'like'}
                </button>

                <button
                    onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}
                </button>
            </div>

            }
            <PostWrapper>

                {isAdmin &&
                <CloseBtn onClick={() => dispatch(removeMovie(movie.id))}>&#10006;</CloseBtn>
                }

                <Link to={{pathname: `/movie-details?filmId=${filmId}`}}>
                    <MovieName>{movie.name}</MovieName>
                    <MovieImgWrapper>
                        <MovieImg className='movie-img' src={movie.image}/>
                    </MovieImgWrapper>
                </Link>
            </PostWrapper>


        </div>

    );
};

export default Post;