import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components'
import {Formik, Field, Form} from "formik";
import {validateSchema} from "./schema";
import {v4 as uuidv4} from 'uuid';
import isEmpty from 'lodash/isEmpty'
import {
    Select,
    CurrentBtnWrapper,
    CloseBtn,
    ModalContent,
    Modal,
    Header,
    CurrentBtn,
    ErrorMessage,
    FormField
} from './style'

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


// @ts-ignore
// @ts-ignore
const SelectComponent = ({options, value, field: {name}, form: {setFieldValue, values}}) => {
    const handleChange = useCallback((e) => {
        console.log('e.target.value: ', e.target.value)
        if (e.target.value) {
            setFieldValue(name, e.target.value)
        }
    }, [name, setFieldValue])

    return (

        <Select onChange={handleChange}>

            {
                options.map((option) => (

                    <option value={option.value} selected={value === option.value}>{option.label}</option>
                ))
            }

        </Select>
    )
}

const ModalWindow = ({date, options, currentFunction, currentButton, handleClose}) => {
    const initialValues = useMemo(() => getInitialValues(date), [date]);

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
                        {({values, errors, touched}) => {
                            // @ts-ignore
                            // @ts-ignore
                            // @ts-ignore

                            console.log('values', values)
                            return (
                                <Form>
                                    <Header>Fill in the movie fields</Header>

                                    <FormField isError={errors?.name && touched.name}>
                                        <label htmlFor="name">Movie name: </label>
                                        <Field id="name" name="name" placeholder="name"/>

                                        {errors?.name && touched.name && (
                                            <ErrorMessage>{errors?.name}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.image && touched.image}>
                                        <label htmlFor="image"> Movie image:</label>
                                        <Field id="image" name="image" placeholder="image"/>

                                        {errors?.image && touched.image && (
                                            <ErrorMessage>{errors?.image}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.year && touched.year}>
                                        <label htmlFor="year">Movie year:</label>
                                        <Field id="year" name="year" placeholder="year"/>

                                        {errors?.year && touched.year && (
                                            <ErrorMessage>{errors?.year}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.genre && touched.genre}>
                                        <label htmlFor="genre">Genre</label>
                                        <Field
                                            id="genre"
                                            name="genre"
                                            value={values?.genre}
                                            options={options}
                                            component={SelectComponent}
                                        />

                                        {errors?.genre && touched.geanre && (
                                            <ErrorMessage>{errors?.genre}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.description && touched.description}>
                                        <label htmlFor="description">Movie description:</label>
                                        <Field id="description" name="description"
                                               placeholder="description"/>

                                        {errors?.description && touched.description && (
                                            <ErrorMessage>{errors?.description}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.director && touched.director}>
                                        <label htmlFor="director"> Movie director:</label>
                                        <Field id="director" name="director" placeholder="director"/>

                                        {errors?.director && touched.director && (
                                            <ErrorMessage>{errors?.director}</ErrorMessage>
                                        )}
                                    </FormField>

                                    <FormField isError={errors?.video && touched.video}>
                                        <label htmlFor="video"> Movie video:</label>
                                        <Field id="video" name="video" placeholder="video"/>

                                        {errors?.video && touched.video && (
                                            <ErrorMessage>{errors?.video}</ErrorMessage>
                                        )}
                                    </FormField>


                                    <CurrentBtnWrapper>
                                        <CurrentBtn type="submit"
                                                    disabled={!isEmpty(errors)}
                                                    onClick={() => {
                                                        handleClose()
                                                        currentFunction(values)

                                                    }}>
                                            {currentButton}
                                        </CurrentBtn>
                                    </CurrentBtnWrapper>

                                    <CloseBtn onClick={() => {
                                        handleClose()
                                    }}>
                                        &#10006;
                                    </CloseBtn>
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