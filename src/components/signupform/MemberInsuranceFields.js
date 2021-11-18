import React from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

function MemberInsuranceFields({ insuranceStatusCheck, formName, key }) {
  console.log(
    "M I F ==>",
    insuranceStatusCheck,
    insuranceStatusCheck.find((check) => check.uuid === key),
    key === insuranceStatusCheck.uuid,
    key
  );
  let uuid = insuranceStatusCheck.find((check) => {
    return key === check.uuid;
  });
  if (uuid?.uuid === key && uuid?.value === "Other") {
    return <InsuranceFeilds formName={formName} />;
  }
  if (uuid?.uuid === key && uuid?.value === "None") {
    return <UninsureFeild formName={formName} />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
