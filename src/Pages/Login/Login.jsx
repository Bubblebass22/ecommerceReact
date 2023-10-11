import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../../Services/usuariosService";
import ButtonWithLoading from "../../Components/ButtonWithLoading";
import AlertCustom from "../../Components/AlertCustom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Input from "../../Components/Input";
import "./LoginEstilo.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const context = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const user = await login(data.email, data.password);
      context.handleLogin(user);
      setLoading(false);
      console.log(data);
      setAlert({
        variant: "success",
        text: "Login exitoso, aguarda unos instantes mientras te redireccionamos.",
        duration: 3000,
        link: "/",
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-email">
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
        </div>
        <div className="input-password">
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
        </div>
        <div className="button">
          <ButtonWithLoading loading={loading}> Login</ButtonWithLoading>
        </div>
        <div className="alert-custom">
          <AlertCustom
            //variant={alert.variant} text={alert.text}
            {...alert}
          />
        </div>
        <label htmlFor="">¿No tienes cuenta?</label>
        <span>
          <Link to={`/alta`}>Registrarse</Link>
        </span>
        <br />

        <label>¿Olvidate tu contraseña?</label>
        <span>
          <Link to={`/recuperar`}>Click aqui.</Link>
        </span>
      </Form>
    </div>
  );
}

export default Login;
