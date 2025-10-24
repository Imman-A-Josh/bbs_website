import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Timeline.css";

import agroImage1 from '../Assets/agroMain.avif';
import sugarImage from '../Assets/sugar.jpg';
import riceImage from '../Assets/rice.avif';
import wheatImage from '../Assets/wheat.avif';
import maizeImage from '../Assets/maize.avif';
import soyaImage from '../Assets/soya.jpg';

const Agro = () => {

  const steps = [
    {
      title: "SUGAR",
      desc: "Premium-quality sugar, expertly sourced and refined to meet the highest standards",
      img: sugarImage
    },
    {
      title: "RICE",
      desc: "Carefully selected and processed to deliver unmatched flavor, consistency, and nutritional value for every requirement",
      img: riceImage
    },
    {
      title: "WHEAT",
      desc: "Meticulously sourced and processed wheat that sets the standard for purity and excellence",
      img: wheatImage
    },
    {
      title: "MAIZE",
      desc: "Expertly sourced and processed to ensure optimal freshness, purity, and versatility for all your agricultural and culinary needs",
      img: maizeImage
    },
    {
      title: "SOYA BEAN",
      desc: "Meticulously sourced and processed soya that sets the standard for purity and excellence",
      img: soyaImage
    },
  ];

  return (
    <section id='petroleum' className="py-5 mt-4">

      {/* Hero Image Section */}
      <section className="about-banner-section">
        <div className="image-container position-relative text-center">
          <img
            src={agroImage1}
            alt="Banner"
            className="banner-img"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="text-center pt-5">
        <h2 className="fw-bold mb-4">AGRO PRODUCTS</h2>
        <div
          className="mx-auto"
          style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
        ></div>
      </div>

      <Container className="timeline-container py-5">
        <Row className="g-4 mt-4">
          {steps.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <Card className="hover-card h-100">
                <Card.Img variant="top" height={250} src={item.img} />
                <Card.Body className="lh-lg card-body-custom">
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Agro;
