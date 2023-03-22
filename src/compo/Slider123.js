import React from 'react';
import Data from '../server/imgData.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCartShopping);

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
    <div className="container justify-content: space-evenly">
      <div className="row">
        <Slider {...settings}>
          {Data.books.map((value) => (
            <div
              className="d-flex flex-row justify-content: space-evenly"
              key={value.id}
            >
              <Card className="g-4 shadow p-2">
                <Card.Img
                  variant="top"
                  src={value.image}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="author"> {value.bookname}</Card.Title>
                  <Card.Text>
                    <p className="author">{value.auther}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>₹{value.price}</h5>
                      <Button
                        variant="dark"
                        style={{
                          backgroundColor: 'black',
                          color: 'white',
                          fontSize: '14px',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = 'yellow';
                          e.target.style.color = 'black';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'black';
                          e.target.style.color = 'white';
                        }}
                      >
                        <FontAwesomeIcon
                          icon="cart-shopping"
                          style={{ marginRight: '3px' }}
                          flip
                        />
                        Buy Now
                      </Button>
                    </div>
                  </Card.Text>
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
