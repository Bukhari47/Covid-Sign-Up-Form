import { Form, Checkbox, Col, Row } from "antd";
import React from "react";

function UninsureFeild({ formName, field, fieldCol }) {
  const name = field !== undefined ? field.name : formName;
  return (
    <Row>
      <Col {...fieldCol}>
        <Form.Item
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
          <Checkbox.Group className="Checkbox-Style">
            <Checkbox value="Accept No Inscurance">
              I Assured that i don't have inscurance
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default UninsureFeild;
