import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: darkgrey;
  width: 500px;
  height: 100%;

  & form {
    display: flex;
    flex-direction: column;

    & h2 {
      margin: 0;
    }
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 250px;

  & label {
    margin-bottom: 5px;
    font-weight: 600;
  }

  & input {
    height: 35px;
    border-radius: 6px;
    padding: 0 5px;

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
  font-weight: 600;
`;
