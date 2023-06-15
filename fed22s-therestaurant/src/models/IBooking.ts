export interface IBooking {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
  _id: string;
  sessionstart: string;
  guests: number;
  date: string;
}

export interface IApiResponse {
  bookings: IBooking[];
}
