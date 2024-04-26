import { useNavigate } from "react-router-dom";
import { naviTo } from "./../utils/functionsGeneral";

export const Navbar = () => {
  let navigate = useNavigate();
  const authName = "";

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {authName === "" ? "Ejercicio 21" : authName}
      </span>
      <ul className="general">
        <li className="opc elHome">Home</li>
        <li className="opc elNuevo">Nuevo</li>
      </ul>
      <button
        className="btn btn-outline-danger"
        onClick={() => naviTo(navigate)}
      >
        <i className="fas fa-sing-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
