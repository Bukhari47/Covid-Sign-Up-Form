import { Form, Checkbox, Col, Row } from "antd";
import React from "react";

function UninsureFeild({ formName, field }) {
  const name = field !== undefined ? field.name : formName;
  return (
    <Form.Item
      name={[name, "No_Insurance"]}
      fieldKey={[field?.key, "No_Insurance"]}
      rules={[
        {
          required: true,
          message:
            "Accept that you don't have the inusrance and you are willing to proceed",
        },
      ]}
    >
      <Checkbox.Group className="Checkbox-Style">
        <Row>
          <Col>
            <Checkbox value="Accept No Inscurance">
              I Assured that i don't have inscurance
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
}

export default UninsureFeild;
