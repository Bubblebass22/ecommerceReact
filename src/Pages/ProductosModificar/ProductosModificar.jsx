import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Registro/Registro.css";
import "firebase/compat/auth";
import { create, update } from "../../Services/productosService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getById } from "../../Services/productosService";
import { deleteProducto } from "../../Services/productosService";
import { useState } from "react";
import ButtonWithLoading from "../../Components/ButtonWithLoading";
import AlertCustom from "../../Components/AlertCustom";
import "./ModificarEstilos.css";

function ProductosModificar() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
        setValue("description", response.data().description);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const document = await update(id, data);
      setLoading(false);
      setAlert({
        variant: "success",
        text: "Los datos del producto se han actualizado correctamente.",
        duration: 3000,
        link: "/",
      });
      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleClickEliminar = async () => {
    try {
      const response = await deleteProducto(id);

      setAlert({
        variant: "danger",
        text: "El producto ha sido eliminado de la base de datos.",
        duration: 3000,
        link: "/",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contenedor-modificar">
      <h1>Modificar Producto</h1>

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

        <div className="alert-custom-modificar">
          <AlertCustom
            //variant={alert.variant} text={alert.text}
            {...alert}
          />
        </div>
      </Form>
      <div>
        <Button
          variant="danger"
          type="submit"
          onClick={handleClickEliminar}
          className="button-eliminar"
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default ProductosModificar;
