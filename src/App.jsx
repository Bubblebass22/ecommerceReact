import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Registro from "./Pages/Registro/registro";
import NavBarMenu from "./Components/NavBar/NavBarMenu";
import Detalle from "./Pages/Detalle/Detalle";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Comprar from "./Pages/Comprar";
import Recuperacion from "./Pages/Recuperacion";
import Container from "react-bootstrap/Container";
import ProductosAlta from "./Pages/ProductosAlta/ProductosAlta";
import ProductosModificar from "./Pages/ProductosModificar/ProductosModificar";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBarMenu />
        <Container className="container-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<Registro />} />
            <Route path="/producto/:id" element={<Detalle />} />
            <Route path="/producto/alta" element={<ProductosAlta />} />
            <Route
              path="/producto/modificar/:id"
              element={<ProductosModificar />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="/recuperar" element={<Recuperacion />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
