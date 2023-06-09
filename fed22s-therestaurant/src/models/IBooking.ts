export interface IBooking {
  firstname: string;
  lastname: string;
  sessionstart: number;
  guests: number;
  date: string;
  ordernumber: number;
  id: number;
}

export interface IApiResponse {
  bookings: IBooking[];
}
