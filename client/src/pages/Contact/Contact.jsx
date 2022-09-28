import {
  Email,
  FacebookOutlined,
  Home,
  Instagram,
  LocalPhone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container sx={{ my: "20px" }}>
      <Breadcrumbs
        sx={(theme) => ({
          mb: "30px",
          [theme.breakpoints.down("sm")]: { mb: "15px", fontSize: "16px" },
        })}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          component={LinkRouter}
          underline="hover"
          color="inherit"
          to="/catalog?perPage=9&startPage=1"
        >
          Contact
        </Link>
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          background:
            "url(https://res.cloudinary.com/dhk15xaeq/image/upload/v1663089847/Postil/white-bedroom-ideas-hero_cizfdy.jpg)",
          width: "100%",
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [theme.breakpoints.down("md")]: { height: "300px" },
          [theme.breakpoints.down("sm")]: { height: "200px" },
        })}
      />
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: "50%",
              mt: "20px",
              mx: "20px",
              borderRight: "1px solid black",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
              my: "20px",
              borderBottom: "1px solid black",
            },
          })}
        >
          <Typography variant="h2" sx={{ textAlign: "center", mb: "20px" }}>
            Meet Us
          </Typography>
          <Stack>
            <Stack
              direction="row"
              gap="10px"
              alignItems="center"
              sx={{ mb: "15px" }}
            >
              <Email color="primary" />
              <Link href="mailto:postilmarket@gmail.com" underline="hover">
                <Typography
                  variant="h3"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      fontSize: 16,
                    },
                  })}
                >
                  postilmarket@gmail.com
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap="10px"
              sx={{ mb: "15px" }}
            >
              <Home color="primary" />
              <Typography
                variant="h3"
                sx={(theme) => ({
                  lineHeight: 1.2,
                  [theme.breakpoints.down("md")]: {
                    fontSize: 16,
                  },
                })}
              >
                Studio M, 4th Floor8 Lower Manchester street, M1 5QF
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap="10px"
              sx={{ mb: "15px" }}
            >
              <LocalPhone color="primary" />
              <Link href="tel:+38 067 218 2153" underline="hover">
                <Typography
                  variant="h3"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      fontSize: 16,
                    },
                  })}
                >
                  +38 067 218 2153
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: "50%",
              mt: "20px",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <Typography variant="h2" sx={{ textAlign: "center", mb: "20px" }}>
            Follow Us
          </Typography>
          <Stack
            direction="row"
            gap="50px"
            alignItems="center"
            justifyContent="center"
            sx={{ mb: "10px" }}
          >
            <IconButton
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookOutlined href="https://facebook.com" color="primary" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com"
            >
              <Twitter color="primary" />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
            >
              <Instagram color="primary" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contact;
