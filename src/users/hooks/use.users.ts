import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginData, UserNoId } from '../../model/user';
import { ApiUsersRepository } from '../services/users.repository';
import { AppDispatch, RootState } from '../store/store';

import { loginThunk, registerThunk } from '../redux/users.thunk';

export const urlBase = ' http://localhost:4300/users';

export function useUsers() {
  const repo = useMemo(() => new ApiUsersRepository(urlBase), []);

  //const [notes, setNotes] = useState<Note[]>([]);

  const usersState = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  // Ejecuta el callback
  // una vez al renderizar el componente por vez primera
  // cada vez que cambie una variable del array de dependencias

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
