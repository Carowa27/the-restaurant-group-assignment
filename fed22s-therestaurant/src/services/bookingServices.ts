import axios from "../../node_modules/axios/index";
import { IApiResponse, IBooking } from "../models/IBooking";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export async function getBookings() {
  try {
    const dataFromLs = localStorage.getItem("bookings");

    if (dataFromLs) {
      return JSON.parse(dataFromLs);
    }

    const response = await get<IApiResponse>(
      "http://localhost:4000/api/v1/bookings/"
    );

    return response.data;
  } catch (error) {
    throw new Error("Fail to get data from this  API:" + error);
  }
}
