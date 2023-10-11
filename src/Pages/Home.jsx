import Productos from "../Components/Productos/Productos";
import "./home.module.css";
import Carru from "../Components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Carru />
      <Productos />
    </div>
  );
}

export default Home;
