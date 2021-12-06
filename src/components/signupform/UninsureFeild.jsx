import { Form, Checkbox, Col, Row } from "antd";
import React from "react";

function UninsureFeild({ formName, field }) {
  const name = field !== undefined ? field.name : formName;

  const fieldCol = {
    xxl: { span: 23, offset: 1 },
    xl: { span: 23, offset: 1 },
    lg: { span: 23, offset: 1 },
    md: { span: 24 },
    xs: { span: 24 },
    sm: { span: 24 },
  };
  return (
    <Col {...fieldCol}>
      <Form.Item
        className="Checkbox-Style"
        name={[name, "noInsurance"]}
        fieldKey={[field?.key, "noInsurance"]}
        rules={[
          {
            required: true,
            message:
              "Accept that you don't have the inusrance and you are willing to proceed",
          },
        ]}
      >
        <Checkbox.Group>
          <Checkbox value="Accept No Inscurance">
            I Assured that i don't have inscurance
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Col>
  );
}

export default UninsureFeild;
