import React, { useState } from "react";
import InsuranceFeilds from "../comon/form_fields/InsuranceFeilds";
import UninsureFeild from "../comon/form_fields/UninsureFeild";
import { Form, Radio, Card, Row, Col } from "antd";

const InsuranceForm = ({ fieldCol, form }) => {
  const UUID = form.getFieldValue("uuid");
  const [haveInsurance, setInsurance] = useState(true);

  return (
    <Card title="Insurance Info">
      <Col {...fieldCol}>
        <Form.Item
          name={["Insurance", "HaveInsurance"]}
          label="Do you have Insurance?"
          rules={[{ required: true }]}
          initialValue={true}
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
      </Col>
      {haveInsurance ? (
        <InsuranceFeilds
          fieldCol={fieldCol}
          formName="Insurance"
          key={UUID}
          form={form}
        />
      ) : (
        <UninsureFeild
          fieldCol={fieldCol}
          formName="Insurance"
          key={UUID}
          form={form}
        />
      )}
    </Card>
  );
};

export default InsuranceForm;
