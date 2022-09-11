import React from 'react';
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import Post from "../../components/Post";
import Navigation from "../../components/RouterNavigation";
import styled from "styled-components";
import PaginationList from 'react-pagination-list';

import {Wrapper, FilmsWrapper} from './style'

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