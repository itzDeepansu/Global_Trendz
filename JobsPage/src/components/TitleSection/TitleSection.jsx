import React from "react";
import "../../helper.css";
import "./TitleSection.css";

const TitleSection = () => {
  return (
    <div className="titlesection row paddingx">
      <div className="container col">
        <div className="row">
          <h1 className="row">
            Grub
            <h4 className="red gap1">Jobs</h4>
          </h1>
          <span className="size-32">
            -The Best Place for Hospitality Recruitment
          </span>
        </div>
        <p className="titlepara">
          Helping Food Businesses to Hire Excellent Talent
        </p>
      </div>
      <img
        // src="https://grubdigest.com/static/media/grub-web-banner.e4374892f3219c3a773e.png"
            src="https://media.istockphoto.com/id/629203922/photo/man-working-at-a-grocery-store.jpg?s=612x612&w=0&k=20&c=AHOmVbP_lRYORBNo-6F3OYETVRJIQWz2_Ppmb-kSJDc="
        alt="placeholder Image"
      />
    </div>
  );
};

export default TitleSection;
