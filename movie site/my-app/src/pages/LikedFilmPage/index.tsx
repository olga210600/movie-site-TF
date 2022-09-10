import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../../components/FilmPageInfo";
import Post from "../../components/Post";
import PageHeader from "../../components/PageHeader";
import Navigation from "../../components/RouterNavigation";
// import {PATHS} from '../../components/RouterNavigation'
import styled from "styled-components";
import PaginationList from 'react-pagination-list';


const Wrapper = styled.div`

  //background: #1f1e1e;
  background: #2b2a2a;
  box-sizing: border-box;
  padding-bottom: 50px;
  min-width: 1200px;


  & div {

    & div {
      flex-wrap: wrap;
      justify-content: center;

      //background: blue;

    }
  }

  ul {
    display: flex;
    justify-content: center;
    background: rebeccapurple;

  }



`


const FilmsWrapper = styled.div`
  //row-gap: 0;
  //display: flex;
  //flex-direction: row;
  //background: blue;
  //width: 100%;
  width: 1000px;
  //min-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: -200px auto 0;
  

  & div {
    //background: rebeccapurple;
    //width: 300px;
    //display: flex;
    //flex-wrap: wrap;
    flex-direction: row;
   
    //justify-content: center;
    & div {
      display: flex;
      //background: white;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top:50px;
    }
  }

  //width: 90%;
  //max-width: 1200px;
  //margin: -200px auto 0;
  //padding-top: 50px;
`

const LikedFilmPage = () => {
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)


    const likedArray = []
    // const even = () => {
    //     filteredList.map(movie => movie.isLiked === true)
    //     // element === true;
    // }

    console.log('filteredList liked film', filteredList)
    return (
        <Wrapper>
            <Navigation/>

            <FilmsWrapper>
                {/*{*/}
                {/*    filteredList.map(movie => {*/}

                {/*            // if (movie.isLiked === true) {*/}
                {/*            if (movie.isLiked === true) {*/}

                {/*                return (*/}

                {/*                    <Post filmId={movie.name} movie={movie}/>*/}

                {/*                )*/}
                {/*            }*/}

                {/*        }*/}
                {/*    )*/}

                {/*}*/}


                {
                    filteredList.map(movie => {

                            // if (movie.isLiked === true) {
                            if (movie.isLiked === true) {
                                likedArray.push(movie)
                                console.log( 'likedArray',likedArray)
                                // return (
                                //
                                //     <Post filmId={movie.name} movie={movie}/>
                                //
                                // )
                            }

                        }
                    )

                }

                <FilmsWrapper>
                    <PaginationList
                        data={likedArray}
                        pageSize={9}
                        layout={"row"}
                        renderItem={(item, key) => (
                            <Post filmId={item.id} key={key} movie={item}/>
                        )}
                    />
                </FilmsWrapper>

            </FilmsWrapper>
        </Wrapper>


    );
};

export default LikedFilmPage;