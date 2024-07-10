import React from "react";
import "../../helper.css";
import "./EmployerZone.css";

const EmployerZone = () => {
  return (
    <div className="parallaxEmployerContainer column center">
      <img
        src="https://grubdigest.com/static/media/penguin.a7dd9fe0e57c5461b409.png"
        alt="penguin"
        className="penguineemployer"
      />
      <div className="employertitle">
        <h3 className="red leftwhiteborder">Employer Zone</h3>
        <div className="size-18 leftredborder">Get the right staff</div>
      </div>
      <div className="textcenter">
        Post Your Job Requirements and start recruiting
      </div>
      <div className="employerpara">
        Employers who are looking for talented candidates can list their job
        requirements and receive CV’s from Candidates through our platform. You
        can shortlist candidates and send them notifications to schedule
        interviews. You can save a lot of time in hiring the right candidates
        for your jobs.
      </div>
      <div className="row center">
        <span
          className="employerbutton"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Post a Job
        </span>
      </div>
    </div>
  );
};

export default EmployerZone;
