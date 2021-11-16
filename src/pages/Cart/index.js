import { PageWrapper, PageTitle } from "../../components/sharedStyles";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartProduct from "../../components/CartProduct";
import { IoCartOutline } from "react-icons/io5";
import { getCart } from "../../services/cart";
import { useHistory } from "react-router";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  let history = useHistory();

  useEffect(fetchCartProducts, []);

  async function fetchCartProducts() {
    if (!token) {
      alert("logue-se para ver o carrinho!");
      history.push("/login");
      return;
    }
    try {
      const APIresponse = await getCart({ token });
      setProducts([...APIresponse.data.products]);
    } catch (err) {
      alert("Houve um erro ao carregar o carrinho");
      history.push("/");
    }
  }

  function getTotalPrice() {
    let priceSum = 0;
    for (let p of products) {
      priceSum += parseFloat(p.price);
    }
    return priceSum.toFixed(2);
  }

  return (
    <PageWrapper>
      <PageTitle style={{ width: "80%", paddingLeft: "0px" }}>
        <IoCartOutline style={{ marginRight: "10px" }} />
        Carrinho
      </PageTitle>
      <ProductsContainer>
        {products.length === 0 ? (
          <CartWarning>
            {"Parece que ainda não há nenhum produto no seu carrinho..."}
          </CartWarning>
        ) : (
          products.map((product, index) => (
            <CartProduct
              key={index}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))
        )}
      </ProductsContainer>
      {products === [] ? (
        ""
      ) : (
        <CheckoutPreviewContainer>
          <CheckoutPreview>
            <CheckoutMessage>
              Valor dos Produtos:{" "}
              <CheckoutPrice>
                R$ {getTotalPrice().replace(".", ",")}{" "}
              </CheckoutPrice>
            </CheckoutMessage>
            <CheckoutButton>Checkout</CheckoutButton>
          </CheckoutPreview>
        </CheckoutPreviewContainer>
      )}
    </PageWrapper>
  );
}

const ProductsContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 80%;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const CartWarning = styled.div``;

const CheckoutPreviewContainer = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 150px;
`;

const CheckoutPreview = styled.div`
  background-color: white;
  width: 500px;
  height: 100%;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  align-items: center;
`;

const CheckoutMessage = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const CheckoutPrice = styled.span`
  font-size: 26px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;

const CheckoutButton = styled.div`
  background-color: #11e0ac;
  height: 30%;
  cursor: pointer;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  font-family: "Poppins", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 20px;
  &:hover {
    opacity: 0.6;
  }
`;
