import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../users/redux/users.slice';

export const appStore = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
