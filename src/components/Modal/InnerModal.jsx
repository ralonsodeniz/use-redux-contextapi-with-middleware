import React, { Suspense, useCallback } from "react";
import { useSelector, useDispatch } from "../../redux/reduxHooks";
import { createStructuredSelector } from "reselect";

import { closeModal } from "../../redux/actions/modalActions";
import {
  selectModalType,
  selectModalProps,
} from "../../redux/reducers/modalReducer";
import MODAL_OPTIONS from "./modalOptions";

import OnClickOutSide from "../OnClickOutside/OnClickOutside";

import InnerModalContainer from "./InnerModal.styles";

const selectInnerModalData = createStructuredSelector({
  modalType: selectModalType,
  modalProps: selectModalProps,
});

const InnerModal = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector(selectInnerModalData);
  const closeModalOnClickOutside = useCallback(() => dispatch(closeModal()), [
    dispatch,
  ]);
  const SpecificModal = MODAL_OPTIONS[modalType];

  return (
    <InnerModalContainer>
      <OnClickOutSide action={closeModalOnClickOutside}>
        <Suspense fallback={<div>Loading...</div>}>
          <SpecificModal {...modalProps} />
        </Suspense>
      </OnClickOutSide>
    </InnerModalContainer>
  );
};

export default InnerModal;
