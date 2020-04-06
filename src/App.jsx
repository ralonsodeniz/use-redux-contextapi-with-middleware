import React, { useMemo } from "react";
import { useSelector } from "./redux/reduxHooks";
import { selectShowModal } from "./redux/reducers/modalReducer";

import InnerModal from "./components/Modal/InnerModal";
import Modal from "./components/Modal/Modal";
import CounterDisplay from "./components/CounterDisplay/CounterDisplay";

import "./App.css";

function App() {
  const showModal = useSelector(selectShowModal);

  return useMemo(
    () => (
      <div className="App">
        <header className="App-header">
          <CounterDisplay />
        </header>
        {showModal && (
          <Modal>
            <InnerModal />
          </Modal>
        )}
      </div>
    ),
    [showModal]
  );
}

export default App;
