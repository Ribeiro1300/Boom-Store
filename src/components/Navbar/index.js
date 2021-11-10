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
      </Searchbar>{" "}
      <LoginAndCartIcons>
        <IoPersonSharp style={{ cursor: "pointer", marginRight: "10px" }} />
        <IoCartOutline />
      </LoginAndCartIcons>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 70px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #11e0ac;
  height: 100%;
`;

const Searchbar = styled.div`
  border: 1px solid green;
  border-radius: 5px;
  width: 300px;
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
`;
