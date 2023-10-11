import Carousel from "react-bootstrap/Carousel";
import "./CarouselContainer.css";

function Carru() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="carousel-image"
          src="https://www.lancetalent.com/blog/wp-content/uploads/Disen%CC%83o-sin-ti%CC%81tulo-26-1.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img-fit">
        <img
          className="carousel-image"
          src="https://img.unocero.com/2018/11/ofertas-sitios.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="https://cnnespanol.cnn.com/wp-content/uploads/2021/04/210405174111-amazon-home-under-100-lead-super-169.jpg?quality=100&strip=info&w=460&h=260&crop=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="h3">Hasta 50% OFF en muebles para el hogar</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carru;
