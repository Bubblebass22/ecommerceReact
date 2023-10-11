import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "./ProductoEstilos.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
  cardImage: {
    height: "200px",
    objectFit: "contain",
    marginLeft: "4px",
    paddingRight: "8px",
  },
};

function Producto({
  id,
  nombreProducto,
  precioProducto,
  categoriaProducto,
  thumbnail,
  description,
}) {
  const context = useContext(AuthContext);

  return (
    <Col sm={12} md={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} style={styles.cardImage} />
        <Card.Body style={styles.color}>
          <Card.Title>{nombreProducto}</Card.Title>
          <Card.Text>${precioProducto}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" as={Link} to={`/producto/${id}`}>
            Ver Detalle
          </Button>
          {context.login && (
            <Button
              className="button-modificar"
              variant="primary"
              as={Link}
              to={`/producto/modificar/${id}`}
            >
              Modificar
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
