import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Timeline.css";

import ScrollToTopButton from "../components/ScrollToTopButton";

import agroImage1 from '../Assets/agroMain.avif';
import sugarImage from '../Assets/Agro/Sugar.jpg';
import riceImage from '../Assets/Agro/Rice.jpg';
import wheatImage from '../Assets/Agro/Wheat.jpg';
import maizeImage from '../Assets/Agro/Corn.jpg';
import soyaImage from '../Assets/Agro/Soya.jpg';

const Agro = () => {

    const steps = [
        {
            title: "RICE",
            desc: "Carefully selected and processed to deliver unmatched flavor, consistency, and nutritional value for every requirement",
            img: riceImage,
            re_link: "/products/agro/rice"
        },
        {
            title: "WHEAT",
            desc: "Meticulously sourced and processed wheat that sets the standard for purity and excellence",
            img: wheatImage,
            re_link: "/products/agro/wheat"
        },
        {
            title: "SUGAR",
            desc: "Premium-quality sugar, expertly sourced and refined to meet the highest standards",
            img: sugarImage,
            re_link: "/products/agro/sugar"
        },
        {
            title: "MAIZE",
            desc: "Expertly sourced and processed to ensure optimal freshness, purity, and versatility for all your agricultural and culinary needs",
            img: maizeImage,
            re_link: "/products/agro/maize"
        },
        {
            title: "SOYA BEAN",
            desc: "Meticulously sourced and processed soya that sets the standard for purity and excellence",
            img: soyaImage,
            re_link: "/products/agro/soya-bean"
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
                                    <a
                                        href={item.re_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "red", textDecoration: "underline" }}
                                    >
                                        Learn More
                                    </a>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <ScrollToTopButton />
        </section>
    );
};

export default Agro;
