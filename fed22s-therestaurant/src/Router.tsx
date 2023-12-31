import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { BookingConfirmedPage } from "./pages/BookingConfirmedPage";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";
import { LandingPage } from "./pages/LandingPage";
import { Layout } from "./components/Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { AdminBookingById } from "./components/Admin/AdminBookingById";
import { BookingDeleted } from "./pages/BookingDeleted";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
        index: true,
      },
      {
        path: "/booking",
        element: <BookingPage></BookingPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/bookinginfo/:bookingType/:id",
        element: <BookingConfirmedPage></BookingConfirmedPage>,
      },
      {
        path: "/bookingdeleted",
        element: <BookingDeleted></BookingDeleted>,
      },
    ],
  },
]);
