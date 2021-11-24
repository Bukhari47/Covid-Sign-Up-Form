import React, { useState } from "react";
import { Col, message, Row, Form, Card, Button } from "antd";
import { v4 as uuidv4 } from "uuid";
import PersonalInfo from "./PersonalInfo";
import InsuranceForm from "./InsuranceForm";
import FamilyForm from "./FamilyForm";

const MultiStepForm = () => {
  const [form] = Form.useForm();
  const [pateintDetails, setPateintDetails] = useState({
    uuid: uuidv4(),
  });
  const [fields, setfields] = useState(0);
  const formDetails = (values) => {
    setPateintDetails({
      uuid: uuidv4(),
      ...values.Personal,
      Insurance: values.Insurance,
      Family: values.Family,
    });
  };

  return (
    <Form name="Patinet Details" form={form} onFinish={formDetails}>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <PersonalInfo personalValues={personalValues} />
          <InsuranceForm form={form} />
          <FamilyForm form={form} />
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Col>
        <Col span={4}></Col>
      </Row>
    </Form>
  );
};
export default MultiStepForm;
