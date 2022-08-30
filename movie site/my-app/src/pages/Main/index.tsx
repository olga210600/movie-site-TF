import {useDispatch, useSelector} from 'react-redux';
import {IMovie} from "../../store/reducers/moviesReducer";
import React, {useEffect, useMemo, useState} from "react";
// import '../components.css'
import PaginationList from 'react-pagination-list';

import styled from 'styled-components'
import PageHeader from "../../components/PageHeader";
import {selectedFilms} from '../../store/reducers/moviesReducer'
import ImageSlider from "../../components/ImageSlider";
import Post from "../../components/Post";


const Wrapper = styled.div`
  width: 63%;
  min-width: 600px;
  margin: 70px auto;
  background: #2b2a2a;

  & div {
    & div {
      flex-wrap: wrap;
      margin: 20px;
      justify-content: center;
    }
  }
`


const Main = () => {
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)
    const filteredList: IMovie[] = useSelector((state: any) => state.moviesList.filteredMovies)

    console.log('movies',movies)

    const dispatch = useDispatch()

    function handleCategoryChange(event) {
        dispatch(selectedFilms( event.target.value))

    }


    return (
        <Wrapper>
            <PageHeader handleCategoryChange={handleCategoryChange}/>

            <ImageSlider movies={movies}/>

            <PaginationList
                data={filteredList}
                pageSize={9}
                layout={"row"}
                renderItem={(item, key) => (
                    // <Post filmId={item.id} key={key} movie={item}/>
                    <Post filmId={item.name} key={key} movie={item}/>
                )}
            />
            {/*<PaginationList*/}
            {/*    // data={movies}*/}
            {/*    data={...element}*/}
            {/*    pageSize={9}*/}
            {/*    layout={"row"}*/}
            {/*    renderItem={(item, key) => (*/}
            {/*        <Post key={key} movie={item}/>*/}
            {/*    )}*/}
            {/*/>*/}
        </Wrapper>
    );
};

export default Main;