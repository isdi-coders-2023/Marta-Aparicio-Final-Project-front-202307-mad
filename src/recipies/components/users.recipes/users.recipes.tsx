import { useEffect } from 'react';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../recipes/recipes.module.scss';
import { UserRecipeCard } from '../user.recipe/user.recipe';
export default function UserRecipes() {
  const { recipes, loadRecipes } = useRecipes();
  const userRecipes = recipes.filter(
    (recipe) => recipe.author.id === localStorage.getItem('userId')
  ) as Recipe[];

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <main className={styles.main}>
      <h3>TUS RECETAS</h3>
      <ul>
        {userRecipes.map((item: Recipe, index: number) => (
          <UserRecipeCard key={index} recipe={item}></UserRecipeCard>
        ))}
      </ul>
    </main>
  );
}
