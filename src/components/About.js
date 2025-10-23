import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/CategoryCarosuel.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../styles/About.css";
import { FaSmile, FaStar, FaGlobe, FaBolt } from "react-icons/fa";
import BannerImage from '../Assets/mainAbout.jpeg'

const features = [
    { icon: <FaSmile />, title: "Client Satisfaction" },
    { icon: <FaStar />, title: "24/7 Support" },
    { icon: <FaGlobe />, title: "Global Service" },
    { icon: <FaBolt />, title: "Advanced Tech" },
];


const About = () => {

    return (
        <>
            <section className="about-banner-section">
                <div className="image-container position-relative text-center">
                    <img
                        src={BannerImage}
                        alt="Banner"
                        className="banner-img"
                    />
                </div>
            </section>

            <section className="about-section py-5" style={{ background: "#fff" }}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold mb-3">About BBS</h2>
                        <div
                            className="mx-auto"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Row className="align-items-center g-4 mt-4">
                        <Col md={6}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQre8fdTAT0Yj46wNGdAqRz4epiDfeHQbQCdw&s"
                                alt="about"
                                className="img-fluid cover" style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
                            />
                        </Col>
                        <Col md={6}>
                            <div className="about-text pe-md-4">
                                <p className="text-muted mb-4" style={{ textAlign: "justify" }}>
                                    <b>
                                        <span
                                            className="text-primary"
                                            style={{ fontSize: "20px", letterSpacing: "0.5px" }}
                                        >
                                            BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED
                                        </span>
                                    </b>{" "}
                                    is a renowned company specializing in international trade and export
                                    expertise. Our core business areas include{" "}
                                    <b>
                                        petroleum, minerals, food products (such as rice, maize, sugar,
                                        wheat, and soybean), apparel, and coal
                                    </b>
                                    .
                                </p>
                                <p className="text-muted mb-0" style={{ textAlign: "justify" }}>
                                    Operating from our headquarters at Raheja Towers, 306 Mount Road,
                                    Chennai, India, we serve clients across the globe with a strong
                                    focus on quality, reliability, and professionalism. At BBS India Pvt
                                    Ltd, we are dedicated to delivering products and services that meet
                                    international standards while catering to the unique needs of local
                                    and global markets.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >

            <section className="purpose-section py-5">
                <Container>
                    <h2 className="text-center fw-bold mb-4">Our Purpose</h2>
                    <div
                        className="mx-auto mb-5"
                        style={{ width: "60px", height: "3px", background: "#fff" }}
                    ></div>

                    <Row className="align-items-stretch g-4">
                        <Col md={6}>
                            <div className="purpose-card h-100 text-center p-5 rounded-4">
                                <div className="purpose-icon mb-3">
                                    <i className="bi bi-bullseye"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-3">Our Mission</h3>
                                <p className="text-light fs-6">
                                    To empower businesses worldwide by providing seamless access to
                                    international markets, promoting sustainable trade practices, and
                                    fostering innovation for global growth.
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="purpose-card h-100 text-center p-5 rounded-4">
                                <div className="purpose-icon mb-3">
                                    <i className="bi bi-lightning-charge"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-3">Our Vision</h3>
                                <p className="text-light fs-6">
                                    To create a connected global trade ecosystem where businesses,
                                    communities, and economies thrive together, leveraging transparency,
                                    innovation, and impactful commerce.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="core-values-section py-5" style={{ background: "#fff" }}>
                <Container>
                    <h2 className="text-center fw-bold mb-4">Our Core Values</h2>
                    <div
                        className="mx-auto mb-5"
                        style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                    ></div>

                    <Row className="gy-4">
                        {[
                            {
                                icon: "bi-shield-check",
                                title: "Integrity",
                                text: "We uphold honesty and transparency in every business dealing.",
                            },
                            {
                                icon: "bi-lightbulb",
                                title: "Innovation",
                                text: "We continuously improve to meet the evolving global market.",
                            },
                            {
                                icon: "bi-people",
                                title: "Collaboration",
                                text: "We believe in partnerships that create lasting success.",
                            },
                        ].map((value, i) => (
                            <Col md={4} key={i}>
                                <div className="value-card-new text-center p-4 h-100 rounded-4">
                                    <div className="value-icon mb-3">
                                        <i className={`bi ${value.icon}`}></i>
                                    </div>
                                    <h5 className="fw-bold mb-2">{value.title}</h5>
                                    <p className="text-muted small">{value.text}</p>
                                </div>
                            </Col>
                        ))}
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

            <section className="our-story py-5" style={{ background: "#f9f9ff" }}>
                <Container>
                    <h2 className="text-center fw-bold mb-4">Our Journey</h2>
                    <div className="timeline mx-auto">
                        <div className="timeline-item">
                            <div className='mx-4'>
                                <h5>2015 - Founded</h5>
                                <p>Started operations in Chennai with a vision to simplify global trade.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className='mx-4'>
                                <h5>2018 - Expansion</h5>
                                <p>Expanded into new international markets across Asia and Africa.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className='mx-4'>
                                <h5>2023 - Digital Growth</h5>
                                <p>Adopted advanced technologies to enhance client experience.</p>
                            </div>
                        </div>
                    </div>
                </Container>
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

                    <Row className="align-items-center team-card rounded overflow-hidden mb-5" style={{ background: "#3A2E5F" }}>
                        <Col md={3} sm={12} className="p-0">
                            <div className="team-img-wrapper">
                                <img
                                    src="https://static.wixstatic.com/media/bff149_c46932560ddf4564868e6c1d91e888d3~mv2.jpg/v1/fill/w_282,h_387,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff149_c46932560ddf4564868e6c1d91e888d3~mv2.jpg"
                                    alt="Founder"
                                    className="img-fluid team-img w-100"
                                />
                            </div>
                        </Col>
                        <Col md={9} className="p-4">
                            <h4 className="fw-bold text-white mb-1">Mr Elangovan Sundharajan</h4>
                            <h6 className="fw-semibold text-white mb-3">Founder & Principal</h6>
                            <p className="text-white lh-lg mb-3">
                                With a visionary approach, Elango leads the way in setting high
                                standards and strategic direction for our company. His leadership
                                combines passion with purpose to drive excellence in every project.
                            </p>
                        </Col>
                    </Row>

                    <Row className="align-items-center team-card rounded overflow-hidden" style={{ background: "#3A2E5F" }}>
                        <Col md={3} sm={12} className="order-md-1 p-0">
                            <div className="team-img-wrapper">
                                <img
                                    src="https://static.wixstatic.com/media/bff149_6cd293f90f334d1bbcad1dd80fd46915~mv2.jpg/v1/fill/w_304,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bff149_6cd293f90f334d1bbcad1dd80fd46915~mv2.jpg"
                                    alt="Project Manager"
                                    className="img-fluid team-img w-100"
                                />
                            </div>
                        </Col>
                        <Col md={9} className="order-md-2 p-4">
                            <h4 className="fw-bold text-white mb-1">Mrs Lavanya Elangovan</h4>
                            <h6 className="fw-semibold text-white mb-3">Project Manager</h6>
                            <p className="text-white lh-lg mb-3">
                                Lavanya adeptly oversees our projects with precision and ensures
                                seamless execution of our client's objectives. Her attention to detail
                                and commitment to quality make her a key pillar of our success.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ScrollToTopButton />

        </>
    )

}

export default About;
