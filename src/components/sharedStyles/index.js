import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f3f4;
`;

const PageTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: left;
  width: 100%;
  padding: 30px 50px;
  color: black;
  text-align: center;
  margin-top: 100px;
`;

const SessionTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  color: rgb(20, 163, 82);
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    border: 0.8px solid black;
    border-radius: 5px;
    padding: 8px 4px;
    font-size: 20px;
    margin: 5px 0px;
  }

  button {
    margin: 20px 0px;
    border-radius: 5px;
    border-width: 0.8px;
    border-color: black;
    background-color: rgb(20, 163, 82);
    font-size: 20px;
    padding: 8px 4px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    font-weight: bold;
  }
`;

export { PageWrapper, PageTitle, SessionTitle, StyledForm };
