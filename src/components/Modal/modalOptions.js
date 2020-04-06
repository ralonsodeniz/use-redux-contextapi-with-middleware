import { lazy } from "react";

const lazyCounterManager = lazy(() =>
  import("../CounterManager/CounterManager")
);

export default {
  COUNTER_MANAGER: lazyCounterManager
};
