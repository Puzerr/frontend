import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function BotaoSubmit({ children }) {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleEntrar = () => {
    login({});
    navigate("/");
  };

  return (
    <button
      type="submit"
      className="w-full bg-primary h-11 text-lg rounded-md bg-primary"
      onClick={handleEntrar}
    >
      {children}
    </button>
  );
}

export default BotaoSubmit;
