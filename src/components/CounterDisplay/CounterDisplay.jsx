import React, { useCallback } from "react";

import { useSelector, useDispatch } from "../../redux/reduxHooks";
import { selectCount } from "../../redux/reducers/counterReducer";
import { openModal } from "../../redux/actions/modalActions";
import CounterManager from "../CounterManager/CounterManager";

const CounterDisplay = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const handleOpenModal = useCallback(() => {
    dispatch(
      openModal({
        modalType: "COUNTER_MANAGER",
        modalProps: {},
      })
    );
  }, [dispatch]);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={handleOpenModal}>
        Open counter manager
      </button>
      <CounterManager />
    </>
  );
};

export default CounterDisplay;
