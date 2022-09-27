import {
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
import { CustomBox, CustomImgBox } from "./styles";
import { data } from "./data";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const blogItems = data.map(({ id, img, category, title, subtitle, btn }) => (
    <Grid item xs={12} lg={6} key={id}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap="20px"
        sx={{ backgroundColor: "#F1F0EF" }}
      >
        <CustomImgBox component="img" src={img} sx={{ height: "500px" }} />
        <Stack justifyContent="space-around">
          <Typography variant="h3" fontWeight={600} mb="20px">
            {category}
          </Typography>
          <Typography
            variant="h2"
            mb="20px"
            sx={{ lineHeight: "40px", letterSpacing: 2.5 }}
          >
            {title}
          </Typography>
          <Typography variant="body" mb="20px">
            {subtitle}
          </Typography>
          <Button
            sx={{ fontSize: "20px", mb: "20px" }}
            endIcon={<ArrowRightAlt color="primary" fontSize="small" />}
          >
            {btn}
          </Button>
        </Stack>
      </Stack>
    </Grid>
  ));

  return (
    <>
      <Container>
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
            to="/blog"
          >
            Blog
          </Link>
        </Breadcrumbs>
      </Container>
      <CustomBox>
        <Container>
          <Typography
            variant="h2"
            sx={(theme) => ({
              width: "80%",
              m: "0 auto",
              textAlign: "center",
              [theme.breakpoints.down("sm")]: {
                lineHeight: "30px",
                fontSize: "20px",
                width: "95%",
              },
            })}
          >
            Blog from design inspiration and healthy lifestyle tips to stories
            of sustainability and environmental impact.
          </Typography>
        </Container>
      </CustomBox>
      <Container>
        <Grid container spacing={8} my="20px">
          {blogItems}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
