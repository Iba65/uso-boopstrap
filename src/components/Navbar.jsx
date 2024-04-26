import { useNavigate, NavLink } from "react-router-dom";
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
        <li className="opc elHome">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activa-link" : null)}
          >
            Home
          </NavLink>
        </li>
        <NavLink to="/nuevo" activeClassName="activa-link">
          <li className="opc elNuevo">Nuevo</li>
        </NavLink>
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
