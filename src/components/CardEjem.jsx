import React from "react";

const CardEjem = () => {
  return (
    <div className="CardEjem">
      <h1>Hello, world!</h1>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="img col-md-4">
            <img
              src="/asset/paisaje.png"
              class="img-fluid rounded-start"
              alt="imagen"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Paisajes Naturales</h4>
              <p class="card-text">
                Te proporcionamos información de los mejores parajes de España
                para disfrutar de un cielo estrellado en plena naturaleza.
              </p>
              <div class="d-grid gap-2 col-12 mx-auto">
                <button class="btn btn-warning" type="button">
                  Visitanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEjem;
