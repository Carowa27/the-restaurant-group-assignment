// import axios from "axios";
// import { IApiReponse } from "./../models/IBooking";

// const get = async <T>(url: string) => {
//   return await axios.get<T>(url);
// };

// export const getBookings = async () => {
//   try {
//     const dataFromLs = localStorage.getItem("bookings");

//     if (dataFromLs) {
//       return JSON.parse(dataFromLs);
//     }

//     const response = await get<IApiReponse>("url");

//     return response.data.bookings;
//   } catch {
//     throw new Error("Could not get data from api");
//   }
// };
