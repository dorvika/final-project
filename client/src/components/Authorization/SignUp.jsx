import {
  Facebook,
  Google,
  // Visibility,
  // VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  DialogActions,
  // FormControl,
  // FormHelperText,
  IconButton,
  // Input,
  // InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
// import { forwardRef } from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { closeModal } from "../../store/Modal/actions";
import { postData } from "../../utils/api";
import ConfirmationPromo from "./ConfirmationPromo.jsx";
import { validationForm } from "./ValidationForm.jsx";

const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false);

  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const dispatch = useDispatch();

  // const handleClose = () => {
  //   dispatch(closeModal());
  // };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleSubmit = (values) => {
    // setSignUp({
    //   firstName: values.firstName,
    //   lastName: values.lastName,
    //   login: values.login,
    //   email: values.email,
    //   password: values.password,
    // });
    // handleClose();
    // console.log("handleSubmit", signUp);
    // console.log(signUp);
    setSignUp(values);
    postData("/customers", {
      firstName: values.firstName,
      lastName: values.lastName,
      login: values.login,
      email: values.email,
      password: values.password,
    })
      .then((savedcustomer) => {
        console.log({ savedcustomer });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    console.log("signUp after return", signUp);
  };
  return (
    <>
      <Formik
        initialValues={signUp}
        validationSchema={validationForm}
        validateOnChange
        validateOnBlur
        onSubmit={(values) => {
          // setSignUp(values);
          // console.log(values);
          // console.log(signUp);

          // handleClose();
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form id="signUp">
            <Stack direction="column">
              <TextField
                hiddenLabel
                size="small"
                variant="standard"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={props.values.firstName}
                onChange={props.handleChange}
                error={
                  props.touched.firstName && Boolean(props.errors.firstName)
                }
                helperText={props.touched.firstName && props.errors.firstName}
              />

              <TextField
                hiddenLabel
                size="small"
                variant="standard"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={props.values.lastName}
                onChange={props.handleChange}
                error={props.touched.lastName && Boolean(props.errors.lastName)}
                helperText={props.touched.lastName && props.errors.lastName}
              />
              <TextField
                hiddenLabel
                size="small"
                variant="standard"
                id="login"
                name="login"
                placeholder="Login"
                value={props.values.login}
                onChange={props.handleChange}
                error={props.touched.login && Boolean(props.errors.login)}
                helperText={props.touched.login && props.errors.login}
              />
              <TextField
                type="email"
                hiddenLabel
                size="small"
                variant="standard"
                id="email"
                name="email"
                placeholder="Email"
                value={props.values.email}
                onChange={props.handleChange}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
              <TextField
                hiddenLabel
                // type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="password"
                name="password"
                placeholder="Password"
                value={props.values.password}
                onChange={props.handleChange}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
              />
              <TextField
                sx={{ position: "relative" }}
                hiddenLabel
                // type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={props.values.confirmPassword}
                onChange={props.handleChange}
                aria-describedby="confirmPassword"
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                error={
                  props.touched.confirmPassword &&
                  Boolean(props.errors.confirmPassword)
                }
                helperText={
                  props.touched.confirmPassword && props.errors.confirmPassword
                }
              />
            </Stack>
            <ConfirmationPromo />
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                onClick={() => handleSubmit(props.values)}
                sx={{ p: "15px 94px", mb: "30px" }}
              >
                Sign Up
              </Button>
              <Stack direction="row">
                <IconButton
                  sx={{ marginRight: "30px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://google.com"
                >
                  <Google color="primary" />
                </IconButton>
                <IconButton
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <Facebook color="primary" />
                </IconButton>
              </Stack>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </>
  );
};;;;;;;

export default SignUp;
