import { Link } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import styles from '../recipe/recipe.module.scss';
type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <li className={styles.li}>
      <Link to={`/recetas/${recipe.id}`}>
        <h2>{recipe.name}</h2>
        <img src={recipe.img.url} alt="Receta" width="200px" />
      </Link>
    </li>
  );
}
