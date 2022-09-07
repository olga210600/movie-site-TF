import React, {useMemo} from 'react';
import styled from 'styled-components'
import {Formik, Field, Form} from "formik";
import {validateSchema} from "./schema";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';

const Modal = styled.div`
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


//${({isActive}) => isActive && `
//  display: flex;
// align-items: center;
// justify-content: center;
// `}

// analog
//transform: ${({isActive}) => isActive ? 'scale(1)' : 'scale(0)'};

//background: ${({isActive}) => isActive ? 'red' : 'green'};


//   ${({isActive}) => isActive ? `
//   transform: scale(1);
// ` : `
// transform: scale(0);
// `}


const ModalContent = styled.div`
  padding: 40px 30px 30px 30px;
  border-radius: 12px;
  background-color: #eeebeb;
  width: 500px;
  //height: 410px;
  height: 550px;
  position: relative;
  //padding-top: 40px;
`

const Header = styled.h1`
  width: 400px;
  margin: 0 auto 30px;
`


const CloseBtn = styled.button`
  background: red;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: absolute;
  color: white;
  font-size: 15px;
  top: 10px;
  right: 10px;
`

const FormNameElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 45px;
    margin-bottom: 10px;
  }
   &input {

   ${({ isError }) =>
          isError
                  ? `
    color:  red;
    `
                  : `
        border: 2px solid gray;
    `}
}
`
const FormImageElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 46px;
    margin-bottom: 10px;
  }
`
const FormYearElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 60px;
    margin-bottom: 10px;
  }
`
const FormGenreElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 50px;
    margin-bottom: 10px;
  }
`
const FormDescriptionElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 8px;
    margin-bottom: 10px;
  }
`
const FormDirectorElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 34px;
    margin-bottom: 10px;
  }
`
const FormVideoElement = styled.div`
  //background: orange;

  input {
    width: 65%;
    height: 30px;
    border-radius: 4px;
    margin-left: 53px;
    margin-bottom: 10px;
  }
`

const CurrentBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 555px;
  left: 5px;
`

const CurrentBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  border: none;
  font-size: 19px;
  background: #5dba52;
  border-radius: 5px;

`

const getInitialValues = (data) => ({
    name: data?.name ?? "",
    image: data?.image ?? "",
    year: data?.year ?? "",
    genre: data?.genre ?? "",
    description: data?.description ?? "",
    director: data?.director ?? "",
    video: data?.video ?? "",
    id: data?.id ?? uuidv4(),
});

const ModalWindow = ({date, currentFunction, currentButton, handleClose}) => {
    const initialValues = useMemo(() => getInitialValues(date), [date]);
    // const dispatch = useDispatch()


    // @ts-ignore
    return (

        <Modal>
            <ModalContent
                // onClick={e => e.stopPropagation()}
            >
                <div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => {
                        }}
                        validationSchema={validateSchema}
                        validateOnMount
                    >
                        {({values, errors}) => {
                            // @ts-ignore
                            // @ts-ignore
                            // @ts-ignore
                            return (
                                <Form>
                                    <Header>Fill in the movie fields</Header>

                                    <FormNameElement>
                                        <label htmlFor="name">Movie name: </label>
                                        <Field id="name" name="name" placeholder="name"/>

                                        {errors?.name && (
                                            <div>{errors?.name}</div>
                                        )}
                                    </FormNameElement>

                                    <FormImageElement>
                                        <label htmlFor="image"> Movie image:</label>
                                        <Field id="image" name="image" placeholder="image"/>

                                        {errors?.image && (
                                            <div>{errors?.image}</div>
                                        )}
                                    </FormImageElement>

                                    <FormYearElement>
                                        <label htmlFor="year">Movie year:</label>
                                        <Field id="year" name="year" placeholder="year"/>

                                        {errors?.year && (
                                            <div>{errors?.year}</div>
                                        )}
                                    </FormYearElement>

                                    <FormGenreElement>
                                        <label htmlFor="genre">Movie genre:</label>
                                        <Field id="genre" name="genre" placeholder="genre"/>

                                        {errors?.genre && (
                                            <div>{errors?.genre}</div>
                                        )}
                                    </FormGenreElement>

                                    <FormDescriptionElement>
                                        <label htmlFor="description">Movie description:</label>
                                        <Field id="description" name="description"
                                               placeholder="description"/>

                                        {errors?.description && (
                                            <div>{errors?.description}</div>
                                        )}
                                    </FormDescriptionElement>

                                    <FormDirectorElement>
                                        <label htmlFor="director"> Movie director:</label>
                                        <Field id="director" name="director" placeholder="director"/>

                                        {errors?.director && (
                                            <div>{errors?.director}</div>
                                        )}
                                    </FormDirectorElement>

                                    <FormVideoElement>
                                        <label htmlFor="video"> Movie video:</label>
                                        <Field id="video" name="video" placeholder="video"/>

                                        {errors?.video && (
                                            <div>{errors?.video}</div>
                                        )}
                                    </FormVideoElement>


                                    <CurrentBtnWrapper>
                                        <CurrentBtn
                                            onClick={() => {
                                                handleClose()
                                                currentFunction(values)
                                            }}>
                                            {currentButton}
                                        </CurrentBtn>
                                    </CurrentBtnWrapper>


                                    {/*<CloseBtnWrapper>*/}
                                    <CloseBtn onClick={() => {
                                        handleClose()
                                    }}>
                                        &#10006;
                                    </CloseBtn>
                                    {/*</CloseBtnWrapper>*/}

                                </Form>
                            );
                        }}
                            </Formik>
                            </div>
                            </ModalContent>
                            </Modal>
                            );
                        };

export default ModalWindow;