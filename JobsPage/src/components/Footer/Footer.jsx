import React from "react";
import "../../helper.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer row">
      <div>Contact Options</div>
      <div className="row">
        <div className="col center flexgap10">
          <span>
            All trademarks are properties of their respective owners. © Grub
            Digest. All rights reserved.
          </span>
          <span className="towardsright">A Product of Global Trendz</span>
        </div>
        <img
          src="https://grubdigest.com/static/media/gototop.8167ee92f2fb4d722f88.png"
          alt=""
          className="penguineimg"
        />
      </div>
    </div>
  );
};

export default Footer;
