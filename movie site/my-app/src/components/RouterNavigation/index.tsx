import React from "react";
import {createBrowserHistory} from "history";
import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {Form} from "formik";
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from '../../store/reducers/moviesReducer'
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
    color: ${({isActive}) => (isActive ? "#000000" : "black")};
    text-decoration: none;
    //font-size: 18px;
    width: 100px;
    margin: 0 20px 0 30px;
  }
`;


export const PATHS = {
    MAIN: "/",

    REGISTRATION_FORM: "/registration-form",
    LIKED_MOVIE_PAGE:'/liked-movies'
    //////////////////////////////////
    // SIMPLE_FORM: "/simple-form",
    // ESSENTIAL_FORM: "/essential-form",


    // Registration_FORM: "/advanced-form",
};

const Navigation = ({handleCategoryChange}: any) => {
    const history = createBrowserHistory();

    const currentPage = history.location.pathname;

    const state: IMovie[] = useSelector((state: any) => state.moviesList)
    const isUser: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const dispatch = useDispatch()

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

                <div>
                    {
                        isUser &&
                            <div>
                                <Link isActive={currentPage === PATHS.LIKED_MOVIE_PAGE} to={PATHS.LIKED_MOVIE_PAGE}>
                                    Liked Film
                                </Link>

                                <button>Watch Late</button>
                            </div>

                    }
                </div>



                <RegistrationWrapper>
                    {!isAdmin && !isUser ?
                        <Link
                            isActive={currentPage === PATHS.REGISTRATION_FORM}
                            to={PATHS.REGISTRATION_FORM}
                        >
                            Log in
                        </Link>
                        :
                        <LinkWrapper onClick={() => dispatch(logOut(state))}>
                            Log out
                        </LinkWrapper>
                    }
                </RegistrationWrapper>


            </nav>
            {/* <button onClick={() => history.push("https://www.google.com/")}>
        Some route
      </button> */}
        </Wrapper>
    );
};

export default Navigation;
