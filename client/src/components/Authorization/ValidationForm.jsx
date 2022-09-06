import { object, string } from "yup";

export const validationForm = object({
  firstName: string()
    .min(2, "First Name is too short.")
    .max(20, "First Name is too Long.")
    .required("First Name is Required")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  lastName: string()
    .min(2, "Last Name is too short.")
    .max(20, "Last Name is too Long.")
    .required("Last Name is Required")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  login: string()
    .min(2, "Login is too short.")
    .max(20, "Login is too Long.")
    .required("Login is Required")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  email: string().email("Invalid Email").required("Email is required"),
});
