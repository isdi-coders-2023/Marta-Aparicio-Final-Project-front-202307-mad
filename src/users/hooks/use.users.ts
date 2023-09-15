import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginData, UserNoId } from '../../model/user';
import { AppDispatch, RootState } from '../../store/store';
import { ApiUsersRepository } from '../services/users.repository';

import { loginThunk, registerThunk } from '../redux/users.thunk';

export const urlBase = ' http://localhost:4300/users';

export function useUsers() {
  const repo = useMemo(() => new ApiUsersRepository(urlBase), []);

  const usersState = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const register = async (user: UserNoId) => {
    dispatch(registerThunk({ repo, user }));
  };
  const login = async (user: LoginData) => {
    dispatch(loginThunk({ repo, user }));
  };
  return {
    users: usersState.users,
    loadState: usersState.loadState,
    error: usersState.error,
    register,
    login,
  };
}
