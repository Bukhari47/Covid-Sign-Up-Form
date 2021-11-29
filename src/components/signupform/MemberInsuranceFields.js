import React, { useEffect } from "react";
import InsuranceFeilds from "../comon/form_fields/InsuranceFeilds";
import UninsureFeild from "../comon/form_fields/UninsureFeild";

function MemberInsuranceFields({ formName, form, field }) {
  if (form.getFieldsValue().Family[field.name]?.insuranceStatus === "Other") {
    return <InsuranceFeilds form={form} formName={formName} field={field} />;
  }
  if (form.getFieldsValue().Family[field.name]?.insuranceStatus === "None") {
    return <UninsureFeild form={form} formName={formName} field={field} />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
