import React from "react";
import "../../helper.css";
import "./JobSeekerZone.css";

const JobSeekerZone = () => {
  return (
    <div className="parallaxContainer column center">
      <img
        src="https://grubdigest.com/static/media/penguin.a7dd9fe0e57c5461b409.png"
        alt="penguin"
        className="penguinejobseeker"
      />
      <div className="jobseekertitle">
        <h3 className="red leftwhiteborder">Job Seeker</h3>
        <div className="size-18 leftredborder">Get Hired</div>
      </div>
      <div className="textcenter">
        Find the right job that suits your experience and skills.
      </div>
      <div className="jobseekerpara">
        You can create a detailed profile showcasing your skills and talent.
        Grub Jobs lets you find the right job and apply directly. You can browse
        through the various jobs listed or search for the right job. It’s a Free
        service for job seekers, so sign up now and create your personal
        profile.
      </div>
      <div className="row center">
        <span
          className="button"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Create Profile
        </span>
      </div>
    </div>
  );
};

export default JobSeekerZone;
