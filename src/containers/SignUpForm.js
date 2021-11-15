import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/PageTitle";
import PersonalInfo from "../components/signupform/PersonalInfo";
function Form() {
  const snapshotUpload = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const personalDetails = (values) => {
    console.log(values);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const beforeUpload = (e) => {
    console.log("Before Upload -->", e);
  };
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
        <PersonalInfo
          snapshotUpload={snapshotUpload}
          personalDetails={personalDetails}
          validateMessages={validateMessages}
          beforeUpload={beforeUpload}
        />
      </Col>
    </Row>
  );
}

export default Form;
