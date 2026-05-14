import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

function AsideNav({ items }) {
  const { logout } = useAuth();

  const handleSair = () => {
    logout();
  };

  return (
    <nav>
      <ul className="pl-6 h" id="ul-sidebar">
        {items.map((elemento, index) => (
          <li key={index}>
            {elemento === "Sair" ? (
              <NavLink onClick={handleSair}>{elemento}</NavLink>
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
