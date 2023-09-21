import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";

const ProductCard = () => {
  return (
    <CardContainer>
      <StyledProductCard>
        <ProductImage />
        <ProductInfo />
      </StyledProductCard>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledProductCard = styled.div`
  display: flex;
  width: 600px;
  height: 450px;
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 28px 16px;
  }
`;
