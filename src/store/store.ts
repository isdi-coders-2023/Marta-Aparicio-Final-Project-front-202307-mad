import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../recipies/redux/recipes.slice';
import usersReducer from '../users/redux/users.slice';

export const appStore = configureStore({
  reducer: {
    users: usersReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
