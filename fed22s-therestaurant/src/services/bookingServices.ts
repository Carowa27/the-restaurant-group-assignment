import axios from "../../node_modules/axios/index";
import { IBooking } from "../models/IBooking";
import IBookingResponse from "../utils/IBookingResponse";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getBookings = async () => {
  try {
    const dataFromLs = localStorage.getItem("bookings");

    if (dataFromLs) {
      return JSON.parse(dataFromLs);
    }

    const response = await axios.get<IBookingResponse>(
      "http://localhost:4000/api/v1/bookings/"
    );

    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    throw new Error("Fail to get data from this  API:" + error);
  }
};

// export async function getBookings(): Promise<IBooking[]> {
//   let response = await axios.get<IBookingResponse>(
//     "http://localhost:4000/api/v1/bookings/"
//   );
//   return response.data.data;
// }
