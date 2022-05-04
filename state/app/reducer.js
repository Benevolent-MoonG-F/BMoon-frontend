import {
  updateDayCount,
  addDay,
  removeDay,
  updateMsCount,
  addRound,
  removeRound,
} from "./action";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  dayCount: undefined,
  MaxDayCount: undefined,
  msCount: undefined,
  MaxMsCount: undefined,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateDayCount, (state, { payload: { dayCount } }) => {
      return {
        ...state,

        dayCount: dayCount,
        MaxDayCount: dayCount,
      };
    })

    .addCase(updateMsCount, (state, { payload: { msCount } }) => {
      return {
        ...state,

        msCount: msCount,
        MaxMsCount: msCount,
      };
    })

    .addCase(addRound, (state, { payload: {} }) => {
      return {
        ...state,

        msCount: state.msCount + 1,
      };
    })

    .addCase(removeRound, (state, { payload: {} }) => {
      return {
        ...state,

        msCount: state.msCount - 1,
      };
    })

    .addCase(addDay, (state, { payload: {} }) => {
      return {
        ...state,

        dayCount: state.dayCount + 1,
      };
    })

    .addCase(removeDay, (state, { payload: {} }) => {
      return {
        ...state,

        dayCount: state.dayCount - 1,
      };
    })
);
