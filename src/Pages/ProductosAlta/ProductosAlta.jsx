import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import "../Registro/Registro.css";
import "firebase/compat/auth";
import { create } from "../../Services/productosService";
import { useState } from "react";
import ButtonWithLoading from "../../Components/ButtonWithLoading";
import AlertCustom from "../../Components/AlertCustom";
import "./ProductosAltaEstilos.css";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const document = await create(data);
      setLoading(false);
      setAlert({
        variant: "success",
        text: "El producto se ha dado de alta correctamente",
        duration: 3000,
        link: "/",
      });
      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            {...register("title")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el precio"
            {...register("price")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la imagen"
            {...register("thumbnail")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la descripcion"
            {...register("description")}
          />
        </Form.Group>

        <ButtonWithLoading loading={loading}> Guardar</ButtonWithLoading>
        <div className="alert-custom-alta">
          <AlertCustom
            //variant={alert.variant} text={alert.text}
            {...alert}
          />
        </div>
      </Form>
    </div>
  );
}

export default ProductosAlta;
