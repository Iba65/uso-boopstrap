import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./../service/serviceFunct";

const FormData = () => {
  let { id } = useParams();
  const [regis, setRegis] = useState({
    idRegis: 0,
    nomRegis: "",
    tienda: "",
    idUme: "unidades",
    stock: 0,
    pvpume: 0,
  });
  useEffect(() => {
    console.log(getProduct(id));
  }, [id]);
  /*useEffect(() => {
    console.log(regis);
  }, [regis]);*/
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              id
            </span>
            <input
              id="idRegis"
              value={regis.idRegis}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  idRegis: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              nombre
            </span>
            <input
              id="mombreRegis"
              value={regis.nomRegis}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  nomRegis: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Tienda
            </span>
            <input
              id="idUme"
              value={regis.tienda}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  tienda: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Unidad de medida
            </span>
            <input
              id="idUme"
              value={regis.idUme}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  idUme: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              stock almacenado
            </span>
            <input
              id="mombreRegis"
              value={regis.stock}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  stock: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              pvp/ume
            </span>
            <input
              id="mombreRegis"
              value={regis.pvpume}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onInput={(e) =>
                setRegis({
                  ...regis,
                  pvpume: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary izda">
          Grabar</button>
        <button type="button" className="btn btn-outline-primary ctr">
          Limpiar</button>
        <button type="button" className="btn btn-outline-primary dcha">
          Salir</button>
        
      </div>
    </div>
  );
};

export default FormData;
