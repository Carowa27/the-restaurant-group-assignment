import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./components/Admin/Admin";
import { BookingConfirmedPage } from "./pages/BookingConfirmedPage";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";
import { LandingPage } from "./pages/LandingPage";
import { Layout } from "./pages/Layout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
        path: "/bookingconfirmed",
        element: <BookingConfirmedPage></BookingConfirmedPage>,
      },
    ],
  },
]);
