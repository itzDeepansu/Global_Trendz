import React from "react";
import "../../helper.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="row navbar sticky">
      <img
        src="https://grubdigest.com/static/media/logo.7aac2987043c27bdb212.png"
        alt=""
      />
      <div className="row flexgap25 center">
        <span>Restaurants</span>
        <span>About Grub Digest</span>
        <span>Let's Connect</span>
        <span className="listBusinessButton">List Your Business</span>
      </div>
    </div>
  );
};

export default Navbar;
