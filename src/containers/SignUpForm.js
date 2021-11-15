import { Col, Row } from "antd";
import React from "react";
import PageTitle from "../components/comon/PageTitle";
import PersonalInfo from "../components/signupform/PersonalInfo";
function Form() {
  return (
    <Row>
      <Col span={24}>
        <PageTitle title={"Sign Up Form"} />
        <PersonalInfo />
      </Col>
    </Row>
  );
}

export default Form;
