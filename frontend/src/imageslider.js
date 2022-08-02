import React, { useState} from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

import Carousel from 'react-bootstrap/Carousel';
import './css/App.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div >
    <Carousel activeIndex={index} onSelect={handleSelect} className="fixed-top">
      <Carousel.Item>
        <img 
          src={img1}
          className="c_img"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="c_img"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img 
          src={img3}
          className="c_img"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;