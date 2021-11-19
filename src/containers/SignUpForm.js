import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/PageTitle";
import MultiStepForm from "../components/signupform/MultiStepForm";
import { petaintPersonalDetals } from "../redux/actions/signUpActions";
function Form() {
  const imageUpload = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const personalDetails = (values) => {
    petaintPersonalDetals(values);
    console.log("Personal Details", values);
  };

  const insuranceDetails = (values) => {
    console.log("Insurance Details", values);
  };
  const familyDetails = (values) => {
    console.log("Family Form", values);
  };
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
        <MultiStepForm
          personalDetails={personalDetails}
          insuranceDetails={insuranceDetails}
          familyDetails={familyDetails}
        />
      </Col>
    </Row>
  );
}

export default Form;
