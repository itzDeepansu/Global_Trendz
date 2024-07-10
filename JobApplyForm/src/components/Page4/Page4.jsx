import React, { useState } from "react";
import "./Page4.css";
import "../../utility.css";
import { useForm } from "react-hook-form";

const Page4 = ({ handleChildDataFour }) => {
  const { register, handleSubmit } = useForm();
  const [jobs, setJobs] = useState([]);
  const onSubmit = (data) => {
    handleChildDataFour(data);
  };
  const handleAddJob = () => {
    setJobs([...jobs, `Job${jobs.length + 1}`]);
  };
  const handleRemoveJob =()=>{
    if(jobs.length>=1){
       const modifiedJob= jobs.pop()
       const newJobs = jobs.filter((job)=>{
        return job!=modifiedJob
       })
       setJobs(newJobs)
      console.log(jobs);
    }
  }
  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center form3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col formOuter border-silver relative"
        >
          <div className="flex flex-col gap-2">
            <div>Work Experience</div>
            { jobs.length>0 ? jobs.map((job, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div>{job}</div>
                <div className="flex flex-row gap-2">
                  <div className="form-floating w-16">
                    <input
                      placeholder="Company-Name"
                      {...register(`${job}-Company-Name`, { required: true })}
                      className="form-control border-silver shadow-none red-border-focus"
                    />
                    <label htmlFor="Company-Name">Company-Name</label>
                  </div>
                  <div className="form-floating w-16">
                    <input
                      placeholder="Period"
                      {...register(`${job}-Period`, { required: true })}
                      className="form-control border-silver shadow-none red-border-focus"
                    />
                    <label htmlFor="Period">Period</label>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="form-floating w-16">
                    <input
                      placeholder="Designation"
                      {...register(`${job}-Designation`, { required: true })}
                      className="form-control border-silver shadow-none red-border-focus"
                    />
                    <label htmlFor="Designation">Designation</label>
                  </div>
                  <div className="form-floating w-16">
                    <input
                      placeholder="Location"
                      {...register(`${job}-Location`, { required: true })}
                      className="form-control border-silver shadow-none red-border-focus"
                    />
                    <label htmlFor="Location">Location</label>
                  </div>
                </div>
              </div>
            )) : null }
          </div>
          <button
            type="button"
            onClick={handleAddJob}
            className="border-silver h-mid-2 continue-button w-16 ml-auto"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleRemoveJob}
            className="border-silver h-mid-2 continue-button w-16 ml-auto"
          >
            Remove
          </button>
          <div className="flex flex-col gap-2">
            <div>Salary Details</div>
            <div className="flex flex-row gap-2">
              <div className="form-floating w-16">
                <input
                  placeholder="Current-CTC"
                  {...register("Current-CTC", { required: true })}
                  className="form-control border-silver shadow-none red-border-focus"
                />
                <label htmlFor="Current-CTC">Current-CTC</label>
              </div>
              <div className="form-floating w-16">
                <input
                  placeholder="Expected-CTC"
                  {...register("Expected-CTC", { required: true })}
                  className="form-control border-silver shadow-none red-border-focus"
                />
                <label htmlFor="Expected-CTC">Expected-CTC</label>
              </div>
            </div>
            <div className="form-floating w-full">
              <input
                placeholder="Incentives"
                {...register("Incentives", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="Incentives">Incentives</label>
            </div>
          </div>
          <input
            type="submit"
            value="Continue"
            className="border-silver h-mid-2 continue-button w-16 ml-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default Page4;
