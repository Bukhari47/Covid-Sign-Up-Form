import { createStore } from "redux";

import reducer from "./reducers/signUpReducer";
const store = createStore(reducer);

export default store;
