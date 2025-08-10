import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className={({ isActive }) => "menu__item" + (isActive ? " active" : "")}>Главная</NavLink>
      <NavLink to="/drift" className={({ isActive }) => "menu__item" + (isActive ? " active" : "")}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className={({ isActive }) => "menu__item" + (isActive ? " active" : "")}>Time Attack</NavLink>
      <NavLink to="/forza" className={({ isActive }) => "menu__item" + (isActive ? " active" : "")}>Forza Karting</NavLink>
    </nav>
  );
}
