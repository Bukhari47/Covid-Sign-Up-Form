import React, { useState } from "react";

import ProCard from "@ant-design/pro-card";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";
import { Form, Radio } from "antd";

const InsuranceForm = () => {
  const [haveInsurance, setInsurance] = useState(true);
  return (
    <ProCard className="proCardStyle">
      <Form.Item
        name={["Insurance Details", "HaveInsurance"]}
        label="Do you have Insurance?"
        // onChange={(value) => setInsurance(value)}
        rules={[{ required: true }]}
      >
        <Radio.Group
          onChange={(e, value) => {
            console.log("object", e, value);
            setInsurance(e.target.value);
          }}
          value={haveInsurance}
          options={[
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      {haveInsurance ? (
        <InsuranceFeilds formName="Insurance Details" />
      ) : (
        <UninsureFeild />
      )}
    </ProCard>
  );
};

export default InsuranceForm;
