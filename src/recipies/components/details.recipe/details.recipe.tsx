import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../details.recipe/details.module.scss';
export default function RecipeDetails() {
  const { recipes, loadRecipes } = useRecipes();
  const { token } = useUsers();

  const { id } = useParams();

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  const recipe = recipes.find((recipe) => recipe.id === id) as Recipe;

  return (
    <>
      {!token && (
        <main className={styles.noToken}>
          <p>Para acceder debe registrarse</p>
          <Link to="/registrate">Regístrate</Link>
        </main>
      )}
      {token && (
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
      )}
    </>
  );
}
