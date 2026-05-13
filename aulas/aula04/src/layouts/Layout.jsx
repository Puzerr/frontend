import { Navigate, Outlet } from "react-router";
import Menu from "../components/Menu.jsx";
import { useAuthContext } from "../contexts/AuthContext.jsx";

function Layout() {
  const { logado } = useAuthContext();
  return (
    <>
      {logado ? (
        <>
          <aside>
            <Menu />
          </aside>
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
