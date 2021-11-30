import React, { useEffect } from "react";
import { Col, Row, Form, Button } from "antd";
import PersonalInfo from "./PersonalInfo";
import InsuranceForm from "./InsuranceForm";
import FamilyForm from "./FamilyForm";
import { v4 as uuidv4 } from "uuid";

const MainForm = ({ formDetails }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      Personal: {
        UUID: uuidv4(),
      },
      Insurance: {},
      Family: [],
    });
  }, []);

  const spacesOnLeftRight = {
    xxl: { span: 4 },
    xl: { span: 4 },
    lg: { span: 3 },
    md: { span: 2 },
    xs: { span: 1 },
    sm: { span: 1 },
  };

  const formLayout = {
    xxl: { span: 16 },
    xl: { span: 16 },
    lg: { span: 18 },
    md: { span: 20 },
    xs: { span: 22 },
    sm: { span: 22 },
  };
  const fieldCol = {
    xxl: { span: 11, offset: 1 },
    xl: { span: 11, offset: 1 },
    lg: { span: 11, offset: 1 },
    md: { span: 24 },
    xs: { span: 24 },
    sm: { span: 24 },
  };
  return (
    <Form name="Patinet Details" form={form} onFinish={formDetails}>
      <Row gutter={[16, 16]}>
        <Col {...spacesOnLeftRight}></Col>
        <Col {...formLayout}>
          <PersonalInfo fieldCol={fieldCol} form={form} />
          <InsuranceForm fieldCol={fieldCol} form={form} />
          <FamilyForm fieldCol={fieldCol} form={form} />
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Col>
        <Col {...spacesOnLeftRight}></Col>
      </Row>
    </Form>
  );
};
export default MainForm;
