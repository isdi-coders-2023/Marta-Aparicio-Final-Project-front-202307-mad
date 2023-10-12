import { useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import { UserRecipeCard } from '../user.recipe/user.recipe';
import styles from '../users.recipes/users.recipes.module.scss';
export default function UserRecipes() {
  const {
    recipes,
    loadRecipes,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    pageCount,
    pageSize,
  } = useRecipes();
  const userRecipes = recipes.filter(
    (recipe) => recipe.author.id === localStorage.getItem('userId')
  ) as Recipe[];

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  let paginatedData = userRecipes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <main className={styles.main}>
      <h3>TUS RECETAS</h3>
      <ul>
        {paginatedData.map((item: Recipe, index: number) => (
          <UserRecipeCard key={index} recipe={item}></UserRecipeCard>
        ))}
      </ul>
      {userRecipes.length > 4 && (
        <>
          <div>
            <span
              className={styles.previousNextButtons}
              role="button"
              onClick={handlePreviousPage}
            >
              <GrFormPrevious />
            </span>
            <span
              className={styles.previousNextButtons}
              role="button"
              onClick={handleNextPage}
            >
              <GrFormNext />
            </span>
          </div>
          <span>
            {currentPage}/{pageCount}
          </span>
        </>
      )}
    </main>
  );
}
