import React from "react";
import "./Page6.css";
import "../../utility.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  beforeUpload: function(file) {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error(`${file.name} is not a PDF file`);
    }
    return isPDF || Upload.LIST_IGNORE;
  },  
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Page6 = () => (
  <div className="flex">
    <div className="form6 flex flex-col justify-center items-center gap-2">
      <h1>Resume</h1>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading useless data.
        </p>
      </Dragger>
      <button className="border-silver h-mid-2 continue-button w-16 mt-4">Submit</button>
    </div>
  </div>
);

export default Page6;
