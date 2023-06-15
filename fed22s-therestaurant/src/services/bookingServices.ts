import axios from "../../node_modules/axios/index";
import { IApiResponse } from "../models/IBooking";
import { IBooking } from "../models/IBooking";

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getBookings = async (): Promise<IBooking[]> => {
  try {
    const dataFromLs = localStorage.getItem("bookings");

    if (dataFromLs) {
      const bookings: IBooking[] = JSON.parse(dataFromLs);
      return bookings;
    }

    const response = await get<IApiResponse>(
      "http://localhost:4000/api/v1/bookings/"
    );

    return response.data.data;
  } catch (error) {
    console.error("Ett fel uppstod", error);

    return [];
  }
};

export const getBookingById = async (id: string) => {
  try {
    let response = await axios.get<IBooking>(
      `http://localhost:4000/api/v1/bookings/` + id
    );

    return response.data;
  } catch (error: any) {
    console.error("Ett fel uppstod", error);
  }
};

export async function createBooking(bookingData: IBooking) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/bookings/",
      bookingData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Ett fel uppstod", error);
  }
}

export const updateBooking = async (
  id: string | undefined,
  updatedData: any
) => {
  try {
    const response = await axios.put<IBooking>(
      `http://localhost:4000/api/v1/bookings/` + id,
      updatedData
    );
    console.log(response.status);
    return response;
  } catch (error) {
    console.error("Ett fel uppstod", error);
  }
};

export async function deleteBooking(id: string) {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/bookings/` + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Ett fel uppstod", error);
  }
}
