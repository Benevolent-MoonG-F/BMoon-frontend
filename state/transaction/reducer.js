import { addTransaction, clearTransaction, closeTransaction } from "./action";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  open: false,
  pending: false,
  transactionState: "",
  placingOrder: false,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      addTransaction,
      (state, { payload: { open, transactionState, placingOrder } }) => {
        return {
          ...state,
          open: open,
          transactionState: transactionState,
          placingOrder: placingOrder,
        };
      }
    )
    .addCase(clearTransaction, (state, { payload: { transactionState } }) => {
      return {
        ...state,

        transactionState: transactionState,
      };
    })
    .addCase(closeTransaction, (state, { payload: {} }) => {
      return {
        ...state,
        open: false,
        transactionState: "",
        placingOrder: false,
      };
    })
);
