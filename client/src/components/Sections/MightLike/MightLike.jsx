import { CardContent, CardMedia, Link, Stack } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { debounce } from "lodash";
import { useEffect, useState, useMemo } from "react";
import Preloader from "../../../utils/Preloader.jsx";
import { fetchData } from "../../../utils/api";
import {
  CustomBox,
  CustomContent,
  CustomItem,
  CustomLeftIcon,
  CustomRightIcon,
  CustomSlider,
  CustomSliderBox,
  CustomTitle,
} from "./styles";

const MightLike = ({ sectionTitle, category, id }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const shuffledProducts = useMemo(
    () => products.sort(() => 0.5 - Math.random()),
    [products]
  );
  const productsToShow = shuffledProducts.slice(0, 6);

  const setProductsFromDB = (products) => {
    setProducts(products);
  };

  const debouncedProducts = useMemo(() => debounce(setProductsFromDB, 500), []);

  useEffect(() => {
    setIsLoading(true);
    if (category) {
      fetchData(`/products/filter?categories=${category}`).then((data) => {
        debouncedProducts(
          data.products.filter((product) => product.itemNo !== id)
        );
        setIsLoading(false);
      });
    } else {
      fetchData("/products").then((data) => {
        debouncedProducts(data);
        setIsLoading(false);
      });
    }
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 380;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 380;
  };

  return (
    <CustomBox variant="section" component="section">
      <CustomTitle component="h3">{sectionTitle}</CustomTitle>

      <CustomSliderBox>
        <CustomLeftIcon onClick={slideLeft} />

        <CustomSlider id="slider" variant="div" component="div">
          {isLoading && (
            <Stack justifyContent="center" sx={{ height: "380px" }}>
              <Preloader />
            </Stack>
          )}
          {productsToShow.length > 0 && (
            <>
              {productsToShow.map(
                ({ name, imageUrls, currentPrice, itemNo }) => (
                  <Link component={LinkRouter} to={`/catalog/${itemNo}`} key={itemNo}>
                    <CustomItem component="div">
                      <CardMedia
                        component="img"
                        height="380"
                        image={imageUrls[0]}
                        alt="might-like"
                      />
                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: "20px",
                          left: "20px",
                        }}
                      >
                        <CustomContent
                          component="p"
                          sx={{
                            marginBottom: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          {name}
                        </CustomContent>
                        <CustomContent
                          component="span"
                          sx={{
                            fontWeight: "700",
                            fontSize: "24px",
                            padding: "0 10px",
                            textShadow: "0px 4px 1px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          ${currentPrice}
                        </CustomContent>
                      </CardContent>
                    </CustomItem>
                  </Link>
                )
              )}
            </>
          )}
        </CustomSlider>
        <CustomRightIcon onClick={slideRight} />
      </CustomSliderBox>
    </CustomBox>
  );
};

export default MightLike;
