import React from "react";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";



export const Wrapper = styled.div`
  height: 60px;
  background-color: #33ceff;
  border-radius: 12px;
  margin-bottom: 20px;

  & nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }
`;

export const Link = styled(RouterLink)`
  && {
    color: ${({ isActive }) => (isActive ? "#000000" : "black")};
    text-decoration: none;
    font-size: 18px;
  }
`;


const PATHS = {
    MAIN: "/",

REGISTRATION_FORM: "/registration-form",
    //////////////////////////////////
    // SIMPLE_FORM: "/simple-form",
    // ESSENTIAL_FORM: "/essential-form",


    // Registration_FORM: "/advanced-form",
};

const Navigation = () => {
    const history = createBrowserHistory();

    const currentPage = history.location.pathname;

    return (
        <Wrapper>
            <nav>
                <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>
                    Main page
                </Link>

                <Link
                    isActive={currentPage === PATHS.REGISTRATION_FORM}
                    to={PATHS.REGISTRATION_FORM}
                >
                    Log in
                </Link>
            </nav>

            {/* <button onClick={() => history.push("https://www.google.com/")}>
        Some route
      </button> */}
        </Wrapper>
    );
};

export default Navigation;
