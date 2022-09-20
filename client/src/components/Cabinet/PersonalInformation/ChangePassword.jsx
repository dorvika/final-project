import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  //   DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Preloader } from "../../../pages/Categories";
import { putData } from "../../../utils/api";
import { validationChangePassword } from "../../../utils/ValidationSchema";

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    putData("/customers/password", {
      password: values.currentPassword,
      newPassword: values.newPassword,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => actions.setSubmitting(false));
    console.log(values);
  };

  return (
    <>
      <Button
        marginTop="35px"
        variant="text"
        sx={{ mt: "40px", mb: "70px" }}
        onClick={handleClickOpen}
      >
        Change Password
      </Button>

      <Dialog
        open={open}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="changePassword-dialog-title"
        aria-describedby="changePassword-dialog-description"
      >
        <DialogTitle id="changePassword-dialog-title">
          <Typography variant="h4" color="primary.main">
            Change Password
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmNewPassword: "",
            }}
            validationSchema={validationChangePassword}
            validateOnChange
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form id="changePassword">
                <Stack>
                  <FormControl
                    error={
                      props.touched.currentPassword &&
                      Boolean(props.errors.currentPassword)
                    }
                  >
                    <Input
                      aria-describedby="currentPassword"
                      type={showPassword ? "text" : "password"}
                      size="small"
                      variant="standard"
                      id="currentPassword"
                      name="currentPassword"
                      placeholder="Password"
                      value={props.values.currentPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.touched.currentPassword &&
                        Boolean(props.errors.currentPassword)
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            data-password-id="passwordId"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? (
                              <VisibilityOff size="small" />
                            ) : (
                              <Visibility size="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {props.touched.currentPassword &&
                      Boolean(props.errors.currentPassword) && (
                        <FormHelperText sx={{ ml: "0" }} id="password">
                          {props.touched.currentPassword &&
                            props.errors.currentPassword}
                        </FormHelperText>
                      )}
                  </FormControl>
                  <FormControl
                    error={
                      props.touched.newPassword &&
                      Boolean(props.errors.newPassword)
                    }
                  >
                    <Input
                      type={showPassword ? "text" : "password"}
                      size="small"
                      variant="standard"
                      id="newPassword"
                      name="newPassword"
                      placeholder="New Password"
                      value={props.values.newPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      aria-describedby="newPassword"
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
                    {props.touched.newPassword &&
                      Boolean(props.errors.newPassword) && (
                        <FormHelperText sx={{ ml: "0" }} id="password">
                          {props.touched.newPassword &&
                            props.errors.newPassword}
                        </FormHelperText>
                      )}
                  </FormControl>
                  <FormControl
                    error={
                      props.touched.confirmNewPassword &&
                      Boolean(props.errors.confirmNewPassword)
                    }
                  >
                    <Input
                      type={showPassword ? "text" : "password"}
                      size="small"
                      variant="standard"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      placeholder="Confirm New Password"
                      value={props.values.confirmNewPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      aria-describedby="confirmNewPassword"
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
                    {props.touched.confirmNewPassword &&
                      Boolean(props.errors.confirmNewPassword) && (
                        <FormHelperText sx={{ ml: "0" }} id="password">
                          {props.touched.confirmNewPassword &&
                            props.errors.confirmNewPassword}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Stack>
                {props.isSubmitting && (
                  <Box marginTop="30px" marginBottom="15px">
                    <Preloader />
                  </Box>
                )}
                <Stack sx={{ mt: "40px", mb: "20px" }} direction="row">
                  <Button
                    variant="contained"
                    disabled={props.isSubmitting}
                    type="submit"
                    sx={{ p: "5px 30px", mr: "30px" }}
                  >
                    Change
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{ p: "5px 30px" }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ChangePassword;
