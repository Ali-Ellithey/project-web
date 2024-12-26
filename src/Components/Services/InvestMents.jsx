import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Zoom } from "react-awesome-reveal";
import InvestMentsImg1 from "../../Images/service-image-03.9512c280b15b7cebed2a.jpg";
import InvestMentsImg2 from "../../Images/service-image-01.afef1847b72322c73da5.jpg";
import InvestMentsImg3 from "../../Images/service-image-02.937ad169d6ceaf870e5c.jpg";

export const InvestMents = () => {
  const [activeTab, setActiveTab] = useState("Crypto Investments");
  const handleClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };
  const tabs = {
    "Crypto Investments": [
      [
        [<img src={InvestMentsImg1} alt="Crypto Services" />],
        "Learn more about cryptocurrency investments",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "-Top Crypto prices and charts",
        "-Top Crypto prices and charts",
        "-Top Crypto prices and charts",
      ],
    ],
    "Cryptocurrency Market": [
      [
        [<img src={InvestMentsImg2} alt="Crypto Services" />],
        "Read more on Cryptocurrency Market",
        "Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "-Top Crypto prices and charts",
        "-Top Crypto prices and charts",
        "--Top Crypto prices and charts",
      ],
    ],
    "Financial Planning": [
      [
        [<img src={InvestMentsImg3} alt="Crypto Services" />],
        "How to carefully plan on your online financials",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "-Top Crypto prices and charts",
        "-Top Crypto prices and charts",
        "-Top Crypto prices and charts",
      ],
    ],
  };

  return (
    <div className="invest">
      <Container>
        <div className="title">
          <h6>Investment in Details</h6>
          <h2>Upgrade your knowledge</h2>
        </div>
        <div className="content">
          <div className="leftText">
            <div className="allButton">
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
              {tabs[activeTab].map(
                ([img, Title, Budget, span1, span2, span3], index) => (
                  <div className="Boxing" key={index}>
                    <div className="imgContent">{img}</div>
                    <div className="boxText">
                      <h1>{Title}</h1>
                      <p>{Budget}</p>
                      <span>{span1}</span>
                      <br />
                      <span>{span2}</span>
                      <br />
                      <span>{span3}</span>
                    </div>
                  </div>
                )
              )}
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestMents;
