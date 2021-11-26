import React, { useEffect } from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

function MemberInsuranceFields({ formName, form, field }) {
  if (form.getFieldsValue().Family[field.key]?.insuranceStatus === "Other") {
    return <InsuranceFeilds form={form} formName={formName} field={field} />;
  }
  if (form.getFieldsValue().Family[field.key]?.insuranceStatus === "None") {
    return <UninsureFeild form={form} formName={formName} field={field} />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
