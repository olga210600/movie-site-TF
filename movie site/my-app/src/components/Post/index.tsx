import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


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
    return (
        <Link to={{
            pathname:`/movie-details?filmId=${filmId}`,


        }}>
            <PostWrapper>
                <MovieName>{movie.name}</MovieName>
                <img className='movie-img' src={movie.image}/>
            </PostWrapper>
        </Link>

    );
};

export default Post;