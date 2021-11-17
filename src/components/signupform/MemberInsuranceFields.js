import React from "react";
import InsuranceFeilds from "./InsuranceFeilds";
import UninsureFeild from "./UninsureFeild";

function MemberInsuranceFields({ insuranceStatusCheck }) {
  console.log(insuranceStatusCheck);

  if (insuranceStatusCheck === "Same") return <></>;
  else if (insuranceStatusCheck === "Other") return <InsuranceFeilds />;
  else return <UninsureFeild />;
}

export default MemberInsuranceFields;
