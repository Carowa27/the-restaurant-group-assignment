import { IBooking } from "../models/IBooking";

export interface IAction {
  type: string;
  payload: string;
}

export const BookingReducer = (
  podcasts: IBooking[],
  action: IAction
): IBooking[] => {
  switch (action.type) {
    case "getBookings": {
      saveToLs(JSON.parse(action.payload));
      return JSON.parse(action.payload);
    }

    default:
      break;
  }

  return podcasts;
};

const saveToLs = (bookings: IBooking[]) => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
};
