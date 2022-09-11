import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: #2b2a2a;
  width: 100vw;
  height: 100vh;
  color: white;

  & form {
    display: flex;
    //justify-content: center;
    align-items: center;
    background: #404040;
    width: 450px;
    height: 405px;
    padding-top: 5px;
    margin-top: 100px;
    flex-direction: column;
    border-radius: 5px;
    

    & h2 {
      margin: 0;
    }
  }
`;


export const PageHeader = styled.h1`
    margin:20px 0 50px ;
  font-size: 45px;

`

export const LabelWrapper = styled.div`
//background: rebeccapurple;
  display: flex;
  position: relative;
  //width: 200px;
  //height: 30px;
`

export const StarPassword = styled.span`
  color: red;
  position: absolute;
  top: -16px;
  left: 75px;
  font-size: 17px;
`

export const StarEmail = styled.span`
  color: red;
  position: absolute;
  top: -16px;
  left: 45px;
  font-size: 17px;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 280px;
  //**
  position: relative;

  & label {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 15px;
    margin-top: -10px;
  }

  & input {
    width: 280px;
    height: 35px;
    border-radius: 6px;
    padding: 0 5px;
    margin-bottom: 10px;

    ${({ isError }) =>
            isError
                    ? `
    border: 2px solid red;
    `
                    : `
        border: 2px solid lime;
    `}
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #33ceff;
  color: #ffffff;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  ${({ disabled }) =>
          disabled
                  ? `
    background-color: #a59d9d63;
    color: #ffffff;
  `
                  : `
    &:hover {
      background-color: blue;
      color: #ffffff;
    }
  `}
`;


export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: red;
  //font-weight: 600;
  position: absolute;
  top: 64px;
`;



export const CompleteWrapper = styled.div`
  margin: 13px 0 10px 0;
  font-size: 17px;
  color: red;
  //font-weight: bold;
  

`

export const LogInWrapper = styled.div`
  
  width: 294px;
  //background: rebeccapurple;
  display: flex;
  justify-content: right;
  align-items: center;
  
 && a {
   //padding: 10px;
   
 }
  
  
 
`

 export const MainPageLinkWrapper = styled.div`
   position: absolute;
   top: 25px;
   height: 30px;
   //background: red;
   right: 40px;
   font-size: 18px;
   
`

