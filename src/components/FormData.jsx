import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./../service/serviceFunct";
import { naviTo } from "../utils/functionsGeneral";
import { useNavigate } from "react-router-dom";


const valInic = {
  idRegis: 0,
  nomRegis: "",
  tienda: "",
  idUme: "unidades",
  stock: 0,
  pvpume: 0,
}
const FormData = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [regis, setRegis] = useState(valInic);
  const [idselect, setIdselect] = useState({});

  const nomart = useRef();

  useEffect(() => {
    setIdselect(getProduct(id));
  }, [id]);
  
  useEffect(() => {
    if (undefined !== nomart) {
      nomart.current.value = idselect.nombre;
      nomart.current.style.color = "red";
    }
    setRegis({
      idRegis: idselect.artId,
      nomRegis: idselect.nombre,
      tienda: idselect.tienda,
      idUme: idselect.medida,
      stock: idselect.stock,
      pvpume: idselect.pvp_med,
    });
    console.log(regis.nomRegis);
  }, [idselect]);

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
        <div className="col-5">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              nombre
            </span>
            <input
              ref={nomart}
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
        <div className="col-5">
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
        <div className="col-4">
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
        <div className="col-3">
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
        <div className="col-4">
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
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-primary izda">
          grabar
        </button>
        <button type="button" className="btn btn-outline-primary ctr" onClick={() => setRegis(valInic)}>
          limpiar
        </button>
        <button type="button" className="btn btn-outline-primary dcha" onClick={()=>naviTo(navigate)}>
          salir
        </button>
      </div>
    </div>
  );
};

export default FormData;
