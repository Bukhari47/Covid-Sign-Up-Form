import * as actionTypes from "actionTypes";
import reduxStore from "../reduxStore";

const setPetaintPersonalDetails = (action) => {
  console.log(action);
  return {
    type: actionTypes.PETAINT_PERSONAL_DETAILS,
  };
};

export const petaintPersonalDetals = (personalDetails) => {
  console.log("Personal Details", personalDetails);
};
