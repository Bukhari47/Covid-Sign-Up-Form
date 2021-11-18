import React from "react";
import { StepsForm } from "@ant-design/pro-form";

import { Col, message, Row } from "antd";
import PersonalInfo from "./PersonalInfo";
import InsuranceForm from "./InsuranceForm";
import FamilyForm from "./FamilyForm";

const waitTime = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const MultiStepForm = ({
  personalDetails,
  insuranceDetails,
  familyDetails,
}) => {
  return (
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
          personalDetails;
          console.log("object", values);
          return true;
        }}
      >
        <PersonalInfo />
      </StepsForm.StepForm>

      {/* Personal Form End */}

      <StepsForm.StepForm
        name={["Insurnace"]}
        title="Insurance"
        onFinish={(values) => {
          insuranceDetails;
          console.log("object", values);
          return true;
        }}
      >
        <InsuranceForm />
      </StepsForm.StepForm>

      <StepsForm.StepForm
        name="time"
        title="Family"
        onFinish={(values) => {
          familyDetails;
          console.log("object", values);
          return true;
        }}
      >
        <FamilyForm />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default MultiStepForm;
