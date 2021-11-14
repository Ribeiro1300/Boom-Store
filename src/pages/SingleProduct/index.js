import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Content } from "../Products/styles";
import * as S from "./styles";

export default function SingleProduct() {
  const [productInfo, setProductInfo] = useState({});
  const id = useParams().product_id;
  useEffect(async () => {
    try {
      const result = await axios.get(
        "http://localhost:4000/singleProduct/" + id
      );
      if (result.status === 201) {
        setProductInfo(result.data[0]);
      }
    } catch (error) {
      alert("Algo deu errado, tente recarregar a página");
    }
  }, []);
  return (
    <Content>
      <S.SingleProductWrapper>
        <h1>{productInfo.name}</h1>
        <img src={productInfo.img}></img>
        <S.PriceInfo>{productInfo.price.toFixed(2)}</S.PriceInfo>
      </S.SingleProductWrapper>
      <S.Description></S.Description>
    </Content>
  );
}
