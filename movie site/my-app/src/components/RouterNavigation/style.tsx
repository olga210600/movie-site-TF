import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  min-width: 1200px;
  position: relative;
  
  & nav {
    display: flex;
    margin: 0;
    justify-content: right;
    width: 70%;
    height: 50px;
    align-items: center;
  }
`


export const LogoNameWrapper = styled.div`
  width: 30%;
  min-width: 330px;
`

export const LogoName = styled.h1`
  font-family: 'Teko', Arial, sans-serif;
  font-size: 50px;
  width: 327px;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SelectWrapper = styled.div`
  display: flex;
  margin-right: 25px;
  
  && select {
    margin-left: 7px;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    text-align: center;
    background: none;
    color: white;
    font-size: 14px;
  }

  && option {
    color: white;
    background: #1b1b2b;
  }
`

export const RegistrationWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogInOutWrapper = styled.div`
  width: 80px;
`

export const Link = styled(RouterLink)`
  text-decoration: none;

  && {
    text-decoration: ${({isActive}) => (isActive ? "underline red" : "none")};
    color: ${({isActive}) => (isActive ? "white" : "white")};
    margin-right: 15px;
    padding: 5px;

    :hover {
      background: grey;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;


export const AddBtn = styled.button`
  font-size: 16px;
  width: 100px;
  height: 30px;
  margin-right: 15px;
  border: none;
  background: #69696d;
  color: white;
  border-radius: 5px;
  
  // && {
  //     //background: ${({isActive}) => (isActive ? "darkgrey" : "white")};
  //     //color: ${({isActive}) => (isActive ? "grey" : "black")};
  //   //border-radius: 5px;
  //     //cursor: ${({isActive}) => (isActive ? "none" : "pointer")};
  //}

  :hover {
    color: grey;
  }
`

export const UserFilmWrapper = styled.div`
  color: white;
  display: flex;
`

export const WatchLateFilmsWrapper = styled.div`
  width: 140px;
  box-sizing: border-box;
`

export const LikedFilmsWrapper = styled.div`
  width: 98px;
  box-sizing: border-box;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  color: white;
`

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  color: white;
  width: 92%;
  justify-content: center;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;
  left: -1px;

  //@media (max-width: 1213px)  { 
  //  width:800px ;
  //  
  //  background: rebeccapurple;
  //  justify-content: center;
  //  //color: rebeccapurple;
  //  display: block;
  //  margin: auto;
  //}

`
