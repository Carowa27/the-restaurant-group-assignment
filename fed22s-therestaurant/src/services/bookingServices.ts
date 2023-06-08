import axios from "../../node_modules/axios/index";
import { IBooking } from "../models/IBooking";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getBookings = async () => {
  try {
    const dataFromLs = localStorage.getItem("bookings");

    if (dataFromLs) {
      return JSON.parse(dataFromLs);
    }

    const response = await get<IBooking>(
      "http://localhost:4000/api/v1/bookings/"
    );

    console.log(response.data);

    return response;
  } catch (error) {
    throw new Error("Fail to get data from this  API:" + error);
  }
};
