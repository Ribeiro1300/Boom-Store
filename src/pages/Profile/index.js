import { PageTitle, PageWrapper } from "../../components/sharedStyles";
import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export default function Profile() {
  let history = useHistory();
  const userName = localStorage.getItem("name");

  function logout() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <PageWrapper>
      <PageTitle>
        Olá, {userName}! Em breve você poderá ver mais informações sobre seu
        perfil aqui :)
      </PageTitle>
      <LogoutButton onClick={logout}>Sair</LogoutButton>
    </PageWrapper>
  );
}

const LogoutButton = styled.div`
  background-color: #11e0ac;
  cursor: pointer;
  display: flex;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 20px;
  &:hover {
    opacity: 0.6;
  }
`;
