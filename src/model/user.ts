import { WithId } from '../types/id';
import { Recipies } from './recipies';

export type LoginData = {
  userName: string;
  password: string;
};
export type UserNoId = LoginData & {
  email: string;
  recipies: Recipies[];
};

export type User = WithId & UserNoId;
