import React, { useState } from "react";

import {
  ProFormText,
  ProFormSelect,
  ProFormUploadButton,
  ProFormRadio,
} from "@ant-design/pro-form";

import ProCard from "@ant-design/pro-card";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

const InsuranceForm = () => {
  const [haveInsurance, setInsurance] = useState(true);
  return (
    <ProCard
      style={{
        minWidth: 800,
        marginBottom: 16,
        maxWidth: "100%",
      }}
    >
      <ProFormRadio.Group
        name={["Insurance Details", "HaveInsurance"]}
        label="Do you have Insurance?"
        radioType="button"
        onChange={(e) => setInsurance(e.target.value)}
        rules={[{ required: true }]}
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
      />
      {haveInsurance ? <InsuranceFeilds /> : <UninsureFeild />}
    </ProCard>
  );
};

export default InsuranceForm;
