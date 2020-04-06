import { useContext, useRef, useReducer, useCallback, useMemo } from "react";

import { INITIAL_STATE } from "./rootReducer";
import logger from "./middlewares/logger";
import { StateContext, DispatchContext } from "./store";

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export const useSelector = (selector) => {
  const state = useContext(StateContext);
  return useMemo(() => selector(state), [selector, state]);
};

export const useReducerWithMiddlewares = (reducer, initialState) => {
  let prevState = useRef({ state: INITIAL_STATE, action: null });
  const [state, baseDispatch] = useReducer(reducer, initialState);

  const dispatch = useCallback((action) => {
    if (typeof action === "function") return action(dispatch);
    prevState.current.action = action;
    baseDispatch(action);
  }, []);

  useMemo(() => {
    prevState.current.action &&
      logger(prevState.current.action, prevState.current.state, state);
    prevState.current.state = state;
    prevState.current.action = null;
  }, [state]);

  return [state, dispatch];
};
