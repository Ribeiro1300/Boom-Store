import React from "react";
import { IoPersonSharp, IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Logo> BoomStore </Logo>
      <LoginAndCartIcons>
        <IoPersonSharp style={{ cursor: "pointer", marginRight: "10px" }} />
        <IoCartOutline />
      </LoginAndCartIcons>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
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
