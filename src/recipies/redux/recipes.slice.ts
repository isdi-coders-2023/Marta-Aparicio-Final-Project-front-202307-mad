import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../model/recipes';
import { addThunk, eraseThunk, loadThunk, updateThunk } from './recipes.thunk';

export type RecipesState = {
  recipes: Recipe[];
  loadState: 'loading' | 'loaded' | 'idle' | 'error';
  error: Error | null;
};

const initialState: RecipesState = {
  recipes: [],
  loadState: 'idle',
  error: null,
};
// localStorage.setItem('initialState', JSON.stringify(initialState));

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    category: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.recipes = state.recipes.filter(
        (recipe) => recipe.category === category
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadThunk.pending, (state) => ({
      ...state,
      loadState: 'loading',
    }));
    builder.addCase(
      loadThunk.fulfilled,
      (state, { payload }: { payload: Recipe[] }) => ({
        ...state,
        recipes: payload,
        loadState: 'loaded',
      })
    );
    builder.addCase(loadThunk.rejected, (state) => {
      const error = new Error('Error loading recipes');
      return {
        ...state,
        loadState: 'error',
        error: error,
      };
    });
    builder.addCase(
      addThunk.fulfilled,
      (state, { payload }: { payload: Recipe }) => {
        state.recipes.push(payload);
      }
    );
    builder.addCase(addThunk.rejected, (state) => {
      const error = new Error('Error creating recipes');
      state.loadState = 'error';
      state.error = error;
    });
    builder.addCase(
      updateThunk.fulfilled,
      (state, { payload }: { payload: Recipe }) => {
        state.recipes = state.recipes.map((item) =>
          item.id === payload.id ? payload : item
        );
      }
    );
    builder.addCase(updateThunk.rejected, (state) => {
      const error = new Error('Error updating recipes');
      state.loadState = 'error';
      state.error = error;
    });
    builder.addCase(
      eraseThunk.fulfilled,
      (state, { payload }: { payload: Recipe['id'] }) => {
        state.recipes = state.recipes.filter((item) => item.id !== payload);
      }
    );
    builder.addCase(eraseThunk.rejected, (state) => {
      const error = new Error('Error deleting recipes');
      state.loadState = 'error';
      state.error = error;
    });
  },
});

export const actions = recipesSlice.actions;
export default recipesSlice.reducer;
