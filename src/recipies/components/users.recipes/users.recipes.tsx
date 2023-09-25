import { useEffect } from 'react';
import { Recipe } from '../../../model/recipes';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../recipes/recipes.module.scss';
import { UserRecipeCard } from '../user.recipe/user.recipe';
export default function UserRecipes() {
  const { recipes, loadRecipes } = useRecipes();
  const { currentUser } = useUsers();

  const userRecipes = recipes.filter(
    (recipe) => recipe.author.id === currentUser.user.id
  ) as Recipe[];

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <main className={styles.main}>
      <h2>TUS RECETAS</h2>
      <ul>
        {userRecipes.map((item: Recipe, index: number) => (
          <UserRecipeCard key={index} recipe={item}></UserRecipeCard>
        ))}
      </ul>
    </main>
  );
}
