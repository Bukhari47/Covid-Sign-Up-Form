import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/PageTitle";
import HaveInsurance from "../components/signupform/HaveInsurance";
import PersonalInfo from "../components/signupform/PersonalInfo";
function Form() {
  const uploadImage = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const personalDetails = (values) => {
    console.log("Personal Details", values);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };
  const insuranceDetails = (values) => {
    console.log("Insurance Details", values);
  };

  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
        <PersonalInfo
          personalDetails={personalDetails}
          validateMessages={validateMessages}
          snapshotUpload={uploadImage}
        />
        <HaveInsurance
          insuranceDetails={insuranceDetails}
          validateMessages={validateMessages}
          uploadCardImage={uploadImage}
        />
      </Col>
    </Row>
  );
}

export default Form;
