import { useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import { UserRecipeCard } from '../user.recipe/user.recipe';
import styles from '../users.recipes/users.recipes.module.scss';
export default function UserRecipes() {
  const {
    loadRecipes,
    handlePreviousPage,
    currentPage,
    recipes,
    handleNextPage,
    pageSize,
    deleteRecipes,
    loadState,
  } = useRecipes();

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes, currentPage]);

  const userRecipes = recipes.filter(
    (recipe) => recipe.author.id === localStorage.getItem('userId')
  ) as Recipe[];

  let paginatedDataUser = userRecipes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const pageCount = Math.ceil(userRecipes.length / pageSize);

  return (
    <main className={styles.main}>
      <h3>TUS RECETAS</h3>
      {loadState === 'loading' && <div className={styles.spinner}></div>}
      {loadState === 'loaded' && (
        <ul>
          {paginatedDataUser.map((item: Recipe) => (
            <UserRecipeCard
              key={item.id}
              recipe={item}
              onDelete={deleteRecipes}
            ></UserRecipeCard>
          ))}
        </ul>
      )}

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
