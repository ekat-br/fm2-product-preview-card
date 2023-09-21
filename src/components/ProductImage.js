import styled from "styled-components";
import productImageDesktop from "../images/image-product-desktop.jpg";
import productImageMobile from "../images/image-product-mobile.jpg";

const ProductImage = () => {
  return (
    <>
      <StyledProductImage />
    </>
  );
};

export default ProductImage;

const StyledProductImage = styled.div`
  width: 300px;
  height: 450px;
  background: url(${productImageDesktop}) lightgray 0px 0px / 100% 100%
    no-repeat;

  @media (max-width: 375px) {
    width: 100%;
    height: 240px;
    border-radius: 10px 10px 0px 0px;
    margin-top: 0px;
    background: url(${productImageMobile}) lightgray 0px 0px / 100% 100%
      no-repeat;
  }
`;
