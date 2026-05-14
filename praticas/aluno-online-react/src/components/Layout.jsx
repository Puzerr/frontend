import { Navigate, Outlet } from "react-router";
import Aside from "./Aside.jsx";
import useAuth from "../hooks/useAuth";

function Layout() {
  const { autenticado } = useAuth();
  return (
    <>
      {autenticado ? (
        <>
          <Aside />
          <main className="flex flex-1 flex-col h-screen m-6">
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
