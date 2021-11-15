import styled from "styled-components";

export const SingleProductWrapper = styled.div`
  width: 80%;
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  h1 {
    margin: 30px;
    width: 100%;
    font-size: 2em;
  }

  img {
    width: 400px;
    margin: 10px;
    @media (max-width: 800px) {
      width: 80%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  h3 {
    font-size: 3em;
    color: #0c8264;
    font-weight: 700;
    margin-top: 20px;
  }
`;

export const AddCart = styled.button`
  width: 60%;
  border: none;
  background-color: #11e0ac;
  border-radius: 7px;
  font-size: 1.2em;
  align-self: center;
  margin: 50px 0px;
  cursor: pointer;
`;
