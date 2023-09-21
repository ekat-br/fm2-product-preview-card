import styled from "styled-components";
import productImage from "../images/image-product-desktop.jpg";

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
  background: url(${productImage}) lightgray 0px 0px / 100% 100% no-repeat;
`;
