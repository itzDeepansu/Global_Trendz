import React from "react";
import "../../../helper.css";
import "./FeaturedJobCard.css";

const FeaturedJobCard = ({
  imgurl,
  brand,
  location,
  position,
  description,
  experience,
  timings,
  postedon,
}) => {
  return (
    <div className="backgroundcontainer">
      <div className="featuredjobcard col padding20">
        <div className="row flexgap10 logoarea">
          <img
            // src="https://www.google.com/images/hpp/one-64x64px.png"
            src={imgurl}
            alt="Logo"
            height={45}
          />
          <div className="col">
            <div className="size-25">{brand}</div>
            <div className="opacity40">{location}</div>
          </div>
        </div>
        <div className="col">
          <div className="size-25">{position}</div>
          <div>{description}</div>
        </div>
        <div className="row bottom center size-10">
          <div className="row center flexgap5">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M28.523 23.813c-.518-.51-6.795-2.938-7.934-3.396c-1.133-.45-1.585-1.697-1.585-1.697s-.51.282-.51-.51c0-.793.51.51 1.02-2.548c0 0 1.415-.397 1.134-3.68h-.34s.85-3.51 0-4.698c-.853-1.188-1.187-1.98-3.06-2.548c-1.87-.567-1.19-.454-2.548-.396c-1.36.057-2.492.793-2.492 1.188c0 0-.85.057-1.188.397c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.624l-.337.11c-.283 3.284 1.132 3.682 1.132 3.682c.51 3.058 1.02 1.755 1.02 2.548c0 .792-.51.51-.51.51s-.453 1.246-1.585 1.697c-1.132.453-7.416 2.887-7.927 3.396c-.51.52-.453 2.896-.453 2.896h26.954s.063-2.378-.453-2.897zm-6.335 2.25h-4.562v-1.25h4.562z'/%3E%3C/svg%3E"
              alt=""
              className="invert"
            />
            <div>{experience}</div>
          </div>
          <div className="row center flexgap5">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z'/%3E%3C/svg%3E"
              alt=""
              className="invert"
            />
            <div>{timings}</div>
          </div>
          <div className="row center flexgap5">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3'/%3E%3C/svg%3E"
              alt=""
              className="invert"
            />
            <div>{postedon}</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="col flexgap10 center onhoverbutton">
        <span
          className="featurebutton"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Apply Now
        </span>
        <span
          className="featurebutton"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Job Details
        </span>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
