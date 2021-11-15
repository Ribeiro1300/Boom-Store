import React, { useState } from "react";
import { SessionTitle, StyledForm } from "../sharedStyles";
import styled from "styled-components";
import { postSignUp } from "../../services/signUp";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUp(e) {
    e.preventDefault();
    if (checkPassword() && checkCpf()) {
      postSignUp({
        name,
        email,
        cpf,
        address,
        password,
        confirmPassword,
      })
        .then(() => {
          alert("Usuário criado com sucsso!");
          history.push("/");
        })
        .catch((err) => {
          processError(err.response.status);
        });
    }
  }

  function processError(status) {
    if (status === 409) {
      alert("E-mail ou CPF já cadastrados no sistema!");
    }
    if (status === 400) {
      alert("Insira o CPF corretamente (11 dígitos numéricos)");
    }
  }

  function checkPassword() {
    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais");
      setPassword("");
      setConfirmPassword("");
      return false;
    }
    return true;
  }

  function checkCpf() {
    const cpf_regex = /[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$/;
    if (!cpf_regex.test(cpf)) {
      alert("O cpf deve ser válido!");
      return false;
    }
    return true;
  }

  return (
    <SignupWrapper>
      <SessionTitle>QUERO ME CADASTRAR</SessionTitle>
      <StyledForm onSubmit={signUp}>
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

        <button type="submit"> Cadastrar</button>
      </StyledForm>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 50px;
`;
