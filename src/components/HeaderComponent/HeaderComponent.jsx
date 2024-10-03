import { NavLink } from 'react-router-dom';
import css from './HeaderComponent.module.css';

export const HeaderComponent = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.linkActive : css.link)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? css.linkActive : css.link)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};
