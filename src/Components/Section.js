import React from "react";
import "./Section.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Share from "../assets/Share";
import BuyHedgePay from "../assets/BuyHedgePay";
import Chart from "../assets/Chart";
import Arrow from "../assets/Arrow";
import Sync from "../assets/Sync";
import Question from "../assets/Question";
import Checkbox from "@mui/material/Checkbox";
import logo from "../assets/image 6344240.png";
import logo2 from "../assets/logo2.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo3 from "../assets/logo 3.png"

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Section = () => {
  return (
    <div className="container">
      <div className="one">
        <div className="containerOne">
          <div className="headingOne">
            <h3>HPAY | Exchange</h3>
          </div>

          <div className="oneButtons">
            <div className="buttonTop">
              <button className="buy-button">
                <div className="icons">
                  <BuyHedgePay />
                </div>
                Buy HedgePay
                <ArrowForwardIosIcon className="arrow" />
              </button>
            </div>

            <div className="buttonDown">
              <button className="button-down3">
                <div className="icons">
                  <Share />
                </div>
                Transfer Gateway
                <ArrowForwardIosIcon />
              </button>
              <button className="button-down3">
                <div className="icons">
                  <Chart />
                </div>
                View Chart
                <ArrowForwardIosIcon />
              </button>
              <button className="button-down3">
                <div className="icons">
                  <Arrow />
                </div>
                Buy with Transak
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="two">
        <div className="headingTwo">
          <h2>Aggregator DEX</h2>
        </div>
        <div className="textTwo">
          HedgePay's Aggregator DEX has the ability to track the best prices for
          thr token you want on established Decentralized Exchanges. the
          HedgePay DEX will also provides you with the option to set limits
          orders, giving yout the freedom hunt for the token you want at the
          price you want it.
        </div>
        <div className="buttonTwo">
          <button className="buttonTwo-one">Buy HedgePay</button>
          <button className="buttonTwo-two">View Cart</button>
        </div>
      </div>

      <div className="three">
        <div className="three-top">
          <p className="three-top-h4">
            Your Balance: $0.92 <br />
            <spam className="three-top-h2">0.20115234 NEAR</spam>
          </p>
        </div>
        <div className="three-pay-text">
          <p className="pay-h4">You Pay </p>
          <p className="pay-h4">3409.2419 THPAY/NEAR</p>
        </div>



        <div className="infinitycontainer">
          <div className="infinity">
            <div className="infinityLogo">
              <img src={logo} alt="logo" />
            </div>
            <div style={{fontSize:"1.3em"}}>0</div>
          </div>
          <div className="right-div">
            <img src={logo3} alt="logo3"/>
            <div className="textblock">NEAR</div>
            <KeyboardArrowDownIcon />
          </div>
        </div>



        <div className="three-sync">
          <div className="syncicons">
            <Sync />
          </div>
          <p className="three-percent">
            Better by +76.7750% <Question />
          </p>
        </div>


        <div className="logocontainer">
          <div className="logo2">
            <div className="iconLogo">
              <img src={logo2} alt="logo2" />
            </div>
            <div style={{fontSize:"1.3em"}}>0</div>
          </div>
          <div className="right-div">
            <img src={logo3} alt="logo3"/>
            <div className="textblock">THPAY</div>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="three-checkbox">
          <div className="box-check">
            <Checkbox {...label} />
          </div>
          <p>
            I have read and agree with HedgePay Terms of Service. I have done my
            research to make sure I am legally able to purchase the token in my
            country of residence.
          </p>
        </div>
        <div className="three-btn">
          <button className="swap-btn">Swap</button>
        </div>
      </div>
      
    </div>

    
  );
};

export default Section;
