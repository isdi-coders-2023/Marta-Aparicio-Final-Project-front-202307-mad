import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginData, UserNoId } from '../../model/user';
import { AppDispatch, RootState } from '../../store/store';
import { ApiUsersRepository } from '../services/users.repository';

import { actions } from '../redux/users.slice';
import { loginThunk, registerThunk } from '../redux/users.thunk';

export const urlBase = ' http://localhost:4300/users';

export function useUsers() {
  const repo = useMemo(() => new ApiUsersRepository(urlBase), []);

  const { error, loadState, users, token } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  const register = async (user: UserNoId) => {
    dispatch(registerThunk({ repo, user }));
  };
  const login = async (user: LoginData) => {
    dispatch(loginThunk({ repo, user }));
  };
  const logout = () => {
    dispatch(actions.logoutUser);
    localStorage.removeItem('userToken');
  };

  return {
    logout,
    error,
    loadState,
    users,
    token,
    register,
    login,
  };
}
