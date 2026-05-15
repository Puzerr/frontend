import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

function AsideNav({ items }) {
  const { logout } = useAuth();

  const handleSair = () => {
    logout();
  };

  return (
    <nav>
      <ul className="pl-6 list-none" id="ul-sidebar">
        {items.map((elemento, index) => (
          <li key={index} className="pb-10 font-bold text-xl">
            {elemento === "Sair" ? (
              <NavLink onClick={handleSair}>{elemento}</NavLink>
            ) : (
              <NavLink to={elemento.toLowerCase() == "dashboard" ? "/" : elemento.toLowerCase()}>{elemento}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AsideNav;
