import React from "react";
import styled from "styled-components";
import { signOut } from "../googleAuthentication/googleAuth";

const Navbar = () => {
  return (
    <Container>
      <h1>Google Analytics Dashboard</h1>
      <div className="signout" onClick={signOut}>
        SIGN OUT
      </div>
    </Container>
  );
};

export default Navbar;


const Container = styled.div`
  height: 10vh;
  background: #4169E1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  h1 {
    padding-left: 20px;
    color: #d1d8e0;
  }

  .signout {
    padding-right: 20px;
    color: #e0d5d1;
    cursor: pointer;
  }
`;
