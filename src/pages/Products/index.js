import * as S from "./styles";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(async () => {
    const result = await axios.get(
      "https://projeto-15-boom-store.herokuapp.com/products"
    );
    if (result.status === 201) {
      setAllProducts(result.data);
    }
  }, []);
  const [filter, setFilter] = useState("");
  const newProducts = allProducts.filter((info) => {
    if (
      info.category.toUpperCase().includes(filter.toUpperCase()) ||
      info.name.toUpperCase().includes(filter.toUpperCase())
    ) {
      return true;
    }
  });

  function changeFilter(value) {
    setFilter(value);
  }
  return (
    <S.Content>
      <S.SearchItems>
        <input
          onChange={(info) => {
            changeFilter(info.target.value);
          }}
          value={filter}
          placeholder="Pesquisar"
        ></input>
      </S.SearchItems>
      <S.Categories>
        <div
          onClick={() => {
            setFilter("");
          }}
        >
          Todas as categorias
        </div>
        {newProducts.map((info) => (
          <div
            onClick={() => {
              changeFilter(info.category);
            }}
            key={info.id}
          >
            {info.category}
          </div>
        ))}
      </S.Categories>
      <S.ProductsWrapper>
        {newProducts != [] ? (
          newProducts.map((info) => (
            <RenderProducts key={info.id} info={info} />
          ))
        ) : (
          <div>Nenhum produto encontrado</div>
        )}
      </S.ProductsWrapper>
    </S.Content>
  );
}

function RenderProducts(info) {
  return (
    <Link to={"/products/" + info.info.id}>
      <S.Product>
        <h1>{info.info.name}</h1>
        <h3>R$ {info.info.price.toFixed(2)}</h3>
        <img src={info.info.img}></img>
      </S.Product>
    </Link>
  );
}
