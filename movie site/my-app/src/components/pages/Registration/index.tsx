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

const EssentialForm = () => {
    // const [isShowValues, setIsShowValues] = useState(false);

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
                                    errors?.userName  || errors?.email
                                }
                                // onClick={() => setIsShowValues((prevState) => !prevState)}
                            >
                                Submit
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
