import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGlobe, FaBoxOpen, FaHandshake, FaShippingFast, FaUsers, FaAward } from "react-icons/fa";
import serviceImage from '../Assets/services.png'
import ScrollToTopButton from "../components/ScrollToTopButton";

const Services = () => {
    const services = [
        {
            icon: <FaGlobe />,
            title: "Comprehensive Global Trade Solutions",
            desc: "Expertise in managing end-to-end international trade operations — from sourcing to logistics — ensuring smooth and efficient global transactions.",
        },
        {
            icon: <FaBoxOpen />,
            title: "Diverse Commodity Portfolio",
            desc: "Specialization in a wide range of products including petroleum, minerals, food commodities (rice, maize, sugar, etc.), apparel, and coal, catering to multiple industries and markets.",
        },
        {
            icon: <FaHandshake />,
            title: "Strategic Sourcing & Quality Assurance",
            desc: "Strong supplier network and rigorous quality control standards to ensure only the finest products reach our clients.",
        },
        {
            icon: <FaShippingFast />,
            title: "Efficient Supply Chain & Logistics Management",
            desc: "Advanced logistics planning and coordination to guarantee on-time delivery and cost-effective distribution across global markets.",
        },
        {
            icon: <FaUsers />,
            title: "Customer-Centric Approach",
            desc: "Focused on building long-term partnerships through transparency, trust, and personalized service that meet the unique needs of every client.",
        },
        {
            icon: <FaAward />,
            title: "Integrity, Innovation & Excellence",
            desc: "Driven by ethical practices, innovative strategies, and a commitment to excellence that sets BBS INDIA apart in the global trading industry.",
        },
    ];

    return (
        <>
            <section className="about-banner-section">
                <div className="image-container position-relative text-center">
                    <img
                        src={serviceImage}
                        alt="Banner"
                        className="banner-img"
                    />
                </div>
            </section>
            
            <section className="services-section py-5">
                <Container>
                    <div className="text-center mb-5 mt-3">
                        <div className="text-center">
                            <h1 className="fw-bold mb-4">Our Specialities</h1>
                            <div
                                className="mx-auto"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                        </div>
                        <p className="text-secondary mt-3">
                            Excellence in every trade — connecting global markets through trust, innovation, and integrity.
                        </p>
                    </div>
                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col md={6} lg={4} key={index}>
                                <Card
                                    className="h-100 shadow-lg border-0 service-card"
                                    style={{
                                        background: "#3A2E5F",
                                        borderRadius: "20px",
                                        transition: "transform 0.4s, background 0.4s",
                                    }}
                                >
                                    <Card.Body className="p-4">
                                        <div
                                            className="icon mb-3 text-center"
                                            style={{
                                                fontSize: "2.5rem",
                                                color: "#fbbf24",
                                            }}
                                        >
                                            {service.icon}
                                        </div>
                                        <Card.Title className="fw-bold text-light mb-3 text-center">
                                            {service.title}
                                        </Card.Title>
                                        <Card.Text className="text-white" style={{ fontSize: "13px" }}>{service.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section
                className="what-we-do-section py-5"
                style={{ background: "#f9fafd" }}
            >
                <Container>
                    <div className="text-center mb-5">
                        <div className="text-center">
                            <h1 className="fw-bold mb-4">What We Do</h1>
                            <div
                                className="mx-auto"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                        </div>
                        <p className="text-muted mt-3">
                            At <strong>BBS India</strong>, we provide integrated global trade solutions — combining
                            expertise in sourcing, logistics, and supply chain management to deliver world-class
                            services worldwide.
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <Card
                                className="h-100 text-center border-0 shadow-sm hover-card"
                                style={{ borderRadius: "20px" }}
                            >
                                <Card.Body>
                                    <h5 className="fw-bold">Global Trading & Sourcing</h5>
                                    <p className="text-muted" style={{ fontSize: "14px" }}>
                                        Leveraging our worldwide network to source and distribute
                                        high-quality commodities efficiently.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card
                                className="h-100 text-center border-0 shadow-sm hover-card"
                                style={{ borderRadius: "20px" }}
                            >
                                <Card.Body>
                                    <h5 className="fw-bold">Logistics & Supply Chain</h5>
                                    <p className="text-muted" style={{ fontSize: "14px" }}>
                                        Optimized logistics and delivery planning ensuring reliability
                                        and cost efficiency.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card
                                className="h-100 text-center border-0 shadow-sm hover-card"
                                style={{ borderRadius: "20px" }}
                            >
                                <Card.Body>
                                    <h5 className="fw-bold">Strategic Partnerships</h5>
                                    <p className="text-muted" style={{ fontSize: "14px" }}>
                                        Building long-term supplier and client relationships founded
                                        on trust and transparency.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={3}>
                            <Card
                                className="h-100 text-center border-0 shadow-sm hover-card"
                                style={{ borderRadius: "20px" }}
                            >
                                <Card.Body>
                                    <h5 className="fw-bold">Quality & Warehousing</h5>
                                    <p className="text-muted" style={{ fontSize: "14px" }}>
                                        Stringent quality assurance and efficient warehousing for safe
                                        product handling and storage.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ScrollToTopButton />
        </>
    );
};

export default Services;
