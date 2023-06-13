export interface IBooking {
  sessiondate: string;
  firstname: string;
  lastname: string;
  sessionstart: string;
  guests: number;
  date: string;
  id: string;
}

export interface IApiResponse {
  bookings: IBooking[];
}
