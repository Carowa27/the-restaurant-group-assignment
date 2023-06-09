import { createContext } from "react";
import { User } from "../models/User";

export interface IUsersContext {
  users: User[];
  add: (content: User) => void;
}

export const UsersContext = createContext<IUsersContext>({
  users: [new User("", "", "", "")],

  add: (text: User) => {
    return;
  },
});
