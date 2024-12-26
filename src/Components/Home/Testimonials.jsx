import React from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";
import tastImage from "../../Images/testimonials-01.cf771fa8f63cdab29611.jpg";

export const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Testimonials" id="Testimonials">
      <Container>
        <div className="title">
          <h6>Testimonials</h6>
          <h2>What They Say? </h2>
        </div>
        <div className="content">
          <Slider {...settings}>
            <div className="items">
              <div className="info">
                <i className="fa fa-quote-left"></i>
                <p>
                  “Donec et nunc massa. Nullam non felis dignissim, dapibus
                  turpis semper, vulputate lorem. Nam volutpat posuere tellus,
                  in porttitor justo interdum nec. Aenean in dapibus risus, in
                  euismod ligula. Aliquam vel scelerisque elit.”
                </p>
                <h4>David Eigenberg</h4>
              </div>
              <div className="image">
                <img src={tastImage} alt="" />
              </div>
            </div>
            <div className="items">
              <div className="info">
                <i className="fa fa-quote-left"></i>
                <p>
                  “Donec et nunc massa. Nullam non felis dignissim, dapibus
                  turpis semper, vulputate lorem. Nam volutpat posuere tellus,
                  in porttitor justo interdum nec. Aenean in dapibus risus, in
                  euismod ligula. Aliquam vel scelerisque elit.”
                </p>
                <h4>David Eigenberg</h4>
              </div>
              <div className="image">
                <img src={tastImage} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
