import { useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../details.recipe/details.module.scss';
export default function RecipeDetails() {
  const { recipes } = useRecipes();

  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === id) as Recipe;

  return (
    <main className={styles.main}>
      <div>
        <h2>{recipe.name}</h2>
        <span>{recipe.category}</span>
        <img src={recipe.img.url} width="400px" alt="Receta" />
        <h3>Ingredientes</h3>
        <span>{recipe.ingredients}</span>

        <h3>Preparación</h3>
        <p>{recipe.mode}</p>
      </div>
    </main>
  );
}
