import React from "react";
import ProForm, { StepsForm } from "@ant-design/pro-form";

import ProCard from "@ant-design/pro-card";
import { message } from "antd";
import PersonalInfo from "./PersonalInfo";
import HaveInsurance from "./HaveInsurance";

const waitTime = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const MultiStepForm = () => {
  return (
    <>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success("Saved");
        }}
        formProps={{
          validateMessages: {
            required: "${label} Field Cannot be empty",
          },
        }}
      >
        <StepsForm.StepForm
          name={["Personal Info"]}
          title="Personal"
          onFinish={(values) => {
            console.log("object", values);
            return true;
          }}
        >
          <PersonalInfo />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name={["Insurnace"]}
          title="Insurance"
          onFinish={(values) => {
            console.log("object", values);
            return true;
          }}
        >
          <HaveInsurance />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="Family">
          <ProCard
            style={{
              marginBottom: 16,
              minWidth: 800,
              maxWidth: "100%",
            }}
          ></ProCard>
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};
export default MultiStepForm;
