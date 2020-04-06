import { createSelector } from "reselect";

import COUNTER from "../types/counterTypes";

export const COUNTER_INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case COUNTER.COUNT_ADD:
      return { count: state.count + 1 };
    case COUNTER.COUNT_SUBTRACT:
      return { count: state.count - 1 };
    case COUNTER.COUNT_RESET:
      return { ...COUNTER_INITIAL_STATE };
    case COUNTER.SET_COUNT:
      return { count: action.payload };
    default:
      return state;
  }
};

export default counterReducer;

const selectCounter = (state) => state.counter;

export const selectCount = createSelector(
  [selectCounter],
  (counter) => counter.count
);
