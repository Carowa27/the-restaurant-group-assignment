export interface IBooking {
  firstname: string;
  lastname: string;
  sessionstart: number;
  guests: number;
  date: string;
  ordernumber: number;
  _id: number;
}

export interface IApiReponse {
  bookings: IBooking[];
}
