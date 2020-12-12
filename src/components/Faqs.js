import React, { Component } from "react";
import "./faqs.css";
import list from "./images/list.png";
import tacfull from "./images/Tacfull.png";
import { Link } from "react-router-dom";
class Faqs extends Component {
  state = {
    inSwitchOn: false,
    inSwitchOn1: false,
    inSwitchOn2: false,
    inSwitchOn3: false,
    inSwitchOn4: false,
    inSwitchOn5: false,
    inSwitchOn6: false,
    inSwitchOn7: false,
    inSwitchOn7: false,
    inSwitchOn8: false,
    inSwitchOn9: false,
    inSwitchOn10: false,
    inSwitchOn11: false,
    inSwitchOn12: false,
    inSwitchOn13: false,
    inSwitchOn14: false,
  };
  js = () => { 
    document.getElementById("hamburger").addEventListener("click", () => {
        document.getElementById("headerlist-faqs").classList.toggle("header2-faqs");
    })};
  render() {
    const isOn = this.state.isSwitchOn;
    const isOn1 = this.state.isSwitchOn1;
    const isOn2 = this.state.isSwitchOn2;
    const isOn3 = this.state.isSwitchOn3;
    const isOn4 = this.state.isSwitchOn4;
    const isOn5 = this.state.isSwitchOn5;
    const isOn6 = this.state.isSwitchOn6;
    const isOn7 = this.state.isSwitchOn7;
    const isOn8 = this.state.isSwitchOn8;
    const isOn9 = this.state.isSwitchOn9;
    const isOn10 = this.state.isSwitchOn10;
    const isOn11 = this.state.isSwitchOn11;
    const isOn12 = this.state.isSwitchOn12;
    const isOn13 = this.state.isSwitchOn13;
    const isOn14 = this.state.isSwitchOn14;
    
    return (
      <div className="container-faqs">
        <div className="header-faqs" id="header">
          <a href="#">
            <img src={tacfull} className="header_name-faqs" />
          </a>
          <div className="names-faqs">
            <p className="home">
              <Link to="/">HOME</Link>
            </p>
            <p className="account">
              <Link to="/profile">ACCOUNT</Link>
            </p>
            <p className="contact">
              <Link to="/contact">CONTACT</Link>
            </p>
            <p className="faqs">
              <Link to="/faqs">FAQS</Link>
            </p>
          </div>
          <p className="login">
            <Link to="/profile">LOG IN</Link>
          </p>
          <img src={list} className="hamburger" id="hamburger" onClick={this.js}></img>
          <div className="headerlist-faqs" id="headerlist-faqs">
            <ul>
              <li className="home1">
              <Link to="/">HOME</Link>
              </li>
              <li className="account1">
              <Link to="/profile">ACCOUNT</Link>
              </li>
              <li className="contact1">
              <Link to="/contact">CONTACT</Link>
              </li>
              <li className="faqs1">
              <Link to="/faqs">FAQS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-faqs">
          <div className="general">
            <div className="faqHeader">General Questions</div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p
                    className={isOn ? "yes-toggle" : "no-toggle"}
                    onClick={() => this.setState({ isSwitchOn: !isOn })}
                  >
                    {isOn
                      ? "Account registration at TAC is already done by the dummy email and password that comes with the product. You need to change the mail and password according to you while you setup the device."
                      : "Is account registration required?"}
                  </p>
                </h4>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p
                    className={isOn1 ? "yes-toggle " : "no-toggle"}
                    onClick={() => this.setState({ isSwitchOn1: !isOn1 })}
                  >
                    {isOn1
                      ? "To know the steps involved for setting up your TAC"
                      : "How do I setup my TAC?"}
                  </p>
                </h4>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p
                    className={isOn2 ? "yes-toggle " : "no-toggle"}
                    onClick={() => this.setState({ isSwitchOn2: !isOn2 })}
                  >
                    {isOn2
                      ? "NO. You do not need any mobile application to use this device, just the NFC feature and you are ready to go. For phones not having the NFC feature, you will require a QR reader for opening the link !"
                      : "Do I need any mobile application for using this device?"}
                  </p>
                </h4>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p
                    className={isOn3 ? "yes-toggle " : "no-toggle"}
                    onClick={() => this.setState({ isSwitchOn3: !isOn3 })}
                  >
                    {isOn3
                      ? "YES, definetly! If you still find the device not working check whether your mobile phone is TAC compatible.Click here to check compatible phones."
                      : "Will this work if I tap it on my phone ?"}
                  </p>
                </h4>
              </div>
            </div>

            <div className="faqHeader">Selling & Shop</div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p
                    className={isOn4 ? "yes-toggle " : "no-toggle"}
                    onClick={() => this.setState({ isSwitchOn4: !isOn4 })}
                  >
                    {isOn4
                      ? "Yes you can order as many TAC as you want. We also assure you of offers on buying quantities more than 4."
                      : "Can I order these TACS in bulk?"}
                  </p>
                </h4>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn5 ? "yes-toggle " : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn5: !isOn5 })}
                    >
                      {isOn5
                        ? "Yes the prize on store is final."
                        : "Is the price on store the final price I have to pay?"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn6 ? "yes-toggle " : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn6: !isOn6 })}
                    >
                      {isOn6
                        ? "You can pay via credit or debit card or with any digital wallets."
                        : "What are the payment options?"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn7 ? "yes-toggle " : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn7: !isOn7 })}
                    >
                      {isOn7
                        ? "You can expect your order in 4-5 working days after ordering from India and in 6-15 days after ordering from outside India."
                        : "By what time should I be expecting my order?"}
                    </p>
                  </h4>
                </div>
              </div>

              <div className="faqHeader">Compatibility</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn8 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn8: !isOn8 })}
                    >
                      {isOn8
                        ? "To view the full compatibility list, click here."
                        : "Is my device TAC compatible?"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn9 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn9: !isOn9 })}
                    >
                      {isOn9
                        ? "You can share your profile with non-compatible phone either by the share button on your profile or the QR code facility that is available."
                        : "How do I share my profile with non-compatible phones?"}
                    </p>
                  </h4>
                </div>
              </div>

              <div className="faqHeader">Troubleshooting</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn10 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn10: !isOn10 })}
                    >
                      {isOn10
                        ? "1.Make sure their phone works with TAC: Compatible Devices, 2.Make sure to tap your TAC to the very top of the back of their phone. On iPhones, the sweet spot for reading a TAC is on the very top of the back of the device, 3.A TAC cannot be read when: their phone is in airplane mode, their device flashlight is on, their phone screen is off, their camera is open"
                        : "Not working on iPhone"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn11 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn11: !isOn11 })}
                    >
                      {isOn11
                        ? "1.Make sure their phone works with TAC: Compatible Devices, 2.Make sure to tap your TAC to the very top of the back of their phone. For Androids, the sweet spot for reading a TAC is in the center of the back of the device, 3.Turn on NFC capabilities in their phone settings If their phone is on the compatible devices list and is still not reading your TAC, go to their phone settings and search for NFC. Make sure that NFC is turned on!"
                        : "Not working on Andoird"}
                    </p>
                  </h4>
                </div>
              </div>

              <div className="faqHeader">Shipping</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn12 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn12: !isOn12 })}
                    >
                      {isOn12
                        ? "Shipping time within the India is typically 1-5 business days, depending on your location. Shipping time outside of the India is typically 7-21 business days. Please contact us if you haven't received your order or would like to request rushed shipping!"
                        : "How long does the shipping take?"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn13 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn13: !isOn13 })}
                    >
                      {isOn13
                        ? "If you received an email saying your TAC has been shipped but you haven't received it yet, please allow 4-5 business days for it to arrive. If it has been longer than 6 days and you still haven't received your TAC, please Contact Us and we will resolve your issue!"
                        : "I haven't received my order"}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p
                      className={isOn14 ? "yes-toggle" : "no-toggle"}
                      onClick={() => this.setState({ isSwitchOn14: !isOn14 })}
                    >
                      {isOn14
                        ? "Yes we do ship worldwide. The shipping charges may incurred as per the shipping location varies."
                        : "Do you ship worldwide?"}
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Faqs;
