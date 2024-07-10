import React from "react";
import "./Page3.css";
import "../../utility.css";
import { useForm } from "react-hook-form";

const Page3 = ({ handleChildDataThree }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleChildDataThree(data);
  };

  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center form3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col formOuter border-silver relative"
        >
          <div className="form-floating">
            <textarea
              {...register("About-Me", { required: true })}
              placeholder="About-Me"
              className="form-control border-silver shadow-none red-border-focus"
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="About-Me">About-Me</label>
          </div>
          <div className="flex flex-col gap-2">
            <div>Social Media Connects</div>
            <div className="form-floating w-32">
              <input
                placeholder="Facebook"
                {...register("Facebook", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="Facebook">Facebook</label>
            </div>
            <div className="form-floating w-32">
              <input
                placeholder="Instagram"
                {...register("Instagram", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="Instagram">Instagram</label>
            </div>
            <div className="form-floating w-32">
              <input
                placeholder="Linkedin"
                {...register("Linkedin", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="Linkedin">Linkedin</label>
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

export default Page3;
