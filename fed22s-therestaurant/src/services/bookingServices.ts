import { useNavigate } from "react-router-dom";
import axios from "../../node_modules/axios/index";
import { IApiResponse } from "../models/IBooking";

// const navigate = useNavigate();

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

// export async function createBooking(bookingData: any) {
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/bookings/",
//       bookingData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.status === 200) {
//       navigate(`/bookingconfirmed`);
//     } else {
//       console.error("Något gick fel vid bokningen");
//     }
//   } catch (error) {
//     console.error("Ett fel uppstod", error);
//   }
// }
