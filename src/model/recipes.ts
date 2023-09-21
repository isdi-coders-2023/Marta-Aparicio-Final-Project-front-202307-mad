import { WithId } from '../types/id';
import { ImgData } from '../types/image';
import { User } from './user';

export type RecipeNoId = {
  name: string;
  category: 'Legumbres' | 'Pasta' | 'Verdura' | 'Otros' | 'Pescado' | 'Carnes';
  Ingredients: string;
  Mode: string;
  autor: User;
  img: ImgData;
};

export type Recipe = WithId & RecipeNoId;
