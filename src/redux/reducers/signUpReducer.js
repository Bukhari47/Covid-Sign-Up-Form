import * as actionTypes from "../actions/actionTypes";
initialState = {
  personalDetails: {},
  insuranceDetails: {},
  familyMemberDetails: [],
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PETAINT_PERSONAL_DETAILS:
      return petaintPersonalDetails(state, action);
    default:
      return state;
  }
};

const petaintPersonalDetails = (state, action) => {
  console.log(state, action);
  return {
    ...state,
  };
};
