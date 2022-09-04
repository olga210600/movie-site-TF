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
import EditWindow from "../../components/ModalWindow";


const Wrapper = styled.div`
  width: 63%;
  min-width: 750px;
  margin: 70px auto;
  background: #2b2a2a;
  box-sizing: border-box;
  //padding-top: 0;

  & div {
    & div {
      flex-wrap: wrap;
      // срабатівает в навигации margin: 20px;
      justify-content: center;
    }
  }
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

    return (
        <Wrapper>
            <PageHeader setAddModalActive={setAddModalActive} handleCategoryChange={handleCategoryChange}/>

            {
                addModalActive &&
                <EditWindow
                    currentButton='Add'
                    // currentFunctionAdd={addNewMovie}
                    date={movies} handleClose={() => setAddModalActive(false)}
                />
            }
            <ImageSlider movies={movies}/>

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