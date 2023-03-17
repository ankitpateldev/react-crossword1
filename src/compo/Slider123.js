import React from 'react';
import Data from '../server/imgData.json';

// import 'slick-carousel/slick/slick.css';
// import "slick-carousel/slick/slick-theme.css";

import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Slider123() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          {Data.books.map((value) => (
            <div className="d-flex flex-row" key={value.id}>
              <Card className="g-4 shadow p-2">
                <Card.Img
                  variant="top"
                  src={value.image}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title> {value.bookname}</Card.Title>
                  <Card.Text>
                    <p>{value.auther} </p>
                    <h5> {value.price} </h5>
                  </Card.Text>
                  <Button
                    variant="dark"
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = 'yellow')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = 'black')
                    }
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Slider123;
