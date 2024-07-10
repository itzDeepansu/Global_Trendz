import React from "react";
import "../../helper.css";
import "./OverViewSection.css";

const OverViewSection = () => {
  return (
    <div className="overView size-18 row paddingx flexgap25">
      <img
        // src="https://grubdigest.com/static/media/about-img.7a4b097f405a9f6a10fe.png"
        src="https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?s=612x612&w=0&k=20&c=TXsIHrSIyFlkHSpJq_AhX3V0l9X_U79e9cfpdMNH5LQ="
        alt="placeholder image"
      />
      <div className="container col">
        <span className="size-32">An Overview</span>
        <span className="overviewpara">
          Grub Jobs is an exclusive nationwide platform specializing in
          connecting hospitality businesses owners to recruit talented and
          excellent manpower. Employers get to have an easy way of listing their
          requirements for suitable candidates to apply to and job seekers can
          create a descriptive profile of themselves and find jobs and connect
          with Employers
        </span>
      </div>
    </div>
  );
};

export default OverViewSection;
