import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import styles from '../create.recipe/create.recipe.module.scss';
export default function AddRecipe() {
  const navigate = useNavigate();
  const { addRecipes } = useRecipes();
  const { token } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    addRecipes(formData, token!);
    navigate('/tus-recetas');
  };

  return (
    <main className={styles.main}>
      <form aria-label="create-recipe" onSubmit={handleSubmit}>
        <legend>Crea tu receta</legend>
        <input type="text" name="name" placeholder="Nombre receta" required />
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
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredientes"
          // required
        />
        <input
          type="text"
          name="mode"
          placeholder="Modo preparación"
          // required
        />
        <input
          type="file"
          placeholder="Update storm image"
          name="img"
          accept="img/png, img/jpeg, img/jpg"
          required
        />

        <button aria-label="send-button" type="submit">
          Enviar
        </button>
      </form>
    </main>
  );
}
