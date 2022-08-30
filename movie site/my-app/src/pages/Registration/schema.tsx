import * as Yup from "yup";

const validateMessages = {
    email: {
        required: "Email cannot be empty",
        valid: 'Email should be in format "user@example.com"',
    },
    // userName: {
    //     required: "First name cannot be empty",
    //     min: "First name cannot be less than 2 characters",
    //     max: "First name cannot be longer than 40 characters",
    // },
    password: {
        required: "Password cannot be empty",
        min: "Password cannot be less than 5 characters",
        max: "Password cannot be longer than 20 characters",
    },
};

export const validateSchema = Yup.object().shape({
    // userName: Yup.string()
    //     .required(validateMessages.userName.required)
    //     .min(3, validateMessages.userName.min)
    //     .max(40, validateMessages.userName.max),
    password: Yup.string()
        .required(validateMessages.password.required)
        .min(5, validateMessages.password.min)
        .max(20, validateMessages.password.max),
    email: Yup.string()
        .email(validateMessages.email.valid)
        .required(validateMessages.email.required),
});
