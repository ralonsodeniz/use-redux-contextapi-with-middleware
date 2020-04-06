import modalReducer, { MODAL_INITIAL_STATE } from "./reducers/modalReducer";
import counterReducer, {
  COUNTER_INITIAL_STATE,
} from "./reducers/counterReducer";
import { combineReducers } from "./helpers/combineReducers";

export const INITIAL_STATE = {
  modal: MODAL_INITIAL_STATE,
  counter: COUNTER_INITIAL_STATE,
};

const rootReducer = combineReducers({
  modal: modalReducer,
  counter: counterReducer,
});

export default rootReducer;
