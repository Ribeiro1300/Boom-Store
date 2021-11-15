import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  margin: 70px 0px 0px 0px;
  background-color: #e6e6e6;
`;

export const Categories = styled.div`
  width: 20%;
  height: 70vh;
  margin: 30px 0px;

  div {
    cursor: pointer;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  min-height: 100vh;
  margin: 20px 0px;

  a {
    text-decoration: none;
    color: currentColor;
    height: 37vh;
  }
`;

export const Product = styled.div`
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

export const SearchItems = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: 0.5px solid black;
    border-radius: 6px;
    width: 50%;
    height: 20px;

    ::placeholder {
      text-align: center;
    }
  }
`;
