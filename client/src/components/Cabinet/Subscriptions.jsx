import { Box, Divider, Stack, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchData, putData } from "../../utils/api";

const Subscriptions = () => {
  const { email } = useSelector((state) => state.loggedIn.userData);
  const [isLoading, setIsLoading] = useState(false);

  const [checked, setChecked] = useState(false);

  const unsubscribe = {
    email: email,
    enabled: false,
    letterSubject: "Unsubscribe",
    letterHtml: "<p>We will miss you. You are unsubscribed.</p>",
  };

  const subscribe = {
    email: email,
    enabled: true,
    letterSubject: "Welcome Back",
    letterHtml: "<p>We are glad to see you.</p>",
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      putData(`subscribers/email/${email}`, subscribe)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      putData(`subscribers/email/${email}`, unsubscribe)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/subscribers/${email}`)
      .then((response) => {
        setChecked(response.enabled);
        setIsLoading(false);
      })
      .catch(() => {
        setChecked(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("sm")]: { maxWidth: "900px" },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "400px",
            minWidth: "250px",
          },
        })}
      >
        <Typography
          variant="h2"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: { fontSize: "28px" },
            [theme.breakpoints.down("sm")]: { fontSize: "22px" },
          })}
        >
          Subscriptions
        </Typography>
        <Divider />

        <Typography
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: { mt: "25px" },
            [theme.breakpoints.down("sm")]: { mt: "15px" },
          })}
        >
          Information about promo and discounts
        </Typography>
        <Typography
          variant="subtitle2"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              fontSize: "16px",
              margin: "20px",
              maxWidth: "900px",
              lineHeight: "25px",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              margin: "10px",
              maxWidth: "300px",
              lineHeight: "20px",
            },
          })}
        >
          From time to time we hold promotions with discounts, sweepstakes,
          promotional codes and other tools that can help you save on purchases,
          pick up a gift for yourself or your loved ones. We will definitely
          inform you about such campaigns, and you will be able to buy on Postil
          at the best prices.
        </Typography>
        <Typography
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: { mt: "25px" },
            [theme.breakpoints.down("sm")]: { mt: "15px" },
          })}
        >
          Personal discounts and offers
        </Typography>
        <Typography
          variant="subtitle2"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              fontSize: "16px",
              margin: "20px",
              maxWidth: "900px",
              lineHeight: "25px",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              margin: "10px",
              lineHeight: "20px",
            },
          })}
        >
          We&#039;ll let you know if we have a discount on an item you&#039;ve
          been interested in, an item you&#039;ve added to your wishlist, or an
          item our recommendation system has found.
        </Typography>

        <Divider />

        <Typography
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: { mt: "25px" },
            [theme.breakpoints.down("sm")]: { mt: "15px" },
          })}
        >
          Your subscription
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          alignItems="center"
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: { margin: "20px" },
            [theme.breakpoints.down("sm")]: { margin: "10px" },
          })}
        >
          <Typography>Off</Typography>
          <Switch
            disabled={isLoading ? true : false}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography>On</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Subscriptions;
