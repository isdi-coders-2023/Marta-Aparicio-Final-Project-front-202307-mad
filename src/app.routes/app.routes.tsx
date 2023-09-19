import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MenuOption } from '../../types/menu';
const HomePage = lazy(() => import('../home/home'));
const RegisterForm = lazy(
  () => import('../../users/components/registerUser/registerForm')
);
const ErrorPage = lazy(() => import('../error-page/error-page'));

type Props = {
  options: MenuOption[];
};
export function AppRoutes({ options }: Props) {
  const paths = options.map((item) => item.path);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path={paths[0]} element={<HomePage></HomePage>}></Route>
        <Route path={paths[1]} element={<RegisterForm></RegisterForm>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
