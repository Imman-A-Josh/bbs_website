import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";

import SoyaBeanImage from '../Assets/Agro/Soya.jpg';

const SoyaBeanPage = () => {

    const videos = [
        "https://video.wixstatic.com/video/bff149_db09c24ecf784d609ba191e22c6f9e20/720p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_bdf0dd257b4c43d1a80f3e61687821d7/480p/mp4/file.mp4",
    ]

    return (
        <div className="soya-bean-page">

            {/* Hero Section */}
            <section
                className="soya-hero text-center text-light d-flex align-items-center justify-content-center w-100"
                style={{
                    background: `url(${SoyaBeanImage}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: "70vh",
                }}
            >
                <Container>
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold shadow" style={{
                            WebkitTextStroke: "1px white",
                            color: "#3A2E5F",
                        }}>Premium Soya Bean Products</h1>
                        <p className="lead">High-quality soya beans sourced from trusted farms</p>
                        <div className="mt-3">
                            <Button href="/products" variant="light" className="px-4 me-2">Explore Products</Button>
                            <Button href="/contact" variant="outline-light" className="px-4">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Introduction Section */}
            <Container className="my-5 text-center">
                <h2 className="fw-bold text-purple">About Our Soya Beans</h2>
                <div className="underline mb-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Our soya beans are carefully selected and processed to maintain freshness, purity, and high protein content. Ideal for food processing, oil extraction, animal feed, and industrial applications.
                </p>
            </Container>

            {/* Soya Bean Details Section */}
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <img
                            src={SoyaBeanImage}
                            alt="Premium Soya Beans"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3 className="fw-bold mt-3 mt-md-0">Soya Beans</h3>
                        <p className="text-muted">
                            Our soya beans are sourced from leading farms and undergo stringent quality checks to ensure maximum purity and nutritional value.
                        </p>
                        <p>
                            Rich in protein and essential amino acids, our soya beans are suitable for a variety of uses including food production, oil extraction, and animal feed.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <div className="mt-5 specification-section">
                        <h5 className="fw-bold mb-3">Specifications</h5>

                        <h5 className="mb-1">1. Physical Characteristics</h5>
                        <ul>
                            <li><strong>Color:</strong> Uniform light brown to yellow</li>
                            <li><strong>Odor:</strong> Natural, free from foreign odors</li>
                            <li><strong>Texture:</strong> Firm and intact beans with minimal damage</li>
                            <li><strong>Taste:</strong> Neutral, not bitter or sour</li>
                        </ul>

                        <h5 className="mb-1">2. Size and Weight</h5>
                        <ul>
                            <li><strong>1000 Kernel Weight:</strong> 140-160 grams (varies by variety)</li>
                            <li><strong>Bean Size:</strong> Uniform and consistent</li>
                        </ul>

                        <h5 className="mb-1">3. Moisture Content</h5>
                        <p>Maximum: 13% (to prevent mold and spoilage)</p>

                        <h5 className="mb-1">4. Purity and Admixture</h5>
                        <ul>
                            <li><strong>Purity:</strong> Minimum 98%</li>
                            <li><strong>Foreign Matter:</strong> Max 1%</li>
                            <li><strong>Broken Beans:</strong> Max 2%</li>
                            <li><strong>Damaged Beans:</strong> Max 2%</li>
                        </ul>

                        <h5 className="mb-1">5. Protein Content</h5>
                        <p>Range: 35%-40%</p>

                        <h5 className="mb-1">6. Oil Content</h5>
                        <p>Range: 18%-22%</p>

                        <h5 className="mb-1">7. Packaging</h5>
                        <ul>
                            <li>Packed in jute or polypropylene bags (25kg, 50kg, bulk)</li>
                            <li>Clear labeling including product name, weight, origin, and batch details</li>
                        </ul>

                        <h5 className="mb-1">8. Storage</h5>
                        <p>Store in a cool, dry place to maintain freshness and prevent pest infestation.</p>
                    </div>
                </Row>
            </Container>

            <section className="video-section text-center py-5" style={{ backgroundColor: "#000" }}>
                <Container>
                    <h3 className="fw-bold text-light mb-4">Watch Our Soyabean Process</h3>
                    <p className="text-light mb-4">Premium wheat sourcing and processing in action</p>

                    <Row>
                        {videos.map((video, index) => (
                            <Col key={index} md={6} className="mb-3">
                                <video
                                    src={video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        objectFit: "cover",
                                        maxHeight: "300px",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.5)"
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="soya-cta text-center text-light py-5" style={{ backgroundColor: "#3A2E5F" }}>
                <Container>
                    <h3 className="fw-bold">Ready to source premium soya beans?</h3>
                    <p>Partner with BBS India Pvt Ltd for quality and reliability.</p>
                    <Button href="/contact" variant="light" className="px-4 mt-3">Get in Touch</Button>
                </Container>
            </section>

            {/* Why Choose Us Section */}
            <section className="soya-why bg-light py-5 text-center">
                <Container>
                    <h2 className="fw-bold text-purple mb-4">Why Choose BBS Soya Beans</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>🌱 Superior Quality</h4>
                            <p className="text-muted small">Strict quality checks ensure the best soya beans.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>🚚 Reliable Supply</h4>
                            <p className="text-muted small">Consistent and timely deliveries for domestic and export markets.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>📦 Flexible Packaging</h4>
                            <p className="text-muted small">Custom packaging options tailored to your needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default SoyaBeanPage;
