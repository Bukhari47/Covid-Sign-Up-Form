import React, { useState } from "react";
import InsuranceFeilds from "../comon/InsuranceFeilds";
import UninsureFeild from "../comon/UninsureFeild";

function MemberInsuranceFields({ insuranceStatusCheck, memberUUID }) {
  const FilterField = () => {
    return (
      <>
        {insuranceStatusCheck?.find((check) => {
          memberUUID === check.uuid && check.value === "Other";
          return <InsuranceFeilds />;
        })}
      </>
    );
  };

  const [otherFields, setOtherFields] = useState([]);
  const [noneField, setNoneField] = useState([]);

  // setOtherFields([
  //   ...otherFields,
  // ]);
  // setNoneField([
  //   ...noneField,
  //   check.uuid === memberUUID && check.value === "None",
  // ]);
  // });

  console.log("Other-->", otherFields);
  console.log("None", noneField);
  return (
    <>
      <FilterField />
    </>
  );
  // return;
  // if (uuid?.uuid === memberUUID && uuid?.value === "Other") {
  //   return <InsuranceFeilds />;
  // }
}

export default MemberInsuranceFields;
