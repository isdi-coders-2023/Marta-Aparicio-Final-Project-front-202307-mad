import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';

import { Recipe, RecipeNoId } from '../../model/recipes';
import { actions } from '../redux/recipes.slice';
import {
  addThunk,
  eraseThunk,
  loadThunk,
  updateThunk,
} from '../redux/recipes.thunk';
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
  const updateRecipes = async (
    recipe: Partial<RecipeNoId>,
    id: string,
    token: string
  ) => {
    recipesDispatch(updateThunk({ repo, recipe, id, token }));
  };
  const deleteRecipes = async (recipe: Recipe['id'], token: string) => {
    recipesDispatch(eraseThunk({ repo, recipe, token }));
  };
  const category = async (category: string) => {
    await recipesDispatch(loadThunk(repo));
    recipesDispatch(actions.category(category));
  };
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;
  const pageCount = Math.ceil(recipes.length / pageSize);
  let paginatedData = recipes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
      paginatedData = [];
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginatedData = [];
    }
  };
  return {
    recipes,
    loadState,
    error,
    loadRecipes,
    addRecipes,
    deleteRecipes,
    updateRecipes,
    category,
    currentPage,
    pageSize,
    pageCount,
    paginatedData,
    handleNextPage,
    handlePreviousPage,
  };
}
