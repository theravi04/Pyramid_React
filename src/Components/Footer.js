import React from 'react'
import styled from 'styled-components'
import Coin from '../assets/Coin.js';
import Support from '../assets/Support.js';
import Social from '../assets/Social.js';
import Frame from '../assets/Frame.js';

export default function Footer() {
  return (
    
    <FootBottom>
      <div className="footerLeft">
        <Frame />
      </div>
      <div className="footerRight">
        <div className="threeIcon">
          <Coin />
          <p>CoinMarketCap</p>
        </div>
        <div className="threeIcon">
          <Social />
          <p>Socials</p>
        </div>
        <div className="threeIcon">
          <Support />
          <p>Support</p>
        </div>
      </div>
    </FootBottom>
  );
}

const FootBottom = styled.div`
  background-color: rgb(8, 28, 28); 
  margin-top: 25px;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;