import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../components/home/home'));
const RegisterForm = lazy(
  () => import('../../src/users/components/registerUser/registerForm')
);
const Recipes = lazy(() => import('../recipies/components/recipes/recipes'));
const RecipesDetails = lazy(
  () => import('../recipies/components/details.recipe/details.recipe')
);
const ErrorPage = lazy(() => import('../components/error.page/error.page'));
const UserRecipes = lazy(
  () => import('../recipies/components/users.recipes/users.recipes')
);
const CreateRecipes = lazy(
  () => import('../recipies/components/create.recipe/create.recipe')
);
const LoginForm = lazy(
  () => import('../../src/users/components/loginUser/loginForm')
);
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/recetas" element={<Recipes></Recipes>}></Route>
        <Route
          path="/recetas/:id"
          element={<RecipesDetails></RecipesDetails>}
        ></Route>
        <Route
          path="/registrate"
          element={<RegisterForm></RegisterForm>}
        ></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route
          path="/tus-recetas"
          element={<UserRecipes></UserRecipes>}
        ></Route>
        <Route
          path="/añadir-receta"
          element={<CreateRecipes></CreateRecipes>}
        ></Route>
        <Route
          path="/modificar-receta/:id"
          element={<CreateRecipes></CreateRecipes>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
