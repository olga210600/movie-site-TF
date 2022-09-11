import styled from 'styled-components'

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  padding: 40px 30px 30px 30px;
  border-radius: 12px;
  background-color: #2b2a2a;
  width: 465px;
  height: 590px;
  position: relative;
`

export const Header = styled.h1`
  width: 400px;
  margin: 0 auto 30px;
  color: white;
`


export const CloseBtn = styled.button`
  background: red;
  border: none;
  width: 30px;
  height: 30px;
  position: absolute;
  color: white;
  font-size: 15px;
  top: 10px;
  right: 10px;
`

export const CurrentBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 600px;
  left: 5px;
`

export const CurrentBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  border: none;
  font-size: 19px;
  background: #5dba52;
  border-radius: 5px;

  &:disabled {
    background: #a2aba1;
  }
`

export const Select = styled.select`
  height: 35px;
  border-radius: 6px;
  padding: 0 5px;

  ${({isError}) =>
    isError
        ? `
    border: 2px solid red;
    `
        : `
        border: 2px solid gray;
    `}
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  top: 60px;
  left: 162px;
`;


export const FormField = styled.div`
  display: flex;
  width: 435px;
  height: 70px;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: auto;

  & label {
    margin-bottom: 5px;
    font-weight: 600;
    width: 160px;
    display: flex;
    align-items: center;
    color: white;
  }

  & input {
    height: 35px;
    width: 260px;
    border-radius: 6px;
    padding: 0 5px;

    ${({isError}) =>
    isError
        ? `
    border: 2px solid red;
    `
        : `
        border: 2px solid gray;
    `}
    ::placeholder {
      margin-left: 30px;
    }
  }

  & select {
    height: 39px;
    width: 274px;
    border-radius: 6px;
    padding: 0 5px;
  }
`;