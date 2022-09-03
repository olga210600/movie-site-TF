import React, {useState} from "react";
import {Formik, Field, Form} from "formik";
import {validateSchema} from "./schema";
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
import {Link, PATHS} from '../../components/RouterNavigation'
import {createBrowserHistory} from "history";
import {useFormik} from 'formik';


const EssentialForm = () => {

    const history = createBrowserHistory();
    const currentPage = history.location.pathname;
    const isAuthorized: IMovie[] = useSelector((state: any) => state.moviesList.isAuthorized)
    const isAdmin: IMovie[] = useSelector((state: any) => state.moviesList.isAdmin)
    const dispatch = useDispatch()


    const getUser = (object) => {
        const userInfo = Object.values(object)
        if (userInfo[0] === process.env.REACT_APP_ADMIN_LOGIN && userInfo[1] === process.env.REACT_APP_ADMIN_PASSWORD) {
            dispatch(adminLogIn(isAdmin))
        } else {
            dispatch(userLogIn(isAuthorized))
        }
    }

    console.log('isAdmin',isAdmin)
    console.log('isAuthorized', isAuthorized)


    return (
        <Wrapper>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={() => {
                }}
                validationSchema={validateSchema}
                validateOnMount
            >
                {({values, errors}) => {

                    return (
                        <Form>
                            {/*<h3>With simple fields validation</h3>*/}

                            {/*<FormField isError={errors?.userName}>*/}
                            {/*    <label htmlFor="userName">First Name</label>*/}
                            {/*    <Field id="userName" name="userName" placeholder="Name"/>*/}

                            {/*    {errors?.userName && (*/}
                            {/*        <ErrorMessage>{errors?.userName}</ErrorMessage>*/}
                            {/*    )}*/}
                            {/*</FormField>*/}


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
                                <Field id="password" name="password" placeholder="123"

                                />

                                {errors?.password && (
                                    <ErrorMessage>{errors?.password}</ErrorMessage>
                                )}
                            </FormField>


                            {/*<Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}>*/}
                            {/*    Main page*/}
                            {/*</Link>*/}


                            {
                                errors?.email || errors?.password ?
                                    <div>Add Info</div> :

                                    <div>
                                        <Link isActive={currentPage === PATHS.MAIN} to={PATHS.MAIN}
                                            onClick={() => getUser(values)}
                                        >
                                            Log in
                                        </Link>
                                    </div>
                            }

                        </Form>
                    );
                }}
                    </Formik>
                    </Wrapper>
                    );
                };


export default EssentialForm;


{/*<SubmitButton*/
}
{/*    disabled={*/
}
{/*        errors?.userName || errors?.email || errors?.password*/
}
{/*    }*/
}
{/*    onClick={() => dispatch(userLogIn(isUser))}*/
}

{/*>*/
}
{/*    Create new user*/
}
{/*</SubmitButton>*/
}

{/*<SubmitButton*/
}
{/*    disabled={*/
}
{/*        errors?.userName || errors?.email || errors?.password*/
}
{/*    }*/
}
{/*    onClick={() => dispatch(adminLogIn(isAdmin))}*/
}

{/*>*/
}
{/*    Log like admin*/
}
{/*</SubmitButton>*/
}

{/* <button onClick={() => history.push("https://www.google.com/")}>
        Some route
      </button> */
}