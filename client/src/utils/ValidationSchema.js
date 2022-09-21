import { object, string, ref, addMethod } from "yup";

addMethod(string, "strongPassword", strongPasswordMethod);

function strongPasswordMethod() {
  return this.test("strongPasswordTest", function (value) {
    const { path, createError } = this;
    switch (Boolean(value)) {
      case !/^(?=.*[a-z])/.test(value):
        return createError({
          path,
          message: "Password must include lowercase letter",
        });
      case !/^(?=.*[A-Z])/.test(value):
        return createError({
          path,
          message: "Password must include uppercase letter",
        });
      case !/^(?=.*[0-9])/.test(value):
        return createError({ path, message: "Password must include digit" });
      default:
        return true;
    }
  });
}

export const validationSignUpForm = object({
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
    .min(3, "Login is too short.")
    .max(10, "Login is too Long.")
    .required("Login is Required")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  email: string().email("Invalid Email").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must contain 8 or more characters")
    .strongPassword(),
  confirmPassword: string()
    .required("Password confirmation is required")
    .oneOf([ref("password"), null], "Passwords must match"),
});

export const validationLogInForm = object({
  email: string().required("Email or Login is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must contain 8 or more characters"),
});

export const validationSubscribeForm = object({
  email: string().email("Invalid Email").required("Email is required"),
});

export const validationChangePassword = object({
  currentPassword: string()
    .required("Password is required")
    .min(8, "Password must contain 8 or more characters")
    .strongPassword(),
  newPassword: string()
    .required("Password is required")
    .min(8, "Password must contain 8 or more characters")
    .strongPassword(),
  confirmNewPassword: string()
    .required("Password confirmation is required")
    .oneOf([ref("newPassword"), null], "Passwords must match"),
});

export const validationEditPersonalData = object({
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
    .min(3, "Login is too short.")
    .max(10, "Login is too Long.")
    .required("Login is Required")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  email: string().email("Invalid Email").required("Email is required"),
  gender: string()
    .min(3, "Login is too short.")
    .max(10, "Login is too Long.")
    .matches(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/, "Not a valid. Only characters"),
  phone: string().matches(
    /((\+38)?\(?\d{3}\)?[\s/.-]?(\d{7}|\d{3}[\s/.-]\d{2}[\s/.-]\d{2}|\d{3}-\d{4}))/,
    "Phone is not valid"
  ),
});