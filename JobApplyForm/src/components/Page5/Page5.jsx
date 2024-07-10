import React from "react";
import "./Page5.css";
import "../../utility.css";
import { useForm, Controller } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";
import { DatePicker } from "antd";

const Page5 = ({ handleChildDataFive }) => {
  const { register, handleSubmit, control } = useForm();
  const customStyle = {
    searchBox: {
      // To change search box element look
      border: "1px solid #dee2e6",
      height: "58px",
    },
    chips: {
      // To change css chips(Selected options)
      background: "red",
    },
    optionContainer: {
      // To change css for option container
      border: "2px solid #dee2e6",
    },
    option: {
      // To change css for dropdown options
      color: "black",
    },
  };
  const onSubmit = (data) => {
    handleChildDataFive(data);
  };
  const skillsList = ["Category 1", "Category 2"];
  return (
    <div className="flex flex-row">
      <div className="flex justify-center items-center form5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col formOuter border-silver relative"
        >
          <div className="flex flex-col gap-2">
            <div>Education</div>
            <div className="form-floating w-32">
              <input
                placeholder="School"
                {...register("School", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="School">School</label>
            </div>
            <div className="form-floating w-32">
              <input
                placeholder="Degree"
                {...register("Degree", { required: true })}
                className="form-control border-silver shadow-none red-border-focus"
              />
              <label htmlFor="Degree">Degree</label>
            </div>
          </div>
          <div className="form-floating">
            <textarea
              {...register("Short-Description", { required: true })}
              placeholder="Short-Description"
              className="form-control border-silver shadow-none red-border-focus"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="Short-Description">Short-Description</label>
          </div>
          <div className="flex flex-row gap-2">
          <Controller
              name="Start-Date"
              control={control}
              defaultValue={null}
              rules={{ 
                required: 'Start Date is required',
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="Start-Date"
                  onChange={(date) => field.onChange(date)}
                  className="border-silver h-3 w-16 red-border-focus"
                />
              )}
            />
            <Controller
              name="End-Date"
              control={control}
              defaultValue={null}
              rules={{ 
                required: 'End Date is required',
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="End-Date"
                  onChange={(date) => field.onChange(date)}
                  className="border-silver h-3 w-16 red-border-focus"
                />
              )}
            />
          </div>
          <Controller
            control={control}
            name="skillsList"
            render={({ field: { value, onChange } }) => (
              <Multiselect
                style={customStyle}
                options={skillsList}
                isObject={false}
                showCheckbox={true}
                hidePlaceholder={true}
                closeOnSelect={false}
                onSelect={onChange}
                onRemove={onChange}
                selectedValues={value}
                placeholder="Skills"
              />
            )}
          />
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

export default Page5;
