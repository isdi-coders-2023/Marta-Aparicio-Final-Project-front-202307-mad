import { SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../create.recipe/create.recipe.module.scss';
export default function AddRecipe() {
  const navigate = useNavigate();
  const { addRecipes, updateRecipes, recipes } = useRecipes();
  const { token } = useUsers();
  const { id } = useParams();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    if (!id) {
      addRecipes(formData, token!);
      navigate('/recetas');
    } else {
      const recipe = recipes.find((recipe) => recipe.id === id) as Recipe;

      const updatedRecipe: Partial<Recipe> = {
        ingredients:
          (formElement.elements.namedItem('ingredients') as HTMLInputElement)
            .value || recipe.ingredients,
        mode:
          (formElement.elements.namedItem('mode') as HTMLInputElement).value ||
          recipe.mode,
        name:
          (formElement.elements.namedItem('name') as HTMLInputElement).value ||
          recipe.name,
      };
      updateRecipes(updatedRecipe, id, token!);
      navigate('/tus-recetas');
    }
  };

  return (
    <main className={styles.main}>
      <form aria-label="create-recipe" onSubmit={handleSubmit}>
        {id ? (
          <legend>Modifica tu receta</legend>
        ) : (
          <legend>Crea tu receta</legend>
        )}
        <div>
          <select defaultValue={''}>
            <option value="" disabled>
              Selecciona el tipo de receta ▼
            </option>
            <option value="Legumbres">Legumbres</option>
            <option value="Pasta">Pasta</option>
            <option value="Pescado">Pescado</option>
            <option value="Carne">Carne</option>
            <option value="Verdura">Verdura</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        {!id ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Nombre receta"
              required
            />
            <input
              type="text"
              name="ingredients"
              placeholder="Ingredientes"
              required
            />
            <input
              type="text"
              name="mode"
              placeholder="Modo preparación"
              required
            />
            <label htmlFor="img">Sube tu imagen</label>
            <input
              type="file"
              placeholder="Sube la imagen"
              name="img"
              id="img"
              accept="img/png, img/jpeg, img/jpg"
              required
            />
          </>
        ) : (
          <>
            <input type="text" name="name" placeholder="Nombre receta" />
            <input type="text" name="ingredients" placeholder="Ingredientes" />
            <input type="text" name="mode" placeholder="Modo preparación" />
          </>
        )}

        <button aria-label="send-button" type="submit">
          Enviar
        </button>
      </form>
    </main>
  );
}
