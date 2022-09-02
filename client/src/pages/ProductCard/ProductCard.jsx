import { Breadcrumbs, Link } from "@mui/material";
import ProductInfo from "./ProductInfo.jsx";
import ProductSlider from "./ProductSlider.jsx";
import { ProductCardContainer, ProductCardMainContainer } from "./styles.js";
import { MightLike } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api.js";

const ProductCard = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState({});

  const { itemNo, imageUrls, name, currentPrice, color, size, description } =
    productData;

  useEffect(() => {
    fetchData(`products/${id}`).then((data) => setProductData(data));
  }, []);

  return (
    <ProductCardMainContainer>
      {Object.values(productData).length > 0 && (
        <>
          <Breadcrumbs sx={{ mb: "30px" }}>
            <Link underline="hover" color="inherit" href="/">
              Shop
            </Link>
            <Link underline="hover" color="inherit" href="/categories">
              Catalog
            </Link>
            {/* Переписати потім на актуальний шлях! */}
            <Link underline="hover" color="inherit" href="/categories">
              Bed Linen
            </Link>
            {/* Переписати потім на актуальний шлях! */}
            <Link underline="hover" color="inherit" href="/categories">
              Sweetness Collection
            </Link>
          </Breadcrumbs>
          <ProductCardContainer>
            <ProductSlider imageUrls={imageUrls} />
            <ProductInfo
              id={itemNo}
              name={name}
              currentPrice={currentPrice}
              color={color}
              size={size}
              description={description}
            />
          </ProductCardContainer>
          <MightLike sectionTitle="RELATED ITEMS" />
        </>
      )}
    </ProductCardMainContainer>
  );
};

export default ProductCard;
