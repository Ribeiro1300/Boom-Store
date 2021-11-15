import { PageWrapper, PageTitle } from "../../components/sharedStyles";
import React from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import styled from "styled-components";
import { IoPersonSharp } from "react-icons/io5";

export default function LoginAndSignup() {
  return (
    <PageWrapper>
      <PageTitle>
        <IoPersonSharp /> Identificação
      </PageTitle>
      <AuthorizationContainer>
        <Login />
        <Signup />
      </AuthorizationContainer>
    </PageWrapper>
  );
}

const AuthorizationContainer = styled.div`
  display: flex;
  width: 100vw;
`;
