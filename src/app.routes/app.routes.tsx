import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../components/home/home'));
const RegisterForm = lazy(
  () => import('../../src/users/components/registerUser/registerForm')
);
const Recipes = lazy(() => import('../recipies/components/recipes/recipes'));
const ErrorPage = lazy(() => import('../components/error-page/error-page'));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/recetas" element={<Recipes></Recipes>}></Route>
        <Route path="/login" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
