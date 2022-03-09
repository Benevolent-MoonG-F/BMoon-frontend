import { createAction } from "@reduxjs/toolkit";

export const addTransaction = createAction("transaction/addTransaction");
export const clearTransaction = createAction("transaction/clearTransaction");
export const closeTransaction = createAction("transaction/closeTransaction");
