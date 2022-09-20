import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Preloader } from "../../../pages/Categories";
import { putData } from "../../../utils/api";
import { validationEditPersonalData } from "../../../utils/ValidationSchema";

const EditPersonalData = () => {
  const { userData } = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [responseData, setResponseData] = useState({
    status: "",
    data: "",
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    const updatedCustomer = {
      firstName: values.firstName,
      lastName: values.lastName,
      login: values.login,
      email: values.email,
      gender: values.gender,
      telephone: values.phone,
      avatarUrl: values.avatarUrl,
    };
    putData("/customers", updatedCustomer)
      .then((response) => {
        setResponseData({ status: response.status, data: response.data });
        setTimeout(() => {
          handleClose();
          navigate("/cabinet");
        }, 3000);
      })
      .catch((error) => {
        setResponseData({ status: error.status, data: error.data });
      })
      .finally(() => actions.setSubmitting(false));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ p: "5px 50px", mt: "35px" }}
      >
        Edit
      </Button>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="changePassword-dialog-title"
        aria-describedby="changePassword-dialog-description"
        sx={{ p: "100px" }}
      >
        <DialogTitle sx={{ fontSize: "22px" }} id="changePassword-dialog-title">
          Update your personal data
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: userData.firstName,
              lastName: userData.lastName,
              gender: userData.gender,
              login: userData.login,
              email: userData.email,
              phone: userData.telephone,
              avatarUrl: userData.avatarUrl,
            }}
            validationSchema={validationEditPersonalData}
            validateOnChange
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form id="editPersonalData">
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
                    helperText={
                      props.touched.firstName && props.errors.firstName
                    }
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
                  <TextField
                    hiddenLabel
                    size="small"
                    variant="standard"
                    id="gender"
                    name="gender"
                    placeholder="gender"
                    value={props.values.gender}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.touched.gender && Boolean(props.errors.gender)}
                    helperText={props.touched.gender && props.errors.gender}
                  />
                  <TextField
                    type="phone"
                    hiddenLabel
                    size="small"
                    variant="standard"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                    value={props.values.phone}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.touched.phone && Boolean(props.errors.phone)}
                    helperText={props.touched.phone && props.errors.phone}
                  />
                  <TextField
                    hiddenLabel
                    size="small"
                    variant="standard"
                    id="avatar"
                    name="avatarUrl"
                    placeholder="Link for photo"
                    value={props.values.avatarUrl}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </Stack>
                {props.isSubmitting && (
                  <Box marginTop="30px" marginBottom="15px">
                    <Preloader />
                  </Box>
                )}

                {!props.isSubmitting && responseData.status === 200 && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "green",
                      mb: "10px",
                      mt: "40px",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    You personal data has been updated
                  </Typography>
                )}

                <Stack
                  sx={{ mt: "40px", mb: "20px" }}
                  direction="row"
                  justifyContent="space-evenly"
                >
                  <Button
                    variant="contained"
                    disabled={props.isSubmitting}
                    type="submit"
                    sx={{ p: "5px 30px" }}
                  >
                    update
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{ p: "5px 30px" }}
                  >
                    cancel
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
export default EditPersonalData;
