import { useNavigate } from "react-router-dom";
import axios from "../../node_modules/axios/index";

import { IApiResponse } from "../models/IBooking";
import { IBooking } from "../models/IBooking";
import IBookingResponse from "../utils/IBookingResponse";

// const navigate = useNavigate();

const get = async <T>(url: string) => {
  return await axios.get<T>(url);
};

export const getBookings = async () => {
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

//vet inte om denna funkar än
export async function updateBooking(id: any, updatedData: any) {
  try {
    const response = await axios.put(
      `http://localhost:4000/api/v1/bookings/${id}`,
      updatedData,
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

//     const response = await axios.get<IBookingResponse>(
//       "http://localhost:4000/api/v1/bookings/"
//     );

//     console.log(response.data.data);

//     return response.data.data;
//   } catch (error) {
//     throw new Error("Fail to get data from this  API:" + error);
//   }
// };

// export async function getBookings(): Promise<IBooking[]> {
//   let response = await axios.get<IBookingResponse>(
//     "http://localhost:4000/api/v1/bookings/"
//   );
//   return response.data.data;

// }
