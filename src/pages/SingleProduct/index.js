import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Content } from "../Products/styles";
import { postProductInCart } from "../../services/cart";
import * as S from "./styles";

export default function SingleProduct() {
  const [productInfo, setProductInfo] = useState({});
  const history = useHistory();
  const id = useParams().product_id;
  useEffect(async () => {
    const result = await axios.get(
      "https://projeto-15-boom-store.herokuapp.com/singleProduct/" + id
    );
    if (result.status === 201) {
      setProductInfo(result.data[0]);
    }
  }, []);

  async function addToCart() {
    const userId = localStorage.getItem("userID");
    const token = localStorage.getItem("token");
    if (token) {
      const APIresponse = await postProductInCart({
        userId,
        productId: id,
        token,
      });
      if (APIresponse.status === 200) {
        alert("Produto adicionado ao carrinho!");
      }
    } else {
      alert("Por favor, faça login antes");
      history.push("/login");
    }
  }

  return (
    <Content>
      <S.SingleProductWrapper>
        {!productInfo ? (
          <h1>Ops, produto não encontrado</h1>
        ) : (
          <>
            <h1>{productInfo.name}</h1>
            <img src={productInfo.img}></img>
            <S.PriceInfo>
              <h3>R$ {productInfo.price}</h3>
              <S.AddCart onClick={addToCart}>Adicionar ao Carrinho</S.AddCart>
            </S.PriceInfo>
          </>
        )}
      </S.SingleProductWrapper>
    </Content>
  );
}
