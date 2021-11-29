import React from "react";
import { Col, Row } from "antd";
import PageTitle from "../components/comon/headers/PageTitle";
import MainForm from "../components/signupform/MainForm";

function SignUpForm() {
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
        <MainForm />
      </Col>
    </Row>
  );
}

export default SignUpForm;
