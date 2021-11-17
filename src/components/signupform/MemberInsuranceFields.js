import React from "react";
import InsuranceFeilds from "./InsuranceFeilds";
import UninsureFeild from "./UninsureFeild";

function MemberInsuranceFields({ insuranceStatusCheck, memberUUID }) {
  console.log(
    "M I F ==>",
    insuranceStatusCheck,
    insuranceStatusCheck.find((check) => check.uuid === memberUUID),
    memberUUID === insuranceStatusCheck.uuid,
    memberUUID
  );
  let uuid = insuranceStatusCheck.find((check) => {
    return memberUUID === check.uuid;
  });
  if (uuid?.uuid === memberUUID && uuid?.value === "Other") {
    return <InsuranceFeilds />;
  }
  if (uuid?.uuid === memberUUID && uuid?.value === "None") {
    return <UninsureFeild />;
  } else {
    return <></>;
  }
}

export default MemberInsuranceFields;
