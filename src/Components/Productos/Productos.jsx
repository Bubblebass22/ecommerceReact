import { useEffect, useState } from "react";
import Producto from "../Producto/Producto";
import { getAllProductos } from "../../Services/productosService";
import Buscar from "../Buscar";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Loading from "../Loading/Loading";
import "./ProductoSestilos.css";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState(`Listado de productos`);
  const [buscar, setBuscar] = useState(``);
  const [cantidadProductos, setCantidadProductos] = useState(4);

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProductos(buscar);

        console.log(querySnapshot);
        setProductos(querySnapshot.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [buscar]);

  const handleChange = (event) => {
    const value = event.target.value;
    setBuscar(value);
  };
  const mostrarMasProductos = () => {
    setCantidadProductos(cantidadProductos + 4);
  };

  const styles = {
    card: {
      marginBottom: "10px",
      width: "18rem",
    },
    cardImage: {
      height: "200px",
      objectFit: "contain",
    },
    color: {
      background: "rgb(204, 171, 79)",
    },
  };

  return (
    <Loading loading={loading}>
      <div style={styles.color} className="productos-container">
        <Row>
          <h1>{titulo}</h1>
          <Buscar buscar={buscar} handleChange={handleChange} />
          {productos.slice(0, cantidadProductos).map((unProducto) => (
            <Producto
              key={unProducto.id}
              id={unProducto.id}
              nombreProducto={unProducto.data().title}
              precioProducto={unProducto.data().price}
              thumbnail={unProducto.data().thumbnail}
              description={unProducto.data().description}
              categoriaProducto={""}
            />
          ))}
        </Row>
        <Button variant="primary" onClick={mostrarMasProductos}>
          Mostrar mas productos
        </Button>
      </div>
    </Loading>
  );
}

export default Productos;
