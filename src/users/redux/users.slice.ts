import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../model/user';

import { Logged } from '../../types/logged';
import { loginThunk, registerThunk } from './users.thunk';

export type UsersState = {
  users: User[];
  login: boolean;
  token: string;
  loadState: 'loading' | 'loaded' | 'idle' | 'error';
  error: Error | null;
};

const initialState: UsersState = {
  users: [],
  login: false,
  token: '',
  loadState: 'idle',
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      registerThunk.fulfilled,
      (state, { payload }: { payload: User }) => {
        state.users.push(payload);
      }
    );

    builder.addCase(loginThunk.pending, (state) => {
      state.loadState = 'loading';
    });

    builder.addCase(
      loginThunk.fulfilled,
      (state, { payload }: { payload: Logged }) => {
        state.login = true;
        state.token = payload.token;
      }
    );
    builder.addCase(loginThunk.rejected, (state) => {
      const error = new Error('Error creating notes');
      state.loadState = 'error';
      state.error = error;
    });
  },
});

export const actions = usersSlice.actions;
export default usersSlice.reducer;
