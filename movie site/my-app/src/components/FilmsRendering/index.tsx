import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import Post from "../../components/Post";
import Navigation from "../../components/RouterNavigation";
import styled from "styled-components";
import PaginationList from 'react-pagination-list';

const Wrapper = styled.div`
  background: #2b2a2a;
  box-sizing: border-box;
  padding-bottom: 50px;
  min-width: 1200px;

  & div {

    & div {
      flex-wrap: wrap;
      justify-content: center;
      //background: white;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    //background: rebeccapurple;
  }
`

const FilmsWrapper = styled.div`
  width: 1000px;
  display: flex;
  //flex-wrap: wrap;
  //flex-direction: row;
  justify-content: center;
  margin: -85px auto 0;
  //width: 100%;
  

  & div {
    //flex-direction: row;
    
    & div {
      //display: flex;
      //flex-wrap: wrap;
      //flex-direction: row; 
      //background: orange;
      //width: 100%;
   
    }
  }
`

const FilmsRendering = ({currentValue }) => {
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)

    const array = []

    return (
        <Wrapper>
            <Navigation/>

            <FilmsWrapper>
                {
                    filteredList.map(movie => {
                            if (currentValue === 'isLiked'){
                                if (movie.isLiked === true) {
                                    array.push(movie)
                                }
                            }else if (currentValue === 'isWatchLate')
                                if (movie.isWatchLate === true) {
                                    array.push(movie)
                                }
                        }
                    )
                }

                <FilmsWrapper>
                    <PaginationList
                        data={array}
                        pageSize={8}
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

export default FilmsRendering;