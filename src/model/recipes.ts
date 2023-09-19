import { WithId } from '../types/id';
import { User } from './user';

export type RecipeNoId = {
  name: string;
  category: string;
  Ingredients: string;
  Mode: string;
  autor: User;
  img: string;
};

export type Recipe = WithId & RecipeNoId;
