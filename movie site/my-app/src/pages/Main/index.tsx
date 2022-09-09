import {useDispatch, useSelector} from 'react-redux';
import {IMovie, addNewMovie} from "../../store/reducers/moviesReducer";
import React, {useEffect, useMemo, useState} from "react";
// import '../components.css'
import PaginationList from 'react-pagination-list';

import styled from 'styled-components'
import PageHeader from "../../components/PageHeader";
import {selectedFilms} from '../../store/reducers/moviesReducer'
import ImageSlider from "../../components/ImageSlider";
import Post from "../../components/Post";
import ModalWindow from "../../components/ModalWindow";
// @ts-ignore

// top
// import HeaderImgPost from "../../img/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg"


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
    }
  }

  ul {
    display: flex;
    justify-content: center;
 


    
  }
  
  
`

const HeaderWrapper = styled.div`
  height: 380px;
  position: relative;
  color: white;
`

// top
const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const HeaderLink = styled.div`
  width: 100%;
  height: 40px;
  //margin-top: 15px;
  position: absolute;
  top: 0;
  //padding-right: 50px;
  //padding-left: 50px;
  box-sizing: border-box;
  //display: flex;

`

const FilmsWrapper = styled.div`
  //background: green;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  //min-width: 800px;
  padding-top: 50px;
`


const Main = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)
    const dispatch = useDispatch()
    // const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const [addModalActive, setAddModalActive] = useState(false)


    function handleCategoryChange(event) {
        dispatch(selectedFilms(event.target.value))

    }

    const currentFunction = (values) => {
        dispatch(addNewMovie(values))
    }

    return (
        <Wrapper>
            <HeaderWrapper>

                {/*top*/}
                {/*<HeaderImg src={HeaderImgPost}/>*/}

                <HeaderLink>
                    <PageHeader setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>

                    {
                        addModalActive &&
                        <ModalWindow
                            currentButton='Add'
                            currentFunction={currentFunction}
                            date={movies} handleClose={() => setAddModalActive(false)}
                        />
                    }
                </HeaderLink>

            </HeaderWrapper>


            {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!слфйдер*/}
            {/*<ImageSlider movies={movies}/>*/}
            {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

            <FilmsWrapper>
                <PaginationList
                    data={filteredList}
                    pageSize={9}
                    layout={"row"}
                    renderItem={(item, key) => (
                        <Post filmId={item.id} key={key} movie={item}/>
                    )}
                />
            </FilmsWrapper>

        </Wrapper>
    );
};

export default Main;