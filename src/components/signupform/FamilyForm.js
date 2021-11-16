import React from "react";
import { Col, Form, Row, Button } from "antd";
import PageTitle from "../comon/PageTitle";
function FamilyForm({ familyDetails, validateMessages }) {
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <PageTitle title={"Famiy Information"} />
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}

export default FamilyForm;
