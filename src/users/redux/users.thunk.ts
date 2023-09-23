import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData, User, UserNoId } from '../../model/user';
import { Logged } from '../../types/logged';
import { ApiUsersRepository } from '../services/users.repository';

export const registerThunk = createAsyncThunk<
  User,
  {
    repo: ApiUsersRepository;
    user: UserNoId;
  }
>('users/register', async ({ repo, user }) => {
  const newUser = await repo.register(user);
  return newUser;
});

export const loginThunk = createAsyncThunk<
  Logged,
  {
    repo: ApiUsersRepository;
    user: LoginData;
  }
>('users/login', async ({ repo, user }) => {
  const LoggedUser = await repo.login(user);
  localStorage.setItem('userToken', LoggedUser.token) as string | undefined;
  localStorage.setItem('userId', LoggedUser.user.id) as string | undefined;
  return LoggedUser;
});
