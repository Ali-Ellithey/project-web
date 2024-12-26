import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import ImageServices from "../../Images/service-image-01.afef1847b72322c73da5.jpg";
import ServicesImage from "../../Images/service-image-02.937ad169d6ceaf870e5c.jpg";
import imegEnd from "../../Images/service-image-03.9512c280b15b7cebed2a.jpg";
import { Zoom } from "react-awesome-reveal";

export const ServicesContent = () => {
  return (
    <div className="ServicesContent" id="">
      <Container>
        <div className="allItems">
          <Zoom>
            <Row>
              <Col lg={6}>
                <div className="Images">
                  <img src={ImageServices} alt="ImageServices" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="textContent">
                  <i className="fas fa-archive"></i>
                  <h4>Digital Currencies</h4>
                  <p>
                    You will see a bunch of free CSS templates when you search
                    on Google. TemplateMo is the best one because it is 100%
                    free for anyone. We do not ask you anything in return. You
                    are free to use our templates for any purpose.
                  </p>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>
        <div className="allItems">
          <Zoom>
            <Row>
              <Col lg={6}>
                <div className="textContent">
                  <i className="fas fa-archive"></i>
                  <h4>Financial Solutions</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi et ex massa. In ac laoreet urna. Curabitur eu enim
                    nibh. Phasellus sodales nisi vel leo aliquam, ut tempus
                    augue hendrerit. Pellentesque eu risus tincidunt,
                    condimentum eros in, auctor augue. Vivamus et urna blandit,
                    varius sapien sed.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="Images">
                  <img src={ServicesImage} alt="ImageServices" />
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>
        <div className="allItems">
          <Zoom>
            <Row>
              <Col lg={6}>
                <div className="Images">
                  <img src={imegEnd} alt="ImageServices" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="textContent">
                  <i className="fas fa-archive"></i>
                  <h4>Cryptocurrency Exchanges</h4>
                  <p>
                    Mauris id efficitur ante, vitae ultrices metus. Donec et
                    nunc massa. Nullam non felis dignissim, dapibus turpis
                    semper, vulputate lorem. Nam volutpat posuere tellus, in
                    porttitor justo interdum nec. Aenean in dapibus risus, in
                    euismod ligula. Aliquam vel scelerisque elit.
                  </p>
                </div>
              </Col>
            </Row>
          </Zoom>
        </div>
      </Container>
    </div>
  );
};

export default ServicesContent;
