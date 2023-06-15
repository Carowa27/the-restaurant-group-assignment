import axios from "../../node_modules/axios/index";
import { IApiResponse } from "../models/IBooking";
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

    //     --
    //        const response = await axios.get<IBookingResponse>(
    //       "http://localhost:4000/api/v1/bookings/"
    //     );

    //     console.log(response.data.data);

    //     return response.data.data;
    //   } catch (error) {
    //     throw new Error("Fail to get data from this  API:" + error);
    //   }
    // };
    //     --

    const response = await get<IApiResponse>(
      "http://localhost:4000/api/v1/bookings/"
    );

    return response.data;
  } catch (error) {
    console.error("Ett fel uppstod", error);
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
    // return error.response.status;
  }
};

export async function createBooking(bookingData: any) {
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

export async function deleteBooking(id: any) {
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
