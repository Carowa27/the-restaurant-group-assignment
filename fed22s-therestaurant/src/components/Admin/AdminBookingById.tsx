import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { getBookings } from "../../services/bookingServices";
import { AdminEditButton, SearchBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { AdminSearchBookingInput } from "../styled/Inputs";
import { BookingInfoUL } from "../styled/Lists";
import { BookingDetailWrapper } from "../styled/Wrappers";

export const AdminBookingById = () => {
  return <></>;
};
