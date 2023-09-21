import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductCategory>PERFUME</ProductCategory>
      <ProductTitle>Gabrielle Essence Eau De Parfum</ProductTitle>
      <ProductDescription>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </ProductDescription>
      <Prices>
        <CurrentPrice>$149.99</CurrentPrice>
        <OldPrice>$169.99</OldPrice>
      </Prices>
      <Button />
    </ProductInfoContainer>
  );
};

export default ProductInfo;

const ProductInfoContainer = styled.div`
  margin-left: 31.5px;

  @media (max-width: 375px) {
    margin: 0px;
  }
`;

const ProductCategory = styled.div`
  color: var(--Aurometal-Saurus);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 5px;
  margin: 32px 0px 0px 0px;
`;

const ProductTitle = styled.div`
  color: var(--Gunmetal);
  width: 236px;
  font-family: Fraunces;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin: 20px 0px 0px 0px;

  @media (max-width: 375px) {
    width: 295px;
  }
`;

const ProductDescription = styled.div`
  width: 237px;
  color: var(--Aurometal-Saurus);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  margin: 24px 0px 0px 0px;

  @media (max-width: 375px) {
    width: 295px;
  }
`;

const Prices = styled.div`
  display: flex;
  align-items: center;
  margin: 29px 0px 0px 0px;
  gap: 19px;

  @media (max-width: 375px) {
    margin: 24px 0px 0px 0px;
  }
`;

const CurrentPrice = styled.div`
  color: var(--Deep-Aquamarine);
  font-family: Fraunces;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const OldPrice = styled.div`
  color: var(--Aurometal-Saurus);
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  text-decoration-line: line-through;
`;
