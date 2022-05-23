import { createAction } from "@reduxjs/toolkit";

export const updateDayCount = createAction("app/updateDayCount");
export const addDay = createAction("app/addDay");
export const removeDay = createAction("app/removeDay");
export const updateMsCount = createAction("app/updateMsCount");
export const addRound = createAction("app/addRound");
export const removeRound = createAction("app/removeRound");
