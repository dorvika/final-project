import { Divider, Stack, Switch, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchData, putData } from "../../utils/api";

const Subscriptions = () => {
  //   const [isSubscribed, setIsSubscribed] = useState("");
  const { email } = useSelector((state) => state.loggedIn.userData);
  const [isLoading, setIsloading] = useState(false);

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
    setIsloading(true);
    fetchData(`/subscribers/${email}`).then((response) => {
      setChecked(response.enabled);
      setIsloading(false);
    });
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: { fontSize: "22px" },
        })}
      >
        Subscriptions
      </Typography>
      <Divider />

      <Typography variant="h3" sx={{ mt: "25px" }}>
        Information about promo and discounts
      </Typography>
      <Typography
        variant="subtitle2"
        fontSize="16px"
        margin="20px"
        maxWidth="900px"
        lineHeight="25px"
      >
        From time to time we hold promotions with discounts, sweepstakes,
        promotional codes and other tools that can help you save on purchases,
        pick up a gift for yourself or your loved ones. We will definitely
        inform you about such campaigns, and you will be able to buy on Postil
        at the best prices.
      </Typography>
      <Typography variant="h3" sx={{ mt: "25px" }}>
        Personal discounts and offers
      </Typography>
      <Typography
        variant="subtitle2"
        fontSize="16px"
        margin="20px"
        maxWidth="900px"
        lineHeight="25px"
      >
        We&#039;ll let you know if we have a discount on an item you&#039;ve
        been interested in, an item you&#039;ve added to your wishlist, or an
        item our recommendation system has found.
      </Typography>

      <Divider />

      <Typography variant="h3" sx={{ mt: "25px" }}>
        Your subscription
      </Typography>
      <Stack direction="row" spacing={5} alignItems="center" margin="20px">
        <Typography>Off</Typography>
        <Switch
          disabled={isLoading ? true : false}
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography>On</Typography>
      </Stack>
    </>
  );
};

export default Subscriptions;
