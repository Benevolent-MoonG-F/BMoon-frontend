import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import claim from "./claim/reducer";
import transaction from "./transaction/reducer";

const PERSISTED_KEYS = ["user", "lists"];

const store = configureStore({
  reducer: {
    claim: claim,
    transaction: transaction,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true }),
    save({ states: PERSISTED_KEYS, disableWarnings: true }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: true }),
});

export default store;
