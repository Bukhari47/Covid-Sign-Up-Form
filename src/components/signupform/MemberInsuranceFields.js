import React from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

function MemberInsuranceFields({ insuranceStatusCheck, formName, MUUID }) {
  console.log("M I F ==>", insuranceStatusCheck, formName, MUUID);
  let uuid = insuranceStatusCheck.find((check) => {
    return MUUID === check.uuid;
  });
  if (uuid?.uuid === MUUID && uuid?.value === "Other") {
    return <InsuranceFeilds formName={formName} />;
  }
  if (uuid?.uuid === MUUID && uuid?.value === "None") {
    return <UninsureFeild formName={formName} />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
