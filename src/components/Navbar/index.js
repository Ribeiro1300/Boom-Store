import React from "react";
import { IoSearchSharp, IoPersonSharp, IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Logo> BoomStore </Logo>
      <Searchbar>
        procurar
        <IoSearchSharp />
      </Searchbar>
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

const Searchbar = styled.div`
  border: 1px solid green;
  border-radius: 5px;
  width: 40%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: white;
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
