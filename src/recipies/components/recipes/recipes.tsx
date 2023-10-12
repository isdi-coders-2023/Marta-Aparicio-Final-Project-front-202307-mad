import { SyntheticEvent, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import { RecipeCard } from '../recipe/recipe';
import styles from './recipes.module.scss';
export default function Recipes() {
  const {
    recipes,
    loadRecipes,
    category,
    handleNextPage,
    handlePreviousPage,
    paginatedData,
    currentPage,
    pageCount,
  } = useRecipes();

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  const handleCategories = (ev: SyntheticEvent) => {
    const selectedCategory = (ev.target as HTMLSelectElement).value;
    category(selectedCategory!);
  };

  return (
    <main className={styles.main}>
      <nav>
        <select defaultValue={''} onChange={handleCategories}>
          <option value="" disabled>
            Selecciona un tipo de recetas ▼
          </option>
          <option value="Legumbres">Legumbres</option>
          <option value="Pasta">Pasta</option>
          <option value="Pescado">Pescado</option>
          <option value="Carne">Carne</option>
          <option value="Verdura">Verdura</option>
          <option value="Otros">Otros</option>
        </select>
      </nav>
      <ul>
        {paginatedData.map((item: Recipe) => (
          <RecipeCard key={item.id} recipe={item}></RecipeCard>
        ))}
      </ul>
      {recipes.length > 4 && (
        <>
          <div className="previousNextButtons">
            <span role="button" onClick={handlePreviousPage}>
              <GrFormPrevious />
            </span>
            <span role="button" onClick={handleNextPage}>
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
