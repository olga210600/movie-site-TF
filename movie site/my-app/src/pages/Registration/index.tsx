import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { validateSchema } from "./schema";
import {
    Wrapper,
    FormField,
    SubmitButton,
    CodeWrapper,
    ErrorMessage,
} from "./styles";
import {IMovie} from "../../store/reducers/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {userLogIn, adminLogIn} from "../../store/reducers/moviesReducer"


const EssentialForm = () => {
    // const [isShowValues, setIsShowValues] = useState(false);
    const isUser: IMovie[] = useSelector((state: any) => state.moviesList.isUser)
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const dispatch = useDispatch()

    console.log('isUser' ,isUser)
    console.log('isAdmin' ,isAdmin)

    // const changeUserStatus = (item) => {
    //     item = true
    //     console.log('item',item)
    // }

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    userName: "",
                    // lastName: "",
                    email: "",
                    password: "",
                }}
                onSubmit={() => {}}
                validationSchema={validateSchema}
                validateOnMount
            >
                {({ values, errors }) => {
                    console.log("errors: ", errors);
                    return (
                        <Form>
                            <h3>With simple fields validation</h3>

                            <FormField isError={errors?.userName}>
                                <label htmlFor="userName">First Name</label>
                                <Field id="userName" name="userName" placeholder="Name" />

                                {errors?.userName && (
                                    <ErrorMessage>{errors?.userName}</ErrorMessage>
                                )}
                            </FormField>


                            <FormField isError={errors?.email}>
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                />

                                {errors?.email && <ErrorMessage>{errors?.email}</ErrorMessage>}
                            </FormField>

                            <FormField isError={errors?.password}>
                                <label htmlFor="password"> Password</label>
                                <Field id="password" name="password" placeholder="123" />

                                {errors?.password && (
                                    <ErrorMessage>{errors?.password}</ErrorMessage>
                                )}
                            </FormField>

                            <SubmitButton
                                disabled={
                                    errors?.userName  || errors?.email || errors?.password
                                }
                                onClick={() => dispatch(adminLogIn(isAdmin)) }

                            >
                                Log like admin
                            </SubmitButton>

                            <SubmitButton
                                disabled={
                                    errors?.userName  || errors?.email || errors?.password
                                }
                                    onClick={() => dispatch(userLogIn(isUser)) }
                            >
                                Create new user
                            </SubmitButton>

                            {/*{isShowValues && (*/}
                            {/*    // <CodeWrapper>*/}
                            {/*    //     {Object.entries(values).map(([key, value]) => (*/}
                            {/*    //         <span>{`${key}: ${value}`}</span>*/}
                            {/*    //     ))}*/}
                            {/*    // </CodeWrapper>*/}
                            {/*)}*/}
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export default EssentialForm;
