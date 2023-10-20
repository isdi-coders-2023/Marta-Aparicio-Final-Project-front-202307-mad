/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUsers } from '../../users/hooks/use.users';
import style from './header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useUsers();

  return (
    <>
      <nav className={style['nav-container']}>
        <main>
          <Link to={'/'}>
            <img
              width="30"
              height="80"
              src="../../../pinapple.webp"
              alt="YummyPiñami"
            />
          </Link>

          <ul style={isMenuOpen ? { right: '0%' } : { right: '-150%' }}>
            <li>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li>
              <Link to={'/recetas'}>Recetas</Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link to={'/añadir-receta'}>Crea la tuya</Link>
                </li>
                <li>
                  <Link to={'/tus-recetas'}>Tus recetas</Link>
                </li>

                <li onClick={logout} className={style.login}>
                  <a href="/">Logout</a>
                  <FaUser />
                </li>
              </>
            ) : (
              <li className={style.login}>
                <Link to={'/login'}>Login</Link>
                <FaUser />
              </li>
            )}
          </ul>
          <section
            role="button"
            aria-label="button"
            className={style.menu}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </section>
        </main>
      </nav>
    </>
  );
}
