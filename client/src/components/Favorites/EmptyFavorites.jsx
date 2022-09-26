import { Container, Button, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyFavorites = ({ primaryText, secondaryText }) => {
  return (
    <>
      <Container>
        <Stack justifyContent="center">
          <Typography
            variant="h2"
            textAlign="center"
            sx={(theme) => ({
              textTransform: "uppercase",
              [theme.breakpoints.up("sm")]: {
                lineHeight: "45px",
                m: "0 auto",
                pt: "100px",
              },
              [theme.breakpoints.down("sm")]: {
                lineHeight: "22px",
                m: "0 auto",
                pt: "25px",
                fontSize: "20px",
              },
            })}
          >
            {primaryText}
          </Typography>
          <Typography
            variant="h2"
            sx={(theme) => ({
              textTransform: "uppercase",
              lineHeight: "45px",
              m: "0 auto",
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "22px",
              },
            })}
          >
            {secondaryText}
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="center">
          <Link
            to="/catalog?perPage=9&startPage=1"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  mt: "100px",
                  mb: "82px",
                  p: "15px 48px",
                },
                [theme.breakpoints.down("sm")]: {
                  mt: "50px",
                  mb: "42px",
                  p: "15px 48px",
                },
              })}
            >
              continue shopping
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default EmptyFavorites;
