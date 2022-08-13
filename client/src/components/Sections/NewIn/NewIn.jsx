import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { styled } from "@mui/material/styles";
  
  const CustomTypography = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("365")]: {
      padding: 5,
    },
  }));
  const CustomCardContent = styled(CardContent)(({ theme }) => ({
    position: "absolute",
    left: 50,
    bottom: 56,
    [theme.breakpoints.down("450")]: {
      left: 10,
    },
  }));
  const CustomGridItem = styled(Grid)(({ theme }) => ({
    position: "relative",
    "&:nth-of-type(odd)": {
      paddingRight: 10,
      [theme.breakpoints.down("md")]: {
        paddingRight: 0,
      },
    },
    "&:nth-of-type(even)": {
      paddingLeft: 10,
      [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
      },
    },
  }));
  const products = [
    {
      id: 1,
      name: "Cotton Dark Blue Bed Linen",
      price: 250,
      image:
        "https://res.cloudinary.com/dipjt24ep/image/upload/v1660075542/Background_lf2ony.png",
    },
    {
      id: 2,
      name: "Phistachio French Linen",
      price: 220,
      image:
        "https://res.cloudinary.com/dipjt24ep/image/upload/v1660075552/Background-2_t7oehp.png",
    },
    {
      id: 3,
      name: "Light Pink Bed Linen",
      price: 250,
      image:
        "https://res.cloudinary.com/dipjt24ep/image/upload/v1660075559/Background-3_y3ignd.png",
    },
    {
      id: 4,
      name: "French Dark Green Linen",
      price: 270,
      image:
        "https://res.cloudinary.com/dipjt24ep/image/upload/v1660075565/Background-4_ycse32.png",
    },
  ];
  
  const GridItem = ({ link, image, title, price }) => {
    return (
      <CustomGridItem item md={6} xs={12}>
        <Link to={`/${link}`}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia component="img" height="545" image={`${image}`} alt="" />
              <CustomCardContent>
                  <CustomTypography
                  sx={{ padding: "10px 15px" }}
                  gutterBottom
                  variant="h4"
                  component="p"
                  color="secondary"
                  >
                  {title}
                  </CustomTypography>
                  <CustomTypography
                  sx={{ padding: "5px 15px" }}
                  variant="body2"
                  component="span"
                  color="secondary"
                  >
                  ${price}
                  </CustomTypography>
              </CustomCardContent>
          </Card>
        </Link>
      </CustomGridItem>
    );
  };
  
  const NewIn = () => {
    return (
      <Box
        sx={{
          pb: 80,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ 
              pb: 15,
              textAlign: "center",
              textTransform: "uppercase"
          }}
          color="primary"
        >
          New In
        </Typography>
        <Grid container sx={{ rowGap: 10 }}>
          {products
            .filter((e, count) => count < 4)
            .map((product) => {
              return (
                <GridItem
                  key={product.id}
                  link={product.id}
                  image={product.image}
                  title={product.name}
                  price={product.price}
                />
              );
            })}
        </Grid>
      </Box>
    );
  };

  export default NewIn;