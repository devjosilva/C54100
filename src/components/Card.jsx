import { useState } from "react";

export const Card = ({
  titulo,
  descripcion,
  precio,
  comentarioPrecio,
  imagenFont,
}) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    setAdded(true);
  };

  const clickQuitar = () => {
    setAdded(false);
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3 mb-2">
        <div className="card seccionPromesa">
          <div className="card-group col-12">
            <div className="card p-3 textLight">
              <div className="text-center">
                <i className={imagenFont}></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-title">{descripcion}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {precio} {comentarioPrecio}
                </small>
              </div>
              {added ? (
                <button type="button" onClick={clickQuitar}>
                  {" "}
                  Quitar⛔
                </button>
              ) : (
                <button type="button" onClick={clickAgregar}>
                  {" "}
                  Agregar✅
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
