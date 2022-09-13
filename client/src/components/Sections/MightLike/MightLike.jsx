import { CardContent, CardMedia, Link } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
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

  const shuffledProducts = useMemo(
    () => products.sort(() => 0.5 - Math.random()),
    [products]
  );
  const productsToShow = shuffledProducts.slice(0, 6);

  useEffect(() => {
    if (category) {
      fetchData(`/products/filter?categories=${category}`).then((data) =>
        setProducts(data.products.filter((product) => product.itemNo !== id))
      );
    } else {
      fetchData("/products").then((data) => setProducts(data));
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
          {productsToShow.length > 0 && (
            <>
              {productsToShow.map(
                ({ name, imageUrls, currentPrice, itemNo }) => (
                  <Link href={`/catalog/${itemNo}`} key={itemNo}>
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
