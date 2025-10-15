import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            <div className="image-container position-relative text-center">
                <img
                    src={agroImage1}
                    alt="Iron Ore Mines"
                    className="img-fluid w-100"
                    style={{ height: "600px", objectFit: "cover" }}
                />
                <div
                    className="overlay-text position-absolute top-50 start-50 translate-middle text-white"
                    style={{ fontSize: "5rem", fontWeight: "bold", letterSpacing: "0.2rem" }}
                >
                    <div>COMMODITIES</div>
                </div>
            </div>

            {/* Title Section */}
            <div className="text-center pt-5">
                <h2 className="fw-bold mb-4">PETROLEUM</h2>
                <div
                    className="mx-auto"
                    style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                ></div>
            </div>

            {/* Timeline with Images */}
            <Container className="timeline-container py-5 ">
                {steps.map((step, index) => (
                    <Row key={index} className="timeline-row align-items-center my-4 mb-5">
                        <Col md={3} className="text-center">
                            <img 
                                src={step.img} 
                                alt={step.title} 
                                className="img-fluid rounded" width={200} height={200}
                                style={{objectFit: "cover" }}
                            />
                        </Col>
                        <Col md={9}>
                            <h5>{step.title}</h5>
                            <p>{step.desc}</p>
                        </Col>
                    </Row>
                ))}

                {/* CTA Section */}
                <section className="cta-section text-center py-5 mt-3" style={{background:"#778341"}}>
                    <h4 className="fw-bold text-light mb-3">Want to know more about our global commodities?</h4>
                    <Button variant="primary bg-secondary border" style={{border: "none" }}>
                        Contact Our Team
                    </Button>
                </section>

            </Container>

        </section >
    );
}

export default Agro;
