import styled from "styled-components";

export const Wrapper = styled.div`
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

export const FilmsWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin: -85px auto 0;
 
`