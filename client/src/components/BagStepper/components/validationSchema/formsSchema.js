import { object, string, number } from "yup";

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
    zip: string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits'),
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
        .required('required')
    }),
    cvv: number().when("paymentmethod", {
        is: "creditcard",
        then: number().test('cvv', 'required', (val) => { if(val) return val.toString().length === 3; })
    }),
    cardholdername: string().when("paymentmethod", {
        is: "creditcard",
        then: string().matches(
            /^[a-zA-Z]+$/,
            'Not a valid. Only characters'
          ).required("required")
    })
})