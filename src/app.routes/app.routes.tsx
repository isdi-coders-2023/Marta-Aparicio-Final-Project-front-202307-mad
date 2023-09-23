import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../components/home/home'));
const RegisterForm = lazy(
  () => import('../../src/users/components/registerUser/registerForm')
);
const Recipes = lazy(() => import('../recipies/components/recipes/recipes'));
const RecipesDetails = lazy(
  () => import('../recipies/components/details-recipe/details.recipe')
);
const ErrorPage = lazy(() => import('../components/error-page/error-page'));
const UserRecipes = lazy(
  () => import('../recipies/components/users.recipes/users.recipes')
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
        <Route path="/login" element={<RegisterForm></RegisterForm>}></Route>
        <Route
          path="/tus-recetas"
          element={<UserRecipes></UserRecipes>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
