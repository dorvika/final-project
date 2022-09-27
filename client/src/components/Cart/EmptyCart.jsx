import { Container, Button, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <Container>
        <Stack justifyContent="center">
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              lineHeight: "45px",
              m: "0 auto",
              pt: "100px",
            }}
          >
            YOUR BAG IS FEELING LONELY - ADD
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              lineHeight: "45px",
              m: "0 auto",
            }}
          >
            SOME BEAUTIFUL NEW TO IT!
          </Typography>
        </Stack>

        <Box display="flex" justifyContent="center">
          <Link
            to="/catalog?perPage=9&startPage=1"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                mt: "100px",
                mb: "82px",
                p: "15px 48px",
              }}
            >
              continue shopping
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default EmptyCart;
