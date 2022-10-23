import Carousel from "react-bootstrap/Carousel";

export const Geography = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pomorland.travel/upload/iblock/65e/65efe2e091053d7d2d7f1f038f5e651f.jpg"
          alt="Архангельск"
        />
        <Carousel.Caption>
          <h3>Архангельск</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wikiway.com/upload/iblock/f2f/Ekaterinburg-s-vysoty.jpg"
          alt="Екатеринбург"
        />

        <Carousel.Caption>
          <h3>Екатеринбург</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://chemodan-tour.ru/wp-content/uploads/2018/08/082718_1904_1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Иваново</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/324671d930c2c6b747910a712de92692/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Казань</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s0.rbk.ru/v6_top_pics/media/img/9/35/756170977456359.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Нижний Новгород</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
