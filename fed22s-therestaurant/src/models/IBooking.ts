export interface IBooking {
  sessiondate: string;
  firstname: string;
  lastname: string;
  sessionstart: string;
  guests: number;
  date: string;
  ordernumber: number;
  id: number;
}

export interface IApiResponse {
  bookings: IBooking[];
}
