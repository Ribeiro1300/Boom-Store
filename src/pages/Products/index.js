import { produtos } from "../../Data";
import styled from "styled-components";
import React, { useState } from "react";

export default function Products() {
  const [productsList, setProductsList] = useState(produtos);

  function changeFilter(value) {
    let filter = value;
    setProductsList(produtos.filter((info) => info.categoria == filter));
  }
  return (
    <Content>
      <Categories>
        <div
          onClick={() => {
            setProductsList(produtos);
          }}
        >
          Todas as categorias
        </div>
        {produtos.map((info) => (
          <div
            onClick={() => {
              changeFilter(info.categoria);
            }}
            key={info.id}
          >
            {info.categoria}
          </div>
        ))}
      </Categories>
      <ProductsWrapper>
        {productsList.map((info) => (
          <RenderProducts key={info.id} info={info} />
        ))}
      </ProductsWrapper>
    </Content>
  );
}

function RenderProducts(info) {
  return (
    <Product>
      <h1>{info.info.nome}</h1>
      <h3>{info.info.preco.toFixed(2)}</h3>
      <img src={info.info.img}></img>
    </Product>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  margin: 70px 0px 0px 0px;
  background-color: #f4f5f6;
`;

const Categories = styled.div`
  width: 20%;
  height: 70vh;
  margin: 30px 0px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  min-height: 100vh;
  margin: 20px 0px;
`;

const Product = styled.div`
  margin: 10px;
  padding: 10px;
  width: 25vh;
  height: 35vh;
  background-color: white;
  border-radius: 8px;

  h3 {
    color: #0e956a;
  }

  img {
    width: 90%;
  }
`;
