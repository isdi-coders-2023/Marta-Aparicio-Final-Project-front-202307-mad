import { BiEditAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import styles from './users.recipe.module.scss';

type Props = {
  recipe: Recipe;
};

export function UserRecipeCard({ recipe }: Props) {
  const { deleteRecipes } = useRecipes();
  const { token } = useUsers();
  const onClick = () => deleteRecipes(recipe.id, token!);

  return (
    <li className={styles.li}>
      <Link to={`/recetas/${recipe.id}`}>
        <h2>{recipe.name}</h2>
        <img src={recipe.img.url} alt="Receta" width="200" />
      </Link>
      <div>
        <span role="button" className="button" onClick={onClick}>
          x
        </span>
        <Link to={`/añadir-receta/${recipe.id}`}>
          <BiEditAlt />
        </Link>
      </div>
    </li>
  );
}
