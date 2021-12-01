import React, { useEffect } from "react";
import InsuranceFeilds from "./InsuranceFeilds.jsx";
import UninsureFeild from "./UninsureFeild.jsx";

function MemberInsuranceFields({ formName, form, field, fieldCol }) {
  if (form.getFieldsValue().Family[field.name]?.insuranceStatus === "Other") {
    return (
      <InsuranceFeilds
        form={form}
        fieldCol={fieldCol}
        formName={formName}
        field={field}
      />
    );
  }
  if (form.getFieldsValue().Family[field.name]?.insuranceStatus === "None") {
    return (
      <UninsureFeild
        fieldCol={fieldCol}
        form={form}
        formName={formName}
        field={field}
      />
    );
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
