import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();
  const authName = "";

  const naviTo = () => {
    navigate("/");
  };
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {authName === "" ? "Ejercicio 21" : authName}
      </span>
      <button className="btn btn-outline-danger" onClick={naviTo}>
        <i className="fas fa-sing-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
