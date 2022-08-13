import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainder: {
    rowGap: 20,
  },
  gridItem: {
    position: "relative",
    "&:nth-child(odd)": {
      paddingRight: "10px",
      [theme.breakpoints.down("md")]: {
        paddingRight: 0,
      },
    },
    "&:nth-child(even)": {
      paddingLeft: "10px",
      [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
      },
    },
  },
  cardContent: {
    position: "absolute",
    left: 50,
    bottom: 56,
    [theme.breakpoints.down("450")]: {
      left: 10,
    },
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    padding: "10px 15px",
    [theme.breakpoints.down("365")]: {
      padding: 5,
    },
  },
  price: {
    backgroundColor: theme.palette.primary.main,
    padding: "5px 15px",
    [theme.breakpoints.down("365")]: {
      padding: 5,
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

const GridItem = ({ classes, link, image, title, price }) => {
  return (
    <Grid item md={6} xs={12} className={classes.gridItem}>
      <Link to={`/products/${link}`}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            height="545"
            image={`${image}`}
            alt="green iguana"
          />
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h4"
              component="p"
              color="secondary"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              color="secondary"
              className={classes.price}
            >
              ${price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

const NewIn = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        maxWidth: "1180px",
        m: "auto",
        pb: 80,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{ pb: "30px", textAlign: "center" }}
        color="primary"
      >
        New In
      </Typography>
      <Grid container className={classes.gridContainder}>
        {products
          .filter((item, count) => count < 4)
          .map((product) => {
            return (
              <GridItem
                key={product.id}
                link={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                classes={classes}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default NewIn;
