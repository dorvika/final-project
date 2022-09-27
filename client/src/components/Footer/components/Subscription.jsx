import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { postData } from "../../../utils/api";
import { validationSubscribeForm } from "../../../utils/ValidationSchema";
import Grow from "@mui/material/Grow";

const Subscription = () => {
  const [subscriberData, setSubscriberData] = useState({
    status: "",
    data: "",
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);

    const newSubscriber = {
      email: values.email,
      letterSubject: "Postil Bedding. Thank you for subscribing us",
      letterHtml:
        "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> </style> </head> <body> <h1>Thank you for your subscription</h1> <h3>We promise we will not be obsessive and will send only intersting and relevant content</h3> <h4>will be in touch</h4> <p>sincerely yours,</p> <h4>Postil Bedding Team</h4> </body></html>",
    };
    postData("/subscribers", newSubscriber)
      .then((newSubscriber) => {
        setSubscriberData({
          status: newSubscriber.status,
          data: newSubscriber.data.subscriber,
        });
        handleClickOpen();
      })
      .catch((error) => {
        setSubscriberData({
          status: error.response.status,
          data: error.response.data,
        });
        handleClickOpen();
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSubscribeForm}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form id="subscribe">
            <TextField
              size="small"
              type="email"
              id="subscribe-field"
              name="email"
              label="E-mail"
              variant="outlined"
              value={props.values.email}
              onChange={props.handleChange}
              error={props.touched.email && Boolean(props.errors.email)}
              helperText={props.touched.email && props.errors.email}
              sx={{ fontSize: "12px" }}
            />

            <Button
              variant="contained"
              type="submit"
              disabled={props.isSubmitting}
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  p: "5px 40px",
                },
                [theme.breakpoints.down("sm")]: {
                  p: "5px 25px",
                },
              })}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        TransitionComponent={Grow}
        onClose={handleClickClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClickClose}
          severity={
            subscriberData.status === 400 && subscriberData.status !== ""
              ? "error"
              : "success"
          }
        >
          {subscriberData.status === 400 && subscriberData.status !== ""
            ? subscriberData.data.message
            : "Thank you for subscription"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Subscription;
