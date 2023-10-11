import { useForm } from "react-hook-form";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { create } from "../../Services/usuariosService";
import "./Registro.css";
import "firebase/compat/auth";
import Input from "../../Components/Input";
import ButtonWithLoading from "../../Components/ButtonWithLoading";
import AlertCustom from "../../Components/AlertCustom";
import { registroMessage } from "../../Utils/errorMessage";

function Registro() {
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
      const user = await create(data);
      console.log(data);
      setLoading(false);
      setAlert({
        variant: "success",
        text: "Gracias por registrarse.",
        duration: 3000,
        link: "/Login",
      });
    } catch (e) {
      setLoading(false);
      console.log(e);

      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "Ha ocurrido un error",
      });
      setLoading(false);
    }
  };

  return (
    <div className="contenedor-registro">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          register={{ ...register("nombre", { required: true }) }}
          errors={errors}
        />

        <Input
          label="Apellido"
          name="apellido"
          placeholder="Ingrese su Apellido"
          register={{ ...register("apellido", { required: true }) }}
          errors={errors}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Ingrese su Email"
          register={{ ...register("email", { required: true }) }}
        >
          <Form.Text className="text-muted">
            {errors.password?.type === "required" && (
              <span>El campo es obligatorio</span>
            )}
            {errors.password?.type === "pattern" && (
              <span>Formato de email erroneo</span>
            )}
          </Form.Text>
        </Input>

        <Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Ingrese su Contraseña"
          register={{
            ...register("password", {
              required: true,
              minLength: 4,
              maxLength: 12,
            }),
          }}
        >
          <Form.Text className="text-muted">
            {errors.password?.type === "required" && (
              <span>El campo es obligatorio</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>Debe completar al menos 6 caracteres</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span>Debe completar 12 caracteres como maximo</span>
            )}
          </Form.Text>
        </Input>

        <ButtonWithLoading loading={loading}> Registrarse</ButtonWithLoading>
        <div className="alert-custom-registrarse">
          <AlertCustom
            //variant={alert.variant} text={alert.text}
            {...alert}
          />
        </div>
      </Form>
    </div>
  );
}

export default Registro;
