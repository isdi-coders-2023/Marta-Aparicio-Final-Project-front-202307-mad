import { User } from '../model/user';

export type Logued = {
  user: User;
  token: string;
};
