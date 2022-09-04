import React from 'react';
import {createBrowserHistory} from 'history'
import {IMovie} from "../../store/reducers/moviesReducer";
import {useSelector} from "react-redux";
import FilmPageInfo from "../FilmPageInfo";
import Navigation from "../PageHeader";
import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 100%;
`

const FilmPage = (props) => {
    console.log(props)
    const history = createBrowserHistory()

    //визвать селектор , пройтись по мену и найти нужный обьектпо ключу let name
    const movies: IMovie[] = useSelector((state: any) => state.moviesList.defaultData)

    const params = new URLSearchParams(history.location.search);
    const filmName = params.get("filmId");
    console.log('name: ', filmName)

    console.log('history', history)
    return (
        <div>
            {
                movies.map(movie => {

                        if (movie.id === filmName) {

                            return (
                                <PageWrapper>


                                    <FilmPageInfo movie={movie}/>

                                </PageWrapper>


                            )
                        }

                    }
                )

            }
        </div>
    );
};

export default FilmPage;
