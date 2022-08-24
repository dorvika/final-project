import { styled } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
// import { Fragment } from "react";
import products from "./ProductsData";
import { useState } from "react";

const CustomCardContent = styled(CardContent)(() => ({
  position: "absolute",
  top: "85%",
  left: "50%",
  width: "max-content",
  transform: "translate(-50%, -50%)",
  //   [theme.breakpoints.down("450")]: {
  //     left: 10,
  //   },
}));

const HoverCardContent = styled(CardContent)(() => ({
  background: "rgba(0,0,0,0.5)",
  position: "absolute",
  top: "40px",
  left: "10px",
  width: "280px",
  height: "280px",
  //   transform: "translate(-50%, -50%)",
  // [theme.breakpoints.down("450")]: {
  //   left: 10,
  // },
}));

const CustomGridItem = styled(Grid)(() => ({
  position: "relative",
  //   "&:nth-of-type(odd)": {
  //     paddingRight: 10,
  //     [theme.breakpoints.down("md")]: {
  //       paddingRight: 0,
  //     },
  //   },
  //   "&:nth-of-type(even)": {
  //     paddingLeft: 10,
  //     [theme.breakpoints.down("md")]: {
  //       paddingLeft: 0,
  //     },
  //   },
}));

const GridItem = ({ image, title, price }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <CustomGridItem
      item
      xs={4}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Link to={`/categories/${link}`}> */}
      <Card sx={{ maxWidth: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
        <CardMedia
          component="img"
          sx={{ backgroundImage: "rgba(0,0,0,0.5)" }}
          image={`${image}`}
          alt=""
        />
        {isHover ? (
          <HoverCardContent>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                //   sx={{ padding: "4px 8px" }}
                variant="h5"
                color="secondary"
              >
                {title}
              </Typography>
              <Typography variant="h5" color="secondary">
                {price}
              </Typography>
            </Stack>
          </HoverCardContent>
        ) : (
          <CustomCardContent sx={{ backgroundColor: "primary.main" }}>
            <Typography
              sx={{ padding: "4px 8px" }}
              variant="h5"
              color="secondary"
            >
              {title}
            </Typography>
            {/* <CustomTypography
                sx={{ padding: "5px 15px" }}
                variant="body2"
                component="span"
                color="secondary"
              >
                ${price} */}
            {/* </CustomTypography> */}
          </CustomCardContent>
        )}
      </Card>
      {/* </Link> */}
    </CustomGridItem>
  );
};

const CatalogProductList = () => {
  return (
    <>
      <Grid container rowSpacing={20} columnSpacing={5}>
        {products
          .filter((e, count) => count < 18)
          .map((product) => {
            return (
              <GridItem
                key={product.id}
                link={product.id}
                image={product.img}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </Grid>
    </>
  );
};

export default CatalogProductList;
