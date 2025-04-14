// src/components/Home.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import IceCreamCarousel from './IceCreamCarousel'; // Import the IceCreamCarousel component
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Home = () => {
  return (
    <div className="container mt-4"> {/* Bootstrap container for responsive layout */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Sweet-Ice-Cream-with-Different-Flavors-1024x1024.jpg"
      alt="Ice cream"
    />
    <Carousel.Caption>
      <h3>Award-Winning Ice Cream</h3>
      <p>Try our delicious flavors!</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Homemade-Ube-Ice-Cream.jpg"
      alt="Special Offers"
    />
    <Carousel.Caption>
      <h3>Special Offers</h3>
      <p>Don't miss out on our exclusive deals!</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.patrickmaese.com/wp-content/uploads/2020/08/Tiramisu-Sundae-blog-1.jpg"
      alt="New Flavors"
    />
    <Carousel.Caption>
      <h3>New Flavors In Store!</h3>
      <p>Discover our freshly introduced seasonal specials.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blog.giallozafferano.it/fablesucre/wp-content/uploads/2020/07/BBlog_IMG_0217-scaled.jpg"
      alt="Tiramsiu"
    />
    <Carousel.Caption>
      <h3>Cool Down This Summer</h3>
      <p>Our summer collection is here!</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/HaghtGpnl1E/maxresdefault.jpg"
      alt="Classic Favorites"
    />
    <Carousel.Caption>
      <h3>Classic Favorites</h3>
      <p>Timeless tastes you’ll always love.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      {/* Add the IceCreamCarousel component here */}
      <IceCreamCarousel />
    </div>
  );
};

export default Home;