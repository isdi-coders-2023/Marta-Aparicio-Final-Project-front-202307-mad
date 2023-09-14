import { User } from '../model/user';

export type Logged = {
  user: User;
  token: string;
};
