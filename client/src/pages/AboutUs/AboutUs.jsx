import { DoneSharp } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container sx={{ pb: "40px" }}>
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
          to="/aboutus"
        >
          About Us
        </Link>
      </Breadcrumbs>
      <Stack direction={{ xs: "column-reverse", md: "row" }} gap={10}>
        <Box sx={{ width: { sm: "100%", md: "50%" } }}>
          <Typography variant="h2" textAlign="center" sx={{ pb: "10px" }}>
            Welcome to Postil
          </Typography>
          <Stack direction="row" gap={5} sx={{ pb: "10px" }}>
            <DoneSharp color="primary" />
            <Typography>
              Postil delivers a great Scandinavian offer for everyone within
              sleeping and living. We are a global retail chain of stores and
              web shops, and part of the family-owned Lars Larsen Group.
            </Typography>
          </Stack>
          <Stack direction="row" gap={5} sx={{ pb: "10px" }}>
            <DoneSharp color="primary" />
            <Typography>
              Our founder, Lars Larsen, opened his first Postil store in Aarhus,
              Denmark, in 1979. Today, Postil has more than 3,000 stores in 48
              countries around the world. 27 countries are operated directly by
              Postil, while the remaining 21 countries are part of Postil
              Franchise.
            </Typography>
          </Stack>
          <Stack direction="row" gap={5} sx={{ pb: "10px" }}>
            <DoneSharp color="primary" />
            <Typography>
              With thousands of stores across the world, there is often a Postil
              nearby. This makes it quick to explore our assortment, and easy to
              bring products home. Online, we have room for even more products,
              and it is crucial for us to make it easy for customers to combine
              our great store service with our wide online assortment to give
              the best possible shopping experience.
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={(theme) => ({
            background:
              "url(https://res.cloudinary.com/dhk15xaeq/image/upload/v1663692267/Postil/Bedding_Style_Hero_Amalfi-new_lpcv5n.jpg)",
            width: { sm: "100%", md: "50%" },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            [theme.breakpoints.down("md")]: { height: "300px" },
            [theme.breakpoints.down("sm")]: { height: "200px" },
          })}
        />
      </Stack>
    </Container>
  );
};

export default AboutUs;
