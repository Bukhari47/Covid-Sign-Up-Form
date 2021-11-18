import { Form, Checkbox } from "antd";
import React from "react";

function UninsureFeild() {
  return (
    <Form.Item name={["Insurance Details", "No Insurance"]}>
      <Checkbox value="No Insurance">
        I Assured that i don't have inscurance
      </Checkbox>
    </Form.Item>
  );
}

export default UninsureFeild;
