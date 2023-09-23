import { WithId } from '../types/id';
import { Recipe } from './recipes';

export type LoginData = {
  userName: string;
  password: string;
};
export type UserNoId = LoginData & {
  email: string;
  recipes: Recipe[];
};

export type User = WithId & UserNoId;
