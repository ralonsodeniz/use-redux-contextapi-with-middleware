import React, { createContext } from "react";

import rootReducer, { INITIAL_STATE } from "./rootReducer";
import { useReducerWithMiddlewares } from "./reduxHooks";

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducerWithMiddlewares(
    rootReducer,
    INITIAL_STATE
  );

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Provider;
