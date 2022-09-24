import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { CustomBox, CustomImgBox } from "./styles";
import { data } from "./data";

const Blog = () => {
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
      <CustomBox>
        <Typography
          variant="h2"
          textAlign="center"
          sx={(theme) => ({
            width: "80%",
            [theme.breakpoints.down("sm")]: {
              lineHeight: "30px",
              fontSize: "20px",
              width: "95%",
            },
          })}
        >
          Blog from design inspiration and healthy lifestyle tips to stories of
          sustainability and environmental impact.
        </Typography>
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
