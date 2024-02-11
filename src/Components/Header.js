import React from 'react'
import styled from "styled-components";
import logo2 from "../assets/imagelogo.png"
import "../App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  return (
    <div>
      <NavOut>
        <NavLeft>
          <img src={logo2} alt="logo" className="image" />
          <div className="left">Swap</div>
          <div className="left">Rewards</div>
          <div className="left">Products</div>
          <div className="left">LunchPad</div>
          <div className="left">LeaderBoard</div>
        </NavLeft>
        <NavRight>
          <div className="left">About Us</div>
          <div className="left">Support</div>
          <div className="connect">Connect Wallet</div>
          <div className="icon">
            <div className="left">En</div>
            <div className="line">.</div>
            <ShoppingCartIcon />
          </div>
        </NavRight>
      </NavOut>
      {/* <div className="middle">.</div> */}
    </div>
  );
}


const NavLeft = styled.div`
  background-color: rgb(8, 28, 28);
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 130px;
  color: white;
`;

const NavRight = styled.div`
  background-color: rgb(8, 28, 28);
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  color: white;
  margin-right: 80px;
`;
const NavOut = styled.div`
  background-color: rgb(8, 28, 28);
  display: flex;
  justify-content: space-between;
  height: 13vh;
`;