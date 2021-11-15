import React from "react";
import { IoPersonSharp, IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function Navbar() {
  let history = useHistory();
  return (
    <NavbarWrapper>
      <Logo onClick={() => history.push("/")}> BoomStore </Logo>
      <LoginAndCartIcons>
        <IoPersonSharp
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={() => history.push("/login")}
        />
        <IoCartOutline
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/cart")}
        />
      </LoginAndCartIcons>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #352e32;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
  color: #11e0ac;
  height: 100%;
  margin-left: 10px;
`;

const LoginAndCartIcons = styled.div`
  color: #11e0ac;
  font-size: 25px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;
