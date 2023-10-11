import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../Services/productosService";
import Loading from "../../Components/Loading/Loading";
import { Button } from "react-bootstrap";
import "./DetalleEstilo.css";

function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  console.log(id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);

        console.log(response);
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);


  return (
    <Loading loading={loading}>
      <div className="conatiner">
        <div className="item">
          <h1>{producto.title}</h1>
        </div>
        <div className="item">
          <img className="img" src={producto.thumbnail} />
        </div>
        <br />
        <div className="item">
          <h2>${producto.price}</h2>
        </div>
        <div className="item">
          <h3>{producto.description}</h3>
        </div>
        <p></p>
        <div className="button-detalle">
          <Button>Comprar</Button>
        </div>
      </div>
    </Loading>
  );
}

export default Detalle;
