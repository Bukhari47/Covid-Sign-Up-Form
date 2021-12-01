import React from "react";
import { Col, Row } from "antd";
import PageTitle from "../components/comon/headers/PageTitle.jsx";
import MainForm from "../components/signupform/MainForm.jsx";

function SignUpForm() {
  const formDetails = (values) => {
    console.log(values);
  };
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
      </Col>
      <Col span={24}>
        <MainForm formDetails={formDetails} />
      </Col>
    </Row>
  );
}

export default SignUpForm;
