import { AiFillDelete } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useUsers } from '../../../users/hooks/use.users';
import styles from './user.recipe.module.scss';

type Props = {
  recipe: Recipe;
  onDelete: (recipe: string, token: string) => {};
};

export function UserRecipeCard({ recipe, onDelete }: Props) {
  const { token } = useUsers();

  return (
    <li className={styles.li}>
      <Link to={`/recetas/${recipe.id}`}>
        <h2>{recipe.name}</h2>
        <img src={recipe.img.url} alt="Receta" width="200" />
      </Link>
      <div>
        <span
          role="button"
          className="button"
          onClick={() => onDelete(recipe.id!, token!)}
        >
          <AiFillDelete />
        </span>
        <Link to={`/modificar-receta/${recipe.id}`}>
          <span>
            {' '}
            <BiEditAlt />
          </span>
        </Link>
      </div>
    </li>
  );
}
