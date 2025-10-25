import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Table } from "react-bootstrap";

import MaizeImage from '../Assets/Agro/Corn.jpg';

const MaizePage = () => {

    const videos = [
        "https://video.wixstatic.com/video/bff149_f95dc0e1f4ab448eb5794d34ac300e11/480p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_12e0d2f79bbd4aa4b0def38eaf6eb5f1/480p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_ad82b9a331764e48b3ab4d9be92cf2db/480p/mp4/file.mp4",
    ]

    return (
        <div className="maize-page">

            {/* Hero Section */}
            <section
                className="maize-hero text-center text-light d-flex align-items-center justify-content-center w-100"
                style={{
                    background: `url(${MaizeImage}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: "70vh",
                }}
            >
                <Container>
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold shadow" style={{
                            WebkitTextStroke: "1px white",
                            color: "#3A2E5F",
                        }}>Premium Maize Products</h1>
                        <p className="lead">Fresh, high-quality maize sourced directly from trusted farms</p>
                        <div className="mt-3">
                            <Button href="/products" variant="light" className="px-4 me-2">Explore Products</Button>
                            <Button href="/contact" variant="outline-light" className="px-4">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Introduction Section */}
            <Container className="my-5 text-center">
                <h2 className="fw-bold text-purple">About Our Maize</h2>
                <div className="underline mb-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    Our maize is carefully sourced and processed to ensure optimal freshness, purity, and versatility for agricultural and culinary needs. Perfect for animal feed, food processing, and industrial applications.
                </p>

            </Container>

            {/* Maize Details Section */}
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <img
                            src={MaizeImage}
                            alt="Premium Maize"
                            className="img-fluid rounded shadow"
                        />
                    </Col>
                    <Col md={6}>
                        <h3 className="fw-bold mt-3 mt-md-0">Yellow Maize</h3>
                        <p className="text-muted">
                            Yellow maize is a versatile grain widely used in food products and animal feed. It is rich in essential nutrients and processed under strict quality standards to meet export requirements.
                        </p>
                        <p>

                            Yellow corn 12.jpeg
                            Maize
                            Our maize is meticulously sourced to ensure the highest quality, adhering to global safety standards. Each batch undergoes rigorous quality checks, ensuring that you receive only the finest for your requirements.


                            Indian Yellow Corn, also known as maize, is a widely cultivated grain in India. It is primarily grown in the states of Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra, and Uttar Pradesh. Here are some key aspects about Indian Yellow Corn
                        </p>

                        {/* Specifications Table */}
                        {/* <Table bordered responsive className="shadow-sm rounded mt-4">
                            <thead className="table-light">
                                <tr>
                                    <th>Specification</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Moisture Content</td>
                                    <td>13% max</td>
                                </tr>
                                <tr>
                                    <td>Purity</td>
                                    <td>99.5%</td>
                                </tr>
                                <tr>
                                    <td>Packaging Sizes</td>
                                    <td>25kg, 50kg, Bulk</td>
                                </tr>
                                <tr>
                                    <td>Storage</td>
                                    <td>Cool, dry place</td>
                                </tr>
                                <tr>
                                    <td>Applications</td>
                                    <td>Food, Feed, Industrial Use</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button href="/contact" variant="primary" className="mt-4 px-4">
                            Contact for Orders
                        </Button> */}
                    </Col>
                </Row>
                <Row>
                    <div className="mt-5">
                        <p>
                            Varieties and Quality: Indian Yellow Corn is known for its high nutritional value, rich in carbohydrates, and provides a good source of vitamins A, B, and E. It is available in various grades based on quality parameters like moisture content, grain size, and cleanliness. The most common variety is dent corn, which is used both for human consumption and industrial purposes.
                        </p>
                        <p>
                            Export Market: Indian Yellow Corn has a significant export market, particularly in Southeast Asia, the Middle East, and African countries. The export demand is driven by its competitive pricing, good quality, and India's capability to meet large-scale orders
                        </p>
                    </div>
                </Row>

                <Row>
                    <div className="mt-5 specification-section">
                        <h5 className="fw-bold mb-3">Specification</h5>

                        <h5 className="mb-1">1. Physical Characteristics</h5>
                        <ul>
                            <li><strong>Color:</strong> Uniform bright yellow</li>
                            <li><strong>Odor:</strong> Free from sour, musty, or objectionable odors</li>
                            <li><strong>Texture:</strong> Hard and uniform kernels with minimal damage</li>
                            <li><strong>Taste:</strong> Sweet, not bitter or sour</li>
                        </ul>

                        <h5 className="mb-1">2. Grain Size</h5>
                        <ul>
                            <li><strong>1000 Kernel Weight:</strong> 250-350 grams (varies by variety)</li>
                            <li><strong>Grain Shape:</strong> Uniform and consistent</li>
                        </ul>

                        <h5 className="mb-1">3. Moisture Content</h5>
                        <p>Maximum: 13%–14% (prevents mold/spoilage during storage and transport)</p>

                        <h5 className="mb-1">4. Purity and Admixture</h5>
                        <ul>
                            <li><strong>Purity:</strong> Minimum 98%</li>
                            <li><strong>Foreign Matter:</strong> Max 1%</li>
                            <li><strong>Broken Kernels:</strong> Max 2%-5%</li>
                            <li><strong>Damaged Kernels:</strong> Max 2%-4%</li>
                            <li><strong>Immature/Shrivelled Kernels:</strong> Max 2%</li>
                            <li><strong>Other Grains:</strong> Max 1%</li>
                        </ul>

                        <h5 className="mb-1">5. Aflatoxins & Mycotoxins</h5>
                        <ul>
                            <li><strong>Aflatoxins:</strong> Max 20 ppb</li>
                            <li><strong>Mycotoxins:</strong> Must be absent or within legal limits</li>
                        </ul>

                        <h5 className="mb-1">6. Insect Damage</h5>
                        <ul>
                            <li><strong>Live Insects:</strong> None</li>
                            <li><strong>Dead Insects:</strong> Max 0.5% by weight</li>
                        </ul>

                        <h5 className="mb-1">7. Protein Content</h5>
                        <p>Range: 7%-10%</p>

                        <h5 className="mb-1">8. Fat Content</h5>
                        <p>Range: 3%-5%</p>

                        <h5 className="mb-1">9. Fiber Content</h5>
                        <p>Range: 2%-4%</p>

                        <h5 className="mb-1">10. Starch Content</h5>
                        <p>Range: 65%-70%</p>

                        <h5 className="mb-1">11. Pesticide Residue</h5>
                        <p>
                            Complies with international safety norms (Codex Alimentarius, EU standards).
                        </p>

                        <h5 className="mb-1">12. Packaging</h5>
                        <ul>
                            <li>Typically packed in jute or polypropylene bags (25kg, 50kg, bulk)</li>
                            <li>Clear labeling: product, weight, origin, quality grade, packing date</li>
                        </ul>

                        <h5 className="mb-1">13. Storage</h5>
                        <p>
                            Store in a cool, dry place under fumigated conditions to prevent insects and moisture damage.
                        </p>
                    </div>
                </Row>

            </Container>

            <section className="video-section text-center py-5" style={{ backgroundColor: "#000" }}>
                <Container>
                    <h3 className="fw-bold text-light mb-4">Watch Our Maize Process</h3>
                    <p className="text-light mb-4">Premium wheat sourcing and processing in action</p>

                    <Row>
                        {videos.map((video, index) => (
                            <Col key={index} md={4} className="mb-3">
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

            <section className="maize-cta text-center text-light py-5" style={{ backgroundColor: "#3A2E5F" }}>
                <Container>
                    <h3 className="fw-bold">Ready to source quality maize?</h3>
                    <p>Partner with BBS India Pvt Ltd for premium maize and excellent service.</p>
                    <Button href="/contact" variant="light" className="px-4 mt-3">Get in Touch</Button>
                </Container>
            </section>

            {/* Why Choose Us Section */}
            <section className="maize-why bg-light py-5 text-center">
                <Container>
                    <h2 className="fw-bold text-purple mb-4">Why Choose BBS Maize</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>🌽 Superior Quality</h4>
                            <p className="text-muted small">Strict quality checks ensure the best maize for our customers.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>🚛 Reliable Supply</h4>
                            <p className="text-muted small">Consistent supply chain for domestic and international markets.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>📦 Custom Packaging</h4>
                            <p className="text-muted small">Flexible packaging options to suit your business needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};

export default MaizePage;
