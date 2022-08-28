import { Breadcrumbs, Link } from "@mui/material";
import ProductInfo from "./ProductInfo.jsx";
import ProductSlider from "./ProductSlider.jsx";
import { ProductCardContainer, ProductCardMainContainer } from "./styles.js";
import {MightLike} from "../../components";

const productInfo = {
  itemNo: 10101,
  imageUrls: [
    "https://res.cloudinary.com/dhk15xaeq/image/upload/v1660320784/Postil/ProductImg/Background_l7xkdy.png",
    "https://res.cloudinary.com/dhk15xaeq/image/upload/v1660476839/Postil/ProductImg/zyro-image_a9ql0h.png",
    "https://res.cloudinary.com/dhk15xaeq/image/upload/v1660477029/Postil/ProductImg/zyro-image_1_wyhurr.png",
    "https://res.cloudinary.com/dhk15xaeq/image/upload/v1660477030/Postil/ProductImg/zyro-image_2_fa0wbn.png",
  ],
  name: "SWEETNESS BED LINEN",
  currentPrice: 150,
  categories: "linen",
  quantity: 10,
  colors: ["#6FB7AC", "#6E7181", "#CDB6B4", "#F1D9CF", "#D6D6D6"],
  sizes: ["single", "double", "QUEEN", "KING"],
  info: [
    {
      title: "PRODUCT DESCRIPTION",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      title: "REVIEWS",
      content: "Sorry, review list is empty :(",
    },
  ],
};

const ProductCard = () => {
  const { itemNo, imageUrls, name, currentPrice, colors, sizes, info } =
    productInfo;

  return (
    <ProductCardMainContainer>
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
          colors={colors}
          sizes={sizes}
          info={info}
        />
      </ProductCardContainer>
      <MightLike sectionTitle="RELATED ITEMS"/>
    </ProductCardMainContainer>
  );
};

export default ProductCard;
