import { Container, Stack, Typography, Link } from "@mui/material";

const Error = () => {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={(theme) => ({
          minHeight: "500px",
          [theme.breakpoints.down("sm")]: { minHeight: "300px" },
        })}
      >
        <Typography
          variant="h2"
          sx={(theme) => ({
            textAlign: "center",
            [theme.breakpoints.down("xs")]: { fontSize: 20 },
          })}
        >
          Oops...Page not found :({" "}
        </Typography>
        <Typography
          variant="h2"
          sx={(theme) => ({
            [theme.breakpoints.down("xs")]: { fontSize: 20 },
          })}
        >
          Please, go <Link href="/">Home</Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Error;
