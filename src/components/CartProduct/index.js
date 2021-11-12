import React from "react";
import styled from "styled-components";
export default function CartProduct(props) {
  const { img, name, price } = props;
  return (
    <CartProductWrapper>
      <ProductImage src={img} />
      <ProductName>{name}</ProductName>
      <ProductPrice>
        R$ {price.toFixed(2).toString().replace(".", ",")}
      </ProductPrice>
    </CartProductWrapper>
  );
}

const CartProductWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  background-color: white;
  padding: 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ProductImage = styled.div`
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  width: 300px;
  height: 150px;
  margin: 10px;
`;

const ProductName = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const ProductPrice = styled.div`
  color: #11e0ac;
  font-size: 25px;
  font-weight: bold;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
