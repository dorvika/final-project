import { object, string, ref, addMethod, number } from "yup";

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

export const validationSchemaShipping = object({
  firstname: string().required("Name is required").matches(
      /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/,
      'Not a valid. Only characters'
    ),
  lastname: string().required("Last name is required").matches(
      /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/,
      'Not a valid. Only characters'
    ),
  address1: string().required("Address is required"),
  address2: string().min(10),
  country: string().required("Country is required"),
  city: string().required("City is required").matches(
      /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/,
      'Not a valid. Only characters'
    ),
  email: string().email("Invalid Email").required("Email is required"),
  phone: string().matches(/((\+38)?\(?\d{3}\)?[\s/.-]?(\d{7}|\d{3}[\s/.-]\d{2}[\s/.-]\d{2}|\d{3}-\d{4}))/, "Phone is not valid")
                  .required("Phone is required"),
                 
  delivery: string().required(),
});

export const validationSchemaPayment = object({
  paymentmethod: string().required(),
  cardnumber: number().when("paymentmethod", {
      is: "creditcard",
      then: number().test('cardnumber', 'required', (val) => { if(val) return val.toString().length === 16; })
  }),
  
  mmyy: string().when("paymentmethod", {
      is: "creditcard",
      then: string().max(5, 'Not a valid')
      .matches(
        /([0-9]{2})\/([0-9]{2})/,
        'Not a valid'
      )
      .test(
        'test-credit-card-expiration-date',
        'Not a valid',
        expirationDate => {
          if (!expirationDate) {
            return false
          }
    
          const today = new Date()
          const monthToday = today.getMonth() + 1
          const yearToday = today
            .getFullYear()
            .toString()
            .substr(-2)
    
          const [expMonth, expYear] = expirationDate.split('/')
    
          if (Number(expYear) < Number(yearToday)) {
            return false
          } else if (
            Number(expMonth) < monthToday &&
            Number(expYear) <= Number(yearToday)
          ) {
            return false
          }
    
          return true
        }
      )
      .required('required')
  }),
  cvv: number().when("paymentmethod", {
      is: "creditcard",
      then: number().test('cvv', 'required', (val) => { if(val) return val.toString().length === 3; })
  }),
  cardholdername: string().when("paymentmethod", {
      is: "creditcard",
      then: string().matches(
          /^[a-zA-Z ]+$/,
          'Not a valid. Only characters'
        ).required("required")
  })
})