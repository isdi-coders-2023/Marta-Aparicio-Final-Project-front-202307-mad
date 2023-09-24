import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe, RecipeNoId } from '../../model/recipes';
import { ApiRecipesRepository } from '../services/recipes.api.repository';

export const loadThunk = createAsyncThunk<Recipe[], ApiRecipesRepository>(
  'recipes/load',
  async (repo) => {
    const recipes = await repo.getAll();
    return recipes;
  }
);

export const addThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    formData: FormData;
    token: string;
  }
>('recipes/add', async ({ repo, formData, token }) => {
  const fullRecipe = await repo.create(formData, token);
  return fullRecipe;
});

export const loadByIdThunk = createAsyncThunk<
  Recipe,
  { repo: ApiRecipesRepository; id: string; token: string }
>('storms/loadById', async ({ repo, id, token }) => {
  const storm = await repo.getById(id, token);
  return storm;
});

export const updateThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    recipe: Partial<RecipeNoId>;
    id: string;
  }
>('recipes/update', async ({ repo, recipe, id }) => {
  const updatedRecipe = await repo.update(recipe, id);
  return updatedRecipe;
});

export const eraseThunk = createAsyncThunk<
  Recipe['id'],
  {
    repo: ApiRecipesRepository;
    recipe: Recipe['id'];
    token: string;
  }
>('recipes/erase', async ({ repo, recipe, token }) => {
  await repo.delete(recipe, token);
  return recipe;
});
