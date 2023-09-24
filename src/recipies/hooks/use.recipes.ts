import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';

import { Recipe } from '../../model/recipes';
import { addThunk, eraseThunk, loadThunk } from '../redux/recipes.thunk';
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

  const addRecipes = async (formData: FormData, token: string) => {
    recipesDispatch(addThunk({ repo, formData, token }));
  };

  const deleteRecipes = async (recipe: Recipe['id'], token: string) => {
    recipesDispatch(eraseThunk({ repo, recipe, token }));
  };
  return {
    recipes,
    loadState,
    error,
    loadRecipes,
    addRecipes,
    deleteRecipes,
  };
}
