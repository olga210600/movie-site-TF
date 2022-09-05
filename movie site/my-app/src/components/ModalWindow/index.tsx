import React, {useMemo} from 'react';
import styled from 'styled-components'
import {Formik, Field, Form} from "formik";
import {validateSchema} from "./schema";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {editMovie, addNewMovie, IMovie} from '../../store/reducers/moviesReducer'


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
  //transform: scale(1);




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

const EditBtn = styled.button`
  width: 50px;
  height: 30px;
  background: orange;
`

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 500px;
  height: 500px;

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




const ModalWindow = ({date, currentFunction, currentButton , handleClose}) => {
    const initialValues = useMemo(() => getInitialValues(date), [date]);
    const dispatch = useDispatch()

    // const currentFunction = (value) => {
    //     //разкоментировать!!!!!!!
    //     // dispatch(editMovie(value))
    //     dispatch(addNewMovie(value))
    // }

    // @ts-ignore
    return (

        <Modal
        >
            <ModalContent
                onClick={e => e.stopPropagation()}
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

                                    <div>
                                        <label htmlFor="name">movie Name</label>
                                        <Field id="name" name="name" placeholder="name"/>

                                        {errors?.name && (
                                            <div>{errors?.name}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="image"> movieImage</label>
                                        <Field id="image" name="image" placeholder="image"/>

                                        {errors?.image && (
                                            <div>{errors?.image}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="year">movieYear</label>
                                        <Field id="year" name="year" placeholder="year"/>

                                        {errors?.year && (
                                            <div>{errors?.year}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="genre">movieGenre</label>
                                        <Field id="genre" name="genre" placeholder="genre"/>

                                        {errors?.genre && (
                                            <div>{errors?.genre}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="description">movieDescription</label>
                                        <Field id="description" name="description"
                                               placeholder="description"/>

                                        {errors?.description && (
                                            <div>{errors?.description}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="director"> movieDirector</label>
                                        <Field id="director" name="director" placeholder="director"/>

                                        {errors?.director && (
                                            <div>{errors?.director}</div>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="video"> movieVideo</label>
                                        <Field id="video" name="video" placeholder="video"/>

                                        {errors?.video && (
                                            <div>{errors?.video}</div>
                                        )}
                                    </div>

                                    <EditBtn
                                        // disabled={
                                        //     errors?.name || errors?.image || errors?.year || errors?.genre || errors?.description || errors?.director || errors?.video
                                        // }
                                        onClick={() => {
                                            handleClose()
                                            currentFunction(values)
                                        }}>
                                        {currentButton}
                                    </EditBtn>

                                    <button onClick={() => {handleClose()}}>Close</button>
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