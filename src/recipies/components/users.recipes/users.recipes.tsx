import { useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import { UserRecipeCard } from '../user.recipe/user.recipe';
import styles from '../users.recipes/users.recipes.module.scss';
export default function UserRecipes() {
  const {
    loadRecipes,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    pageCount,
    paginatedDataUser,
    userRecipes,
  } = useRecipes();

  useEffect(() => {
    loadRecipes();
    console.log('entrando en el useEffect');
  }, [loadRecipes, currentPage]);

  return (
    <main className={styles.main}>
      <h3>TUS RECETAS</h3>
      <ul>
        {paginatedDataUser.map((item: Recipe) => (
          <UserRecipeCard key={item.id} recipe={item}></UserRecipeCard>
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
