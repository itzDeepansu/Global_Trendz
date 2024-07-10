import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "../Page1/Page1.css";
import "../../utility.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload, DatePicker } from "antd";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Page1 = ({ handleChildDataOne }) => {
  const { register, handleSubmit, control } = useForm();
  // const [DOB, setDOB] = useState(new Date());
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentState, setCurrentState] = useState("");
  const states = State.getStatesOfCountry(currentCountry);
  const cityList = City.getCitiesOfState(currentCountry, currentState);
  //   if (currentState != "") {
  //     console.log(cityList);
  //   }

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleStateSelect = (e) => {
    setCurrentState(e.target.value);
  };
  const handleCountrySelect = (e) => {
    setCurrentCountry(e.target.value);
  };
  const onSubmit = (data) => {
    handleChildDataOne(data);
  };
  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center form1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col formOuter border-silver relative"
        >
          <div className="flex flex-col justify-center items-center">
            <Flex gap="middle" wrap>
              <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Flex>
            Profile Picture
          </div>
          <div className="flex flex-row gap-2">
            <div className="form-floating w-16">
              <input
                placeholder="Name"
                {...register("Name", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="Name">Name</label>
            </div>

            <select
              {...register("gender", { required: true })}
              className="border-silver w-16 red-border-focus"
            >
              <option defaultValue>Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="flex flex-row gap-2">
            {/* <DatePicker
              defaultValue={DOB}
              onChange={(date) => setDOB(date)}
              className="border-silver h-3 w-16 px-1 red-border-focus"
            /> */}
            {/* <DatePicker
              {...register("DOB", { required: true })}
              className="border-silver h-3 w-16 red-border-focus"
            /> */}
            <Controller
              name="DOB"
              control={control}
              defaultValue={null}
              rules={{ 
                required: 'Date of Birth is required',
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="Date of Birth"
                  onChange={(date) => field.onChange(date)}
                  className="border-silver h-3 w-16 red-border-focus"
                />
              )}
            />
            <select
              {...register("MaritalStatus", { required: true })}
              className="border-silver w-16 red-border-focus"
            >
              <option defaultValue>Marital Status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <div className="flex flex-row gap-2">
            <div className="form-floating w-16">
              <input
                placeholder="Location"
                {...register("Location", { required: true })}
                className="border-silver h-3 form-control shadow-none red-border-focus"
              />
              <label htmlFor="Location">Location</label>
            </div>
            <select
              {...register("Country", { required: true })}
              className="border-silver w-16 red-border-focus"
              onChange={handleCountrySelect}
            >
              <option value="Country">Country</option>
              <option value="IN">India</option>
            </select>
          </div>
          <div>
            <select
              {...register("State", { required: true })}
              className="border-silver w-full h-3 red-border-focus"
              onChange={handleStateSelect}
            >
              <option value="State">State</option>
              {states.map((state) => (
                <option value={state.isoCode} key={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              {...register("City", { required: true })}
              className="border-silver w-full h-3 red-border-focus"
            >
              <option value="City" className="px-1">
                City
              </option>
              {cityList?.map((city) => (
                <option value={city.name} key={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
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

export default Page1;
