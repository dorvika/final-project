import {
  Avatar,
  Breadcrumbs,
  Container,
  Link,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { data } from "./data";

const Reviews = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const reviewsItems = data.map(({ id, name, rate, comment, date }) => (
    <Paper variant="outlined" key={id}>
      <Stack
        p="10px"
        height="100%"
        sx={{ width: { lg: "380px", md: "300px" } }}
      >
        <Stack direction="row" gap="10px" alignItems="center" mb="10px">
          <Avatar {...stringAvatar(name)} />
          <Typography
            fontWeight="600"
            textTransform="uppercase"
            color="primary"
          >
            {name}
          </Typography>
        </Stack>
        <Rating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.5}
          readOnly
          size="large"
          sx={{ mb: "10px" }}
        />
        <Typography color="primary" mb="10px">
          {comment}
        </Typography>
        <Typography sx={{ mt: "auto" }}>
          <strong>Date of experience:</strong> {date}
        </Typography>
      </Stack>
    </Paper>
  ));

  return (
    <Container sx={{ mb: "20px" }}>
      <Breadcrumbs
        sx={(theme) => ({
          mb: "30px",
          [theme.breakpoints.down("sm")]: { mb: "15px", fontSize: "16px" },
        })}
      >
        <Link component={LinkRouter} underline="hover" color="inherit" to="/">
          Home
        </Link>
        <Link
          component={LinkRouter}
          underline="hover"
          color="inherit"
          to="/reviews"
        >
          Reviews
        </Link>
      </Breadcrumbs>
      <Typography variant="h2" textAlign="center" mb="15px" lineHeight="40px">
        Postil Bedding works for you and your reviews are the best proof that we
        are on the right way!
      </Typography>
      <Stack direction="row" gap="20px" flexWrap="wrap" justifyContent="center">
        {reviewsItems}
      </Stack>
    </Container>
  );
};

export default Reviews;
