import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "./../service/serviceFunct";

const ListData = () => {
  let navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(getProducts());
  }, []);
  const naviTo = (id) => {
    navigate(`/form/${id}`);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-1">Col</div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Articulo</th>
                <th scope="col">Medida</th>
                <th scope="col">Unidades</th>
                <th scope="col">pvp</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {list.map((prod, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td onClick={() => naviTo(prod.artId)}>{prod.artId}</td>
                  <td>{prod.nombre}</td>
                  <td>{prod.medida}</td>
                  <td>{prod.unidades}</td>
                  <td>{prod.pvp_med}</td>
                  <td>{prod.unidades * prod.pvp_med}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-1">Col</div>
      </div>
    </div>
  );
};

export default ListData;
