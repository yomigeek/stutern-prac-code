import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  div {
    display: flex;
    padding: 10px 20px;
    a{
        text-decoration: none;
    }
  }
`;

const NavBar = () => {
  return (
    <Bar>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><Link to="/login">Login</Link></div>
      <div>SignUp</div>
    </Bar>
  );
};

export default NavBar;
