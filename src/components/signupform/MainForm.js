import React, { useEffect } from "react";
import { Col, Row, Form, Button } from "antd";
import PersonalInfo from "./PersonalInfo";
import InsuranceForm from "./InsuranceForm";
import FamilyForm from "./FamilyForm";
import { v4 as uuidv4 } from "uuid";

const MainForm = () => {
  const [form] = Form.useForm();
  const formDetails = (values) => {
    console.log(values);
  };
  useEffect(() => {
    form.setFieldsValue({
      ...form,
      Personal: {
        UUID: uuidv4(),
      },
      Insurance: {},
      Family: [],
    });
  });
  return (
    <Form name="Patinet Details" form={form} onFinish={formDetails}>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <PersonalInfo form={form} />
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
export default MainForm;
