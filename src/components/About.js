import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import RahejaImage from '../Assets/raheja.avif'
import "../styles/CategoryCarosuel.css";
import { FaSmile, FaStar, FaGlobe, FaBolt } from "react-icons/fa";

const features = [
    { icon: <FaSmile />, title: "Client Satisfaction" },
    { icon: <FaStar />, title: "24/7 Support" },
    { icon: <FaGlobe />, title: "Global Service" },
    { icon: <FaBolt />, title: "Advanced Tech" },
];

const About = () => {

    return (
        <>
            <section className="about-section py-5" style={{ background: "#fff" }}>
                <Container>
                    <h2 className="text-center fw-bold mb-4 mt-5 pt-5">Overview</h2>
                    <div
                        className="mx-auto mb-5"
                        style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                    ></div>
                    <Row className="align-items-center g-4 mt-5">
                        <Col md={6}>
                            <img
                                src={RahejaImage}
                                alt="about"
                                className="img-fluid cover" style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
                            />
                        </Col>
                        <Col md={6}>
                            <p className="text-muted">
                                <b>BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED </b> is a renowned company specializing in international trade and export expertise. Our core business areas include <b> petroleum, minerals, food products (such as rice, maize, sugar, wheat, and soybean), apparel, and coal </b>.
                            </p>
                            <p className="text-muted">
                                Operating from our headquarters at Raheja Towers, 306 Mount Road, Chennai, India, we serve clients across the globe with a strong focus on quality, reliability, and professionalism. At BBS India Pvt Ltd, we are dedicated to delivering products and services that meet international standards while catering to the unique needs of local and global markets.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5" style={{ background: "#F9F9FF" }}>
                <Container>
                    <h2 className="text-center fw-bold mb-4">Our Purpose</h2>
                    <div
                        className="mx-auto mb-5"
                        style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                    ></div>
                    <Row className="g-4">
                        {/* Mission */}
                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-0 p-4 text-center fw-bold">
                                <Card.Title style={{ color: "#3A2E5F", fontWeight: "600", fontSize: "35px" }}>
                                    Our Mission
                                </Card.Title>
                                <Card.Text style={{ color: "#555", fontSize: "16px", marginTop: "10px" }}>
                                    To empower businesses worldwide by providing seamless access to international markets, promoting sustainable trade practices, and fostering innovation for global growth.
                                </Card.Text>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="h-100 shadow-sm border-0 p-4 text-center fw-bold">
                                <Card.Title style={{ color: "#3A2E5F", fontWeight: "600", fontSize: "35px" }}>
                                    Our Vision
                                </Card.Title>
                                <Card.Text style={{ color: "#555", fontSize: "16px", marginTop: "10px" }}>
                                    To create a connected global trade ecosystem where businesses, communities, and economies thrive together, leveraging transparency, innovation, and impactful commerce.
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="features-section">
                <div className="features-container">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-box">{feature.icon}</div>
                            <h5>{feature.title}</h5>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ backgroundColor: "#fafafa", padding: "60px 0" }}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">OUR DEDICATED TEAM</h2>
                        <div
                            className="mx-auto"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>

                    <Row className="align-items-center team-card rounded overflow-hidden bg-white mb-5">
                        <Col md={3} className="p-0">
                            <div className="team-img-wrapper">
                                <img
                                    src="https://static.wixstatic.com/media/bff149_c46932560ddf4564868e6c1d91e888d3~mv2.jpg/v1/fill/w_282,h_387,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff149_c46932560ddf4564868e6c1d91e888d3~mv2.jpg"
                                    alt="Founder"
                                    className="img-fluid team-img"
                                />
                            </div>
                        </Col>
                        <Col md={9} className="p-4">
                            <h4 className="fw-bold text-dark mb-1">Mr Elangovan Sundharajan</h4>
                            <h6 className="fw-semibold text-secondary mb-3">Founder & Principal</h6>
                            <p className="text-muted lh-lg mb-3">
                                With a visionary approach, Elango leads the way in setting high
                                standards and strategic direction for our company. His leadership
                                combines passion with purpose to drive excellence in every project.
                            </p>
                        </Col>
                    </Row>

                    <Row className="align-items-center team-card rounded overflow-hidden bg-white">
                        <Col md={3} className="order-md-1 p-0">
                            <div className="team-img-wrapper">
                                <img
                                    src="https://static.wixstatic.com/media/bff149_6cd293f90f334d1bbcad1dd80fd46915~mv2.jpg/v1/fill/w_304,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff149_6cd293f90f334d1bbcad1dd80fd46915~mv2.jpg"
                                    alt="Project Manager"
                                    className="img-fluid team-img"
                                />
                            </div>
                        </Col>
                        <Col md={9} className="order-md-2 p-4">
                            <h4 className="fw-bold text-dark mb-1">Mrs Lavanya Elangovan</h4>
                            <h6 className="fw-semibold text-secondary mb-3">Project Manager</h6>
                            <p className="text-muted lh-lg mb-3">
                                Lavanya adeptly oversees our projects with precision and ensures
                                seamless execution of our client's objectives. Her attention to detail
                                and commitment to quality make her a key pillar of our success.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default About;
