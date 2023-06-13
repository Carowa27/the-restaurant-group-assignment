import { Link, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Booking } from "../components/Booking/Booking";

export const BookingPage = () => {
  const params = useParams();

  // const [selectedButton, setSelectedButton] = useState("");

  //create btn
  //om tryckt, öppna Booking.tsx och skicka med variabeln create
  //Booking.tsx öppnas då med form form create

  //update btn
  // om tryckt, öppnas Booking.tsx och skickar med variabeln update
  //Booking.tsx öppnas då med form form update

  //ändra om vilken kod som syns utan att ändra hela sidan.

  const [showCreateBooking, setShowCreateBooking] = useState(false);
  const [showUpdateBooking, setShowUpdateBooking] = useState(false);
  const changeToCreate = () => {
    setShowCreateBooking(true);
    // setSelectedButton("create");
  };
  const changeToMyBooking = () => {
    setShowUpdateBooking(true);
    // setSelectedButton("update");
  };

  const createMsg = "create";
  const updateMsg = "update";
  return (
    <>
      <button onClick={changeToCreate}>Skapa Bokning</button>
      <button onClick={changeToMyBooking}>Ändra bokning</button>
      {showCreateBooking && <Booking msg={createMsg}></Booking>}
      {showUpdateBooking && <Booking msg={updateMsg}></Booking>}
      {/* <Booking></Booking> */}
    </>
  );
};
