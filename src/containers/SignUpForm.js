import React from "react";
import { Col, Row } from "antd";
import PageTitle from "../components/comon/PageTitle";
import MultiStepForm from "../components/signupform/MultiStepForm";

function Form() {
  const personalDetails = (values) => {};
  const insuranceDetails = (values) => {};
  const familyDetails = (values) => {};
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
