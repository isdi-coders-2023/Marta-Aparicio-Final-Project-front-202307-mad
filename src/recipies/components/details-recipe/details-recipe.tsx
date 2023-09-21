import { Link, useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useRecipes } from '../../hooks/use.recipes';
import styles from './court-reviews.module.scss';

// type Props = {
//   recipe: Recipe;
// };
export function RecipeDetails() {
  const { recipes } = useRecipes();

  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === id) as Recipe;


  return (
    <div className={styles['main-div']}>
      <h2>{recipe.name}</h2>

      <img src={recipe.img.url} width="400px" alt="Receta" />
     <span></span>
      <Link role="button" id="backbutton" to={'}>
        Atrás
      </Link>
    </div>
  );
}
