import { WithId } from '../types/id';
import { Recipies } from './recipies';

export type LoginData = {
  userName: string;
  password: string;
};
export type UserNoId = LoginData & {
  firstName: string;
  lastName: string;
  email: string;
  recipies: Recipies[];
};

export type User = WithId & UserNoId;
