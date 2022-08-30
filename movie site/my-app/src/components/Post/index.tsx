import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie} from '../../store/reducers/moviesReducer'


const PostWrapper = styled.div`
   width: 200px;
    height: 350px;
    // background: #d9b3b3;
  
`

const MovieName = styled.p`
  color: #b8b6b6;
  height: 50px;
  //width: 40px;
  font-size: 19px;
  text-align: center;
  font-weight: bold;

`

//
const Post = ({movie, filmId}:any) => {
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const dispatch = useDispatch()

    return (
        // <PostWrapper>
        //     {isAdmin ?
        //         <div>
        //             <button onClick={() => dispatch(removeMovie(movie.id))}>x</button>
        //             <button>Change</button>
        //         </div> :
        //         <div></div>
        //
        //     }
        //     <MovieName>{movie.name}</MovieName>
        //     <img className='movie-img' src={movie.image}/>
        // </PostWrapper>
        <div>
            {isAdmin ?
                <div>
                    <button onClick={() => dispatch(removeMovie(movie.id))}>x</button>
                    <button>Change</button>
                </div> :
                <div></div>

            }
            <Link to={{
                pathname:`/movie-details?filmId=${filmId}`,


            }}>
                <PostWrapper>

                    <MovieName>{movie.name}</MovieName>
                    <img className='movie-img' src={movie.image}/>
                </PostWrapper>
            </Link>

        </div>

    );
};

export default Post;