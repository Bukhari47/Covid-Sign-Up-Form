import { Form, Checkbox, Col, Row } from "antd";
import React from "react";

function UninsureFeild() {
  return (
    <Form.Item
      name={["Insurance Details", "No Insurance"]}
      rules={[
        {
          required: true,
          message:
            "Accept that you don't have the inusrance and you are willing to proceed",
        },
      ]}
    >
      <Checkbox.Group style={{ width: "100%" }}>
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
