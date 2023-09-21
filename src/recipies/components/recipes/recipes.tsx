import { useEffect } from 'react';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import { RecipeCard } from '../recipe/recipe';
import styles from './recipes.module.scss';
export default function Recipes() {
  const { recipes, loadRecipes } = useRecipes();

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <main className={styles.main}>
      <nav>
        <select defaultValue={''}>
          <option value="" disabled>
            Selecciona un tipo de recetas ▼
          </option>
          <option value="Ver todas">Ver todas</option>
          <option value="Legumbres">Legumbres</option>
          <option value="Pasta">Pasta</option>
          <option value="Pescado">Pescado</option>
          <option value="Carne">Carne</option>
          <option value="Verdura">Verdura</option>
          <option value="Otros">Otros</option>
        </select>
      </nav>
      <ul>
        {recipes.map((item: Recipe, index: number) => (
          <RecipeCard key={index} recipe={item}></RecipeCard>
        ))}
      </ul>
    </main>
  );
}
