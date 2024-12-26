import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { motion } from 'framer-motion';
import { Zoom } from "react-awesome-reveal";

export const AboutUS = () => {
  const [activeTab, setActiveTab] = useState("Web Design");
  const handleClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };
  const tabs = {
    "Web Design": [
      ["Website Redesign", "$1,500 to $2,200", "2022 Dec 12", "Web Biz"],
      ["Website Renovation	", "$2,500 to $3,600	", "2022 Dec 12", "Online Ads"],
      ["Marketing Plan	", "$1,500 to $2,200", "2022 Dec 12", "Web Biz"],
      ["All-new Website	", "$3,000 to $6,600	", "2022 Dec 2", "Web Presence"],
    ],
    "Graphic Design": [
      ["Graphics Redesign", "$1,500 to $2,200", "2022 Nov 12", "Media One"],
      ["Digital Graphics		", "$2,500 to $3,600	", "2022 Nov 12", "Second Media"],
      ["New Artworks", "$1,500 to $2,200", "2022 Nov 12", "Artwork Push"],
      ["Complex Arts", "$3,000 to $6,600	", "2022 Nov 2", "Media One"],
    ],
    " Web Coding": [
      ["Backend Coding", "$1,500 to $2,200", "2022 Dec 12", "PHP MySQL"],
      ["New Web App", "$2,500 to $3,600	", "2022 Dec 12", "Python Programming"],
      [
        "Frontend Interactions",
        "$1,500 to $2,200",
        "2022 Dec 12",
        "JavaScripts",
      ],
      ["Video Creations", "$3,000 to $6,600	", "2022 Dec 2", "Multimedia"],
    ],
  };

  return (
    <div className="AboutUS" id="About">
      <Container>
        <div className="title">
          <h6>About Us</h6>
          <h2>Know Us Better</h2>
        </div>
        <div className="content">
          <Row>
            <Col lg={8} sm={12}>
              <div className="leftText">
                <div className="tabss">
                  {Object.keys(tabs).map((tab) => (
                    // eslint-disable-next-line react/jsx-key
                    <Button
                      className={activeTab === tab ? "active" : ""}
                      onClick={() => handleClick(tab)}
                    >
                      {tab}
                    </Button>
                  ))}
                </div>
                <Zoom key={tabs[activeTab]}>
                  <div className="TableContent">
                    <table>
                      <thead>
                        <tr>
                          <th>Project Title</th>
                          <th>Budget</th>
                          <th>Deadline</th>
                          <th>Client</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tabs[activeTab].map(
                          ([Title, Budget, Deadline, Client], index) => (
                            <tr key={index}>
                              <td>{Title}</td>
                              <td>{Budget}</td>
                              <td>{Deadline}</td>
                              <td>{Client}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </Zoom>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="rightText">
                <h4>
                  Please tell us about your idea and how you want it to be
                </h4>
                <p>
                  You are allowed to use this template for your websites. You
                  are <span> NOT allowed </span> to redistribute the template
                  ZIP file on any other template websites.
                </p>
                <p>
                  Thank you for downloading and using our templates. Please tell
                  your friends about our website.
                </p>{" "}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="motion-button"
                >
                  <Button variant="success" size="lg" className="btBg">
                    Discover More
                  </Button>
                </motion.button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUS;
