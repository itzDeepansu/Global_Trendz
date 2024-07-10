import React, { useState } from "react";
import "./Page2.css";
import "../../utility.css";
import { useForm } from "react-hook-form";
import { Country, State, City } from "country-state-city";

const Page2 = ({ handleChildDataTwo}) => {
  const { register, handleSubmit } = useForm();
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentState, setCurrentState] = useState("");
  const states = State.getStatesOfCountry(currentCountry);
  const cityList = City.getCitiesOfState(currentCountry, currentState);

  const [presentCountry, setPresentCountry] = useState("");
  const [presentState, setPresentState] = useState("");
  const presentstates = State.getStatesOfCountry(presentCountry);
  const presentcityList = City.getCitiesOfState(presentCountry, presentState);

  const handleStateSelect = (e) => {
    setCurrentState(e.target.value);
  };
  const handleCountrySelect = (e) => {
    setCurrentCountry(e.target.value);
  };
  const handlePresentStateSelect = (e) => {
    setPresentState(e.target.value);
  };
  const handlePresentCountrySelect = (e) => {
    setPresentCountry(e.target.value);
  };
  const onSubmit = (data) => {
    handleChildDataTwo(data);
  };
  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center form2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col formOuter border-silver relative"
        >
          <div className="flex flex-row gap-2">
            <div className="form-floating w-16">
              <input
                placeholder="E-Mail"
                {...register("E-Mail", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="E-Mail">E-Mail</label>
            </div>
            <div className="form-floating w-16">
              <input
                placeholder="Mobile-Number"
                {...register("Mobile-Number", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="Mobile-Number">Mobile-Number</label>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="form-floating w-16">
              <input
                placeholder="Phone-Number"
                {...register("Phone-Number", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="Phone-Number">Phone-Number</label>
            </div>
            <div className="form-floating w-16">
              <input
                placeholder="Whatsapp-Number"
                {...register("Whatsapp-Number", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="Whatsapp-Number">Whatsapp-Number</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Permanent Address</div>
            <div className="flex flex-row gap-2">
              <select
                {...register("Permanent-Country", { required: true })}
                onChange={handleCountrySelect}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select Country</option>
                <option value="IN">India</option>
              </select>
              <select
                {...register("Permanent-State", { required: true })}
                onChange={handleStateSelect}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <select
                {...register("Permanent-City", { required: true })}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select City</option>
                {cityList.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="form-floating w-16">
                <input
                  placeholder="Permanent-Pin-Code"
                  {...register("Permanent-Pin-Code", { required: true })}
                  className="border-silver h-3 form-control shadow-none red-border-focus"
                />
                <label htmlFor="Permanent-Pin-Code">Pin-Code</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Present Address</div>
            <div className="flex flex-row gap-2">
              <select
                {...register("Present-Country", { required: true })}
                onChange={handlePresentCountrySelect}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select Country</option>
                <option value="IN">India</option>
              </select>
              <select
                {...register("Present-State", { required: true })}
                onChange={handlePresentStateSelect}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select State</option>
                {presentstates.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <select
                {...register("Present-City", { required: true })}
                className="border-silver red-border-focus h-3 w-16"
              >
                <option defaultValue>Select City</option>
                {presentcityList.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="form-floating w-16">
                <input
                  placeholder="Present-Pin-Code"
                  {...register("Present-Pin-Code", { required: true })}
                  className="border-silver h-3 form-control shadow-none red-border-focus"
                />
                <label htmlFor="Present-Pin-Code">Pin-Code</label>
              </div>
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

export default Page2;
