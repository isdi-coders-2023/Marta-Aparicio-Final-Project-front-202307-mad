import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData, User, UserNoId } from '../../model/user';
import { Logged } from '../../types/logged';
import { ApiUsersRepository } from '../services/users.repository';

// Thunk -> función devuelve un actionCreator
// Parámetros
// - nombre acción
// - function action creator

// Tipado
// - retorno de la función -> payload de la acción síncrona
// - parámetros de la función

export const registerThunk = createAsyncThunk<
  User,
  {
    repo: ApiUsersRepository;
    user: UserNoId;
  }
>('users/register', async ({ repo, user }) => {
  const newUser = await repo.create(user);
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
  return LoggedUser;
});
