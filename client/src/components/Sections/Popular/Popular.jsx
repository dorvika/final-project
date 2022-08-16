import {Box, Card, CardMedia, Grid, Typography, useMediaQuery} from "@mui/material";
import {popularArray} from "./dataPopular";

const Popular = () => {
  const matches = useMediaQuery('(max-width: 899px)');

  return (
    <Box
      sx={{
        pb: 40
      }}
    >
    <Typography
      variant="h2"
      component="h2"
      sx={{
        pb: 15,
        textAlign: "center",
        textTransform: "uppercase",
      }}
      color="primary"
    >
      Popular
    </Typography>
      <Grid container spacing={10} sx={{ flexGrow: 1 }}>
        {popularArray
          .map(({ id, urlImage, xs }) => (
            <Grid item key={id} xs={ matches ? 12 : xs }>
              <Card sx={{ maxWidth: "100%"}}>
                <CardMedia component="img" height="340" image={urlImage} alt="popular-img"/>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
};

export default Popular;