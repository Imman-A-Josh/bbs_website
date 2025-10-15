import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Timeline.css";

import pertrolImage from '../Assets/p1.avif'
import metalImage from '../Assets/metal1.avif'
import agroImage from '../Assets/agro1.jpg'
import apparelImage from '../Assets/p2.avif'

import meetingImage from '../Assets/meeting.jpg'


const About = () => {
    const [activeTab, setActiveTab] = useState("petroleum");

    return (
        <>
            <section className="split-section py-5 mt-5">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col md={6}>
                            <img
                                src={meetingImage}
                                alt="Our Mission"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                        <Col md={6} className="p-4">
                            <h2 className="fw-bold mb-2" style={{ color: "#3A2E5F" }}>Our Mission</h2>
                            <p>
                                We aim to deliver world-class products with uncompromised
                                quality, integrity, and innovation. Our team constantly pushes
                                the limits to achieve global excellence.
                            </p>
                        </Col>
                    </Row>

                    <Row className="align-items-center flex-row-reverse">
                        <Col md={6}>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                                alt="Our Team"
                                className="img-fluid rounded shadow"
                            />
                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold" style={{ color: "#3A2E5F" }}>Our Team</h2>
                            <p>
                                Behind every project is a talented team of professionals driven
                                by passion, creativity, and precision. We believe in teamwork
                                and continuous improvement.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* --- Tabbed Content --- */}
            <section className="tabs-section py-5 bg-light">
                <Container>
                    <h2 className="text-center fw-bold mb-4" style={{ color: "#3A2E5F" }}>
                        Our Expertise
                    </h2>
                    <Nav
                        variant="tabs"
                        className="justify-content-center mb-4"
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="petroleum">Petroleum</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="metals">Metals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="agro">Agro</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="apparel">Apparel</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Row className="align-items-center text-center">
                        {activeTab === "petroleum" && (
                            <Col>
                                <img
                                    src={pertrolImage}
                                    alt="Petroleum" width={400} height={400}
                                    className="img-fluid rounded shadow mb-3"
                                />
                                <p>Providing high-quality petroleum products worldwide.</p>
                            </Col>
                        )}
                        {activeTab === "metals" && (
                            <Col>
                                <img
                                    src={metalImage}
                                    alt="Metals" width={400} height={400}
                                    className="img-fluid rounded shadow mb-3"
                                />
                                <p>Expertise in sourcing and delivering premium metals.</p>
                            </Col>
                        )}
                        {activeTab === "agro" && (
                            <Col>
                                <img
                                    src={agroImage}
                                    alt="Agro" width={400} height={400}
                                    className="img-fluid rounded shadow mb-3"
                                />
                                <p>Delivering fresh and organic agro-based products globally.</p>
                            </Col>
                        )}
                        {activeTab === "apparel" && (
                            <Col>
                                <img
                                    src={apparelImage}
                                    alt="Apparel" width={400} height={400}
                                    className="img-fluid rounded shadow mb-3"
                                />
                                <p>Trendy and sustainable apparel collections for every season.</p>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>

            {/* --- Parallax Section --- */}
            <section className="parallax-section d-flex align-items-center justify-content-center text-center text-white">
                <div>
                    <h2 className="fw-bold">Our Vision</h2>
                    <p>
                        To be a trusted global leader, inspiring change through innovation
                        and sustainability.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
