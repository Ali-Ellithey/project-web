import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";
import { motion } from 'framer-motion';
import { Fade } from "react-awesome-reveal";
import imgSlider1 from "../../Images/pikaso_embed.e02a701cdb4e7b111eb3.jpeg";
import imgSlider2 from "../../Images/pikaso_edit.dfe5ec0bccb4de8c7913.jpeg";
import imgSlider3 from "../../Images/pikaso_embed1.f7dac3ebefd77dad63ea.jpeg";

export const HomeSidler = () => {
  return (
    <div className="home">
          <Fade>
      <Carousel>
        <Carousel.Item>
          <img src={imgSlider1} alt="Home_sidler" />
            <Carousel.Caption>
              <h1>
                Get <span>ready</span> for your business
                <br />& upgrade <span>all aspects</span>
              </h1>
              <div className=" line "></div>
              <p>
                Mexant HTML5 Template is provided for free of charge. This
                layout is based on Boostrap 5 CSS framework. Anyone can download
                and edit for any professional website. Thank you for visiting
                TemplateMo website.
              </p>
              <div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" size="lg" className="btBg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" size="lg">
                    Contact
                  </Button>
                </motion.button>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgSlider2} alt="Home_sidler" />
          <Carousel.Caption>
              <h1>
                Best One in Town
                <br />& Crypto
                <span> Services</span>
              </h1>
              <div className=" line "></div>
              <p>
                When you browse through different tags on TemplateMo website,
                you can see a variety of CSS templates which are responsive
                website designs for different individual needs. Please tell your
                friends about our website. Thank you.
              </p>
              <div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" size="lg" className="btBg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" size="lg">
                    Contact
                  </Button>
                </motion.button>
              </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={imgSlider3} alt="Home_sidler" />
          <Carousel.Caption>
            <h1>
              <span>Digital </span>
              Currency for you <br />& Best
              <span> Crypto </span>
              Tips
            </h1>
            <div className=" line "></div>
            <p>
              You will see a bunch of free CSS templates when you search on
              Google. TemplateMo website is probably the best one because it is
              100% free. It does not ask you anything in return. You have a
              total freedom to use any template for any purpose.
            </p>
            <div>
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button"
              >
                <Button variant="success" size="lg" className="btBg">
                  Discover More
                </Button>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button"
              >
                <Button variant="success" size="lg">
                  Contact
                </Button>
              </motion.button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Fade>
    </div>
  );
};
export default HomeSidler;
