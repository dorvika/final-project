import {
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  DialogActions,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";
import ConfirmationPromo from "./ConfirmationPromo.jsx";
import { validationForm } from "./ValidationForm.jsx";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleSubmit = (values) => {
    setSignUp(values);
    handleClose();
    console.log("handleSubmit", signUp);
  };

  return (
    <>
      <Formik
        initialValues={signUp}
        validationSchema={validationForm}
        validateOnChange
        validateOnBlur
        onSubmit={(values) => {
          // setSignUp({ values });
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
              <Input
                hiddenLabel
                type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="password"
                name="password"
                placeholder="Password"
                value={props.values.password}
                onChange={props.handleChange}
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
              <Input
                hiddenLabel
                type={showPassword ? "text" : "password"}
                size="small"
                variant="standard"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={props.values.confirmPassword}
                onChange={props.handleChange}
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
                // onClick={handleSubmit}
                sx={{ p: "15px 94px", mb: "30px" }}
              >
                Sign Up
              </Button>
              <Stack direction="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://google.com"
                >
                  <Google color="primary" sx={{ marginRight: "30px" }} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <Facebook color="primary" />
                </a>
              </Stack>
            </DialogActions>
            {/* <ConfirmationPromo />
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                // onClick={() => {}}
                sx={{ p: "15px 94px", mb: "30px" }}
              >
                Sign Up
              </Button>
              <Stack direction="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://google.com"
                >
                  <Google color="primary" sx={{ marginRight: "30px" }} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <Facebook color="primary" />
                </a>
              </Stack>
            </DialogActions> */}
          </Form>
        )}
      </Formik>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
      >
        <Input
          onChange={handleChange}
          id="name"
          value={signUp.firstName}
          placeholder="Name"
        />
        <Input
          onChange={handleChange}
          id="email"
          value={signUp.email}
          placeholder="Email"
        />
        <Input id="password" value={signUp.password} placeholder="Password" />
        <Input id="confirm" value="" placeholder="Confirm Password" />
      </Box> */}
      {/* <ConfirmationPromo />
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{ p: "15px 94px", mb: "30px" }}
        >
          Sign Up
        </Button>
        <Stack direction="row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://google.com"
          >
            <Google color="primary" sx={{ marginRight: "30px" }} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com"
          >
            <Facebook color="primary" />
          </a>
        </Stack>
      </DialogActions> */}
    </>
  );
};

export default SignUp;
