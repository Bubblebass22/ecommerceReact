import { Link } from "react-router-dom";

function Comprar() {
  return (
    <div>
      <h2>Elegir forma de pago</h2>
      <div>
        <label>Efectivo</label>
        <input type="checkbox" />
      </div>
      <br />
      <div>
        <label>Tarjeta de credito</label>
        <input type="checkbox" />
      </div>
      <br />
      <div>
        <label>Mercado Pago</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default Comprar;
