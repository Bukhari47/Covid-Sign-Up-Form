import React, { useEffect } from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

function MemberInsuranceFields({ formName, form, index }) {
  const memberData = form.getFieldsValue().Family[index];
  console.log("MIF-->", form.getFieldsValue().Family);
  console.log("Member uuid", memberData);

  if (form.getFieldsValue().Family[index]?.insuranceStatus === "Other") {
    return <InsuranceFeilds form={form} formName={formName} />;
  }
  if (form.getFieldsValue().Family[index]?.insuranceStatus === "None") {
    return <UninsureFeild form={form} formName={formName} />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
