import styled from "styled-components";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";

const Button = () => {
  return (
    <>
      <StyledButton>
        <ButtonContent>
          <StyledIconCart />
          Add to Cart
        </ButtonContent>
      </StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 236px;
  height: 48px;
  border-radius: 8px;
  background-color: var(--Deep-Aquamarine);
  border: none;
  color: var(--white);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 30px 0px 0px 0px;

  &:hover {
    background-color: var(--Deep-Aquamarine-Hover);
  }

  @media (max-width: 375px) {
    margin: 20px 0px 30px 0px;
    width: 295px;
  }
`;

const ButtonContent = styled.div`
  display: inline-flex;
  padding-bottom: 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 11.615px;
`;

const StyledIconCart = styled(IconCart)`
  width: 14.385px;
  height: 16px;
`;
