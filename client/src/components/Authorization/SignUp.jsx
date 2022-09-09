import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  Input,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
  FormControl,
  Box,
} from "@mui/material";
import { Form, Formik } from "formik";
// import { useEffect } from "react";
// import { forwardRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";
import { postData } from "../../utils/api";
import ConfirmationPromo from "./ConfirmationPromo.jsx";
import { validationForm } from "./ValidationForm.jsx";
import Preloader from "../../pages/Categories/Catalog Product List/Preloader.jsx";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUpResponse, setSignUpResponse] = useState({
    status,
    message: "",
  });
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    postData("/customers", {
      firstName: values.firstName,
      lastName: values.lastName,
      login: values.login,
      email: values.email,
      password: values.password,
    })
      .then((savedCustomer) => {
        setSignUpResponse({
          status: savedCustomer.status,
          message: savedCustomer,
        });
      })
      .catch((error) => {
        setSignUpResponse({
          status: error.response.status,
          message: error.response.data.message,
        });
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <>
      {signUpResponse === "" || signUpResponse.status !== 200 ? (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            login: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationForm}
          validateOnChange
          validateOnBlur
          onSubmit={handleSubmit}
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
                  onBlur={props.handleBlur}
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
                  onBlur={props.handleBlur}
                  error={
                    props.touched.lastName && Boolean(props.errors.lastName)
                  }
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
                  onBlur={props.handleBlur}
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
                  onBlur={props.handleBlur}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                />
                <FormControl
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                >
                  <Input
                    aria-describedby="password"
                    type={showPassword ? "text" : "password"}
                    size="small"
                    variant="standard"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={
                      props.touched.password && Boolean(props.errors.password)
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {props.touched.password && Boolean(props.errors.password) && (
                    <FormHelperText sx={{ ml: "0" }} id="password">
                      {props.touched.password && props.errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  error={
                    props.touched.confirmPassword &&
                    Boolean(props.errors.confirmPassword)
                  }
                >
                  <Input
                    type={showPassword ? "text" : "password"}
                    size="small"
                    variant="standard"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={props.values.confirmPassword}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    aria-describedby="confirmPassword"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {props.touched.confirmPassword &&
                    Boolean(props.errors.confirmPassword) && (
                      <FormHelperText sx={{ ml: "0" }} id="password">
                        {props.touched.confirmPassword &&
                          props.errors.confirmPassword}
                      </FormHelperText>
                    )}
                </FormControl>
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
                {props.isSubmitting && (
                  <Box marginTop="15px" marginBottom="15px">
                    <Preloader />
                  </Box>
                )}
                {!props.isSubmitting && signUpResponse.status === 400 && (
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "error.main", mb: "20px", fontWeight: 700 }}
                  >
                    {signUpResponse.message !== undefined
                      ? signUpResponse.message
                      : "Unknown error, update fields"}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  disabled={props.isSubmitting || !props.dirty}
                  type="submit"
                  // onClick={() => handleSubmit(props.values)}
                  sx={{ p: "15px 94px", mb: "30px" }}
                >
                  Sign Up
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ mt: "40px", mb: "40px" }}
        >
          <Typography variant="h4" sx={{ color: "primary.main", mb: "15px" }}>
            Dear,{" "}
            {signUpResponse.message.data.firstName +
              " " +
              signUpResponse.message.data.lastName}
            !
          </Typography>
          <Typography variant="h6" sx={{ mb: "10px" }}>
            Our congratulation with success registration.
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: "25px" }}>
            To enter the cabinet please use your credentials at the LOGIN tab.
          </Typography>
          <Button
            variant="contained"
            sx={{ p: "5px 40px" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      )}
    </>
  );
};;;;;;;;

export default SignUp;
