import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';

import { loadThunk } from '../redux/recipes.thunk';
import { ApiRecipesRepository } from '../services/recipes.api.repository';

export const urlBase = ' http://localhost:4300/recipes';
export function useRecipes() {
  const repo = useMemo(() => new ApiRecipesRepository(urlBase), []);

  const { recipes, loadState, error } = useSelector(
    (state: RootState) => state.recipes
  );
  const recipesDispatch = useDispatch<AppDispatch>();

  const loadRecipes = useCallback(async () => {
    recipesDispatch(loadThunk(repo));
  }, [repo, recipesDispatch]);

  return {
    recipes,
    loadState,
    error,
    loadRecipes,
  };
}
