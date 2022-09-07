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
// import headerImg from "../../img/1640212391_5-abrakadabra-fun-p-fon-listya-paporotnika-5.jpg"


const Wrapper = styled.div`
  
  background: #2b2a2a;
  box-sizing: border-box;
 

  & div {
    & div {
      flex-wrap: wrap;
      // срабатівает в навигации margin: 20px;
      justify-content: center;
      //margin: auto;
    }
  }
  
  ul {
    display: flex;
    justify-content: center;
  }
`

const HeaderWrapper = styled.div`
  height: 450px;
  position: relative;
  //display: flex;
  font-size: 19px;
  //padding-right: 15px;
  color: white;
`

const HeaderImg = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  //background-color:rgba(0,0,0,.5);

`

const HeaderLink = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 40px;
  //background: white;
position: absolute;
  top: 0;
  padding-right: 50px;
  box-sizing: border-box;
  //display: flex;
  
`


const Main = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)
    const dispatch = useDispatch()
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const [addModalActive, setAddModalActive] = useState(false)


    function handleCategoryChange(event) {
        dispatch(selectedFilms(event.target.value))

    }

    const currentFunction = (values) => {
        //разкоментировать!!!!!!!
        // dispatch(editMovie(value))
        dispatch(addNewMovie(values))
    }

    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderImg src={"https://p4.wallpaperbetter.com/wallpaper/527/320/1017/interstellar-movie-movies-astronaut-sea-wallpaper-preview.jpg"}/>
                {/*<img src={}/>*/}

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

            <PaginationList
                data={filteredList}
                pageSize={9}
                layout={"row"}
                renderItem={(item, key) => (
                    <Post filmId={item.id} key={key} movie={item}/>
                )}
            />
        </Wrapper>
    );
};

export default Main;