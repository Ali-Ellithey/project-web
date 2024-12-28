import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from 'framer-motion';
import Container from "react-bootstrap/Container";

function BusinessSolutions() {
  return (
    <div className="businessSolutions">
      <Container>
        <div className="Container d-flex justify-content-between align-items-center ">
          <h1>
            Business <span> Solutions</span>
            and
            <br />
            <span className="greens">Crypto </span>
            Investments
          </h1>
          <div className="buttons">
          <div className="btBg">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button  id="discover" variant="success" size="lg">
                    Discover More
                  </Button>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" id="contactbtn" size="lg">
                    Contact
                  </Button>
                </motion.button>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BusinessSolutions;
