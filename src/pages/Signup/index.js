import React, { useState } from "react";
import styled from "styled-components";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUp(e) {
    e.preventDefault();
  }

  return (
    <PageWrapper>
      <PageTitle>NOVO CADASTRO</PageTitle>
      <StyledForm>
        <input
          type="text"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="text"
          placeholder="CPF"
          required
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        />

        <input
          type="text"
          placeholder="Endereço"
          required
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <input
          type="text"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <input
          type="text"
          placeholder="Confirme a senha"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />

        <button onClick={signUp}> Cadastrar</button>
      </StyledForm>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 150px;
`;
const PageTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  color: rgb(20, 163, 82);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    border: 0.8px solid black;
    border-radius: 5px;
    padding: 8px 4px;
    font-size: 15px;
    margin: 5px 0px;
  }
  button {
    margin: 20px 0px;
    border: 0.5 solid black;
    border-radius: 5px;

    font-size: 20px;
    padding: 8px 4px;
    cursor: pointer;
  }
`;
