import { User } from "../models/User";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
}

// export const UsersReducer = (drinks: User[], action: IAction) => {
//   switch (action.type) {
//     case ActionType.ADDED: {
//       return [...users, new User(action.payload("", "", "", ""))];
//     }
//   }
// };
