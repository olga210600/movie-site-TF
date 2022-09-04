import React, {useState} from "react";
import {createBrowserHistory} from "history";
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {Form} from "formik";
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from '../../store/reducers/moviesReducer'
import EditWindow from "../ModalWindow";
// @ts-ignore


export const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background: white;
  margin: 0;
  font-size: 17px;


  & nav {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
  }
`


export const LinkWrapper = styled.div`
  display: flex;
`

export const SelectWrapper = styled.div`
  display: flex;
`

export const RegistrationWrapper = styled.div`
  margin-right: 30px;
`

export const MovieCategory = styled.div`
  //
  //
`

export const Link = styled(RouterLink)`
  && {
      //color: ${({isActive}) => (isActive ? "#000000" : "black")};
    text-decoration: none;
    //font-size: 18px;
    color: ${({isActive}) => (isActive ? "pink" : "black")};
    //background: red;
    width: 100px;
    margin: 0 20px 0 30px;
    //color: red;
  }
`;


export const PATHS = {
    MAIN: "/",

    REGISTRATION_FORM: "/registration-form",
    LIKED_MOVIE_PAGE: '/liked-movies',
    WATCH_LATE_MOVIE_PAGE: '/watch-late-movies'
    //////////////////////////////////
    // SIMPLE_FORM: "/simple-form",
    // ESSENTIAL_FORM: "/essential-form",


    // Registration_FORM: "/advanced-form",
};

const log = (i, d) => {
    console.log(i === d)
}

const Navigation = ({setAddModalActive, handleCategoryChange}: any) => {
    const history = createBrowserHistory();
    console.log('history', history)

    const currentPage = history.location.pathname;
    console.log('currentPage', typeof (currentPage))

    const movies: IMovie[] = useSelector((state: any) => state.moviesList)
    const isUser: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const dispatch = useDispatch()

    const [editModalActive, setEditModalActive] = useState(false)

    return (
        <Wrapper>
            <nav>

                <LinkWrapper>
                    <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                        Main page
                    </Link>


                    <SelectWrapper>
                        <MovieCategory>Filter by Category:</MovieCategory>
                        <div>
                            <select
                                name="category-list"
                                id="category-list"
                                onChange={handleCategoryChange}
                            >
                                <option value="">All genres</option>
                                <option value="action movie">Action movie</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                    </SelectWrapper>
                </LinkWrapper>

                {/*{*/}
                {/*    isAdmin &&*/}
                {/*    <button  onClick={() => setEditModalActive(true)}>Create new film</button>*/}
                {/*}*/}
                {/*{*/}
                {/*    editModalActive &&*/}
                {/*    // <ModalWindow currentButton='Edit'   date={movie} active={editModalActive} />*/}
                {/*    <EditWindow  currentButton='Edit'   date={movies} handleClose={() => setEditModalActive(false)}*/}

                {/*    />*/}


                {/*}*/}
                <div>

                    {
                        isUser &&
                        <div>
                            <Link isActive={currentPage === PATHS.LIKED_MOVIE_PAGE} to={PATHS.LIKED_MOVIE_PAGE}>
                                Liked Film
                            </Link>
                            <Link isActive={currentPage === PATHS.WATCH_LATE_MOVIE_PAGE} to={PATHS.WATCH_LATE_MOVIE_PAGE}>
                                Watch Late Film
                            </Link>

                        </div>

                    }
                </div>

                {/*add film*/}
                { isAdmin && <button  onClick={() => setAddModalActive(true) }>Create new Film</button>}




                <RegistrationWrapper>
                    {!isAdmin && !isUser ?
                        <Link
                            isActive={currentPage === PATHS.REGISTRATION_FORM}
                            to={PATHS.REGISTRATION_FORM}
                        >
                            Log in
                        </Link>
                        :
                        // <LinkWrapper onClick={() => dispatch(logOut(state))}>
                        //     Log out
                        // </LinkWrapper>


                        <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN} onClick={() => dispatch(logOut(movies))}>
                        Log out
                        </Link>
                    }
                </RegistrationWrapper>


            </nav>


      {/*add film*/}
            {/*{*/}
            {/*    editModalActive &&*/}
            {/*    // <ModalWindow currentButton='Edit'   date={movie} active={editModalActive} />*/}
            {/*    <EditWindow  currentButton='Edit'   date={movies} handleClose={() => setEditModalActive(false)}*/}

            {/*    />*/}


            {/*}*/}
        </Wrapper>


    );
};

export default Navigation;
