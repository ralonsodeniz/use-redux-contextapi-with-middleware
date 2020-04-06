import React, { useCallback } from "react";

import { useDispatch } from "../../redux/reduxHooks";
import {
  countAdd,
  countSubtract,
  countReset,
  fetchCharactersCount,
} from "../../redux/actions/counterActions";

const CounterManager = () => {
  const dispatch = useDispatch();

  const handleCountAdd = useCallback(() => {
    dispatch(countAdd());
  }, [dispatch]);

  const handleCountSubtract = useCallback(() => {
    dispatch(countSubtract());
  }, [dispatch]);

  const handleCountReset = useCallback(() => {
    dispatch(countReset());
  }, [dispatch]);

  const handleFetchCharactersCount = useCallback(() => {
    dispatch(fetchCharactersCount());
  }, [dispatch]);

  return (
    <div>
      <button type="button" onClick={handleCountAdd}>
        ADD
      </button>
      <button type="button" onClick={handleCountSubtract}>
        SUBTRACT
      </button>
      <button type="button" onClick={handleCountReset}>
        RESET
      </button>
      <button type="button" onClick={handleFetchCharactersCount}>
        CHAR COUNT
      </button>
    </div>
  );
};

export default CounterManager;
