import React, { useState } from "react";
import { SessionTitle, StyledForm } from "../sharedStyles";
import styled from "styled-components";
import { IoEnterOutline } from "react-icons/io5";
import { postLogIn } from "../../services/logIn";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function logIn(e) {
    e.preventDefault();
    postLogIn({ email, password })
      .then(() => console.log({ email, password }))
      .catch((err) => {
        console.log(err);
        console.log("feijoada");
      });
  }

  return (
    <LoginWrapper>
      <SessionTitle>JÁ TENHO CADASTRO</SessionTitle>
      <StyledForm>
        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={logIn}>
          <IoEnterOutline />
          {" Entrar"}
        </button>
      </StyledForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px grey solid;
  width: 100%;
  padding: 10px 50px;
`;
