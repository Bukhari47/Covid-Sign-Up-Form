import React from "react";
import { Col, Row } from "antd";
import PageTitle from "../components/comon/headers/PageTitle";
import MainForm from "../components/signupform/MainForm";

function SignUpForm() {
  const formDetails = (values) => {
    console.log(values);
  };
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
      </Col>
      <Col>
        <MainForm formDetails={formDetails} />
      </Col>
    </Row>
  );
}

export default SignUpForm;
