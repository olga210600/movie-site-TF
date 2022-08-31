import React from 'react';
import styled from 'styled-components'
import Navigation from "../RouterNavigation";


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

const FilmPageInfo = ({movie}) => {
    return (

        <PageWrapper>
            <NavigationWrapper>
                <Navigation/>
                {/*<p>Log in</p>*/}
            </NavigationWrapper>

            <FilmInfoWrapper>
                <ImageWrapper>
                    <Image src={movie.image}/>
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

            {/*<iframe width="560" height="315" src={movie.video}*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen>*/}
            {/*</iframe>*/}
        </PageWrapper>
    );
};

export default FilmPageInfo;