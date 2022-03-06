import { addClaim, clearClaim, addCharity } from "./action";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  open: false,
  close: true,
  betId: "",
  dayCount: "",
  assetName: "",
  DailyRocket: false,
  charity: "",
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      addClaim,
      (
        claim,
        { payload: { open, betId, dayCount, assetName, DailyRocket } }
      ) => {
        claim.open = open;
        claim.close = true;
        claim.betId = betId;
        claim.dayCount = dayCount;
        claim.assetName = assetName;
        claim.DailyRocket = DailyRocket;
      }
    )
    .addCase(clearClaim, (claim, { payload: { close } }) => {
      claim.open = false;
      claim.close = close;
      claim.betId = "";
      claim.dayCount = "";
      claim.assetName = "";
      claim.DailyRocket = false;
    })
    .addCase(addCharity, (claim, { payload: { charity } }) => {
      return {
        ...claim,
        charity: charity,
      };
    })
);
