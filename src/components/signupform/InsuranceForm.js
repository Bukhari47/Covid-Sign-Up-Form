import React, { useState } from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";
import { Form, Radio, Card } from "antd";

const InsuranceForm = ({ form }) => {
  const [haveInsurance, setInsurance] = useState(true);
  return (
    <Card title="Insurance Info" bordered={false} className="Card">
      <Form.Item
        name={["Insurance", "HaveInsurance"]}
        label="Do you have Insurance?"
        rules={[{ required: true }]}
      >
        <Radio.Group
          onChange={(e) => {
            setInsurance(e.target.value);
            form.setFieldsValue({ Family: [] });
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
        <InsuranceFeilds formName="Insurance" />
      ) : (
        <UninsureFeild formName="Insurance" />
      )}
    </Card>
  );
};

export default InsuranceForm;
