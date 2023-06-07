import { createContext, Dispatch } from "react";
import { IBooking } from "../models/IBooking";
import { IAction } from "../reducers/bookingReducer";

export const BookingContext = createContext<IBooking[]>([]);

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
