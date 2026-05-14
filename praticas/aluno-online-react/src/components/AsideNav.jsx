import { NavLink } from "react-router";

function AsideNav({ items }) {
  return (
    <nav>
      <ul className="pl-6 h" id="ul-sidebar">
        {items.map((elemento, index) => (
          <li key={index} >
            {elemento === "Sair" ? (
              <NavLink to="/login">{elemento}</NavLink>
            ) : (
              <NavLink to={elemento.toLowerCase()}>{elemento}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AsideNav;
