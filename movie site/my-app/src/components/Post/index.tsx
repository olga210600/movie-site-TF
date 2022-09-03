import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie, likedFilm, watchLateFilm} from '../../store/reducers/moviesReducer'
import cloneDeep from 'lodash/cloneDeep'


const PostWrapper = styled.div`
  width: 200px;
  height: 350px;
  margin: 20px;
  cursor: pointer;
`


const MovieName = styled.p`
  color: #b8b6b6;
  height: 50px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
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

`
const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

`


const Post = ({movie, filmId}: any) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const dispatch = useDispatch()


    return (
        <div>
            {isAdmin &&
            <div>
                <button onClick={() => dispatch(removeMovie(movie.id))}>x</button>
            </div>

            }

            {isAuthorized &&
                <div>
                    <button onClick={() => dispatch(likedFilm(movie.id))}>{movie.isLiked ? 'Liked' : 'like'}</button>

                    <button onClick={() => dispatch(watchLateFilm(movie.id))}>{movie.isWatchLate ? 'Watched late' : 'Watch late'}</button>

                 </div>

            }
            <Link to={{pathname: `/movie-details?filmId=${filmId}`}}>
                <PostWrapper>

                    <MovieName>{movie.name}</MovieName>
                    <MovieImgWrapper>
                        <MovieImg className='movie-img' src={movie.image}/>
                    </MovieImgWrapper>

                </PostWrapper>
            </Link>

        </div>

    );
};

export default Post;