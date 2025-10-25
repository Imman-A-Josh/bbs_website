import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RicePage.css"; // You can rename to WheatPage.css if desired
import { Container, Button, Row, Col, Carousel, Table } from "react-bootstrap";

import WheatHero from '../Assets/wheat.avif'; // Replace with your wheat image

const wheatProducts = [
    {
        name: "Durum Wheat",
        images: [
            "https://img500.exportersindia.com/product_images/bc-500/2022/9/10776948/durum-wheat-1663307724-6541670.jpeg",
            "https://substackcdn.com/image/fetch/$s_!a1UH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b4fd35a-94f5-4ac2-a6b9-b494fb78c272_3000x3000.jpeg"
        ],
        desc: "Durum wheat is the hardest variety of wheat, rich in protein and gluten, mainly used for making semolina, pasta, and couscous. Its dense texture ensures a firm bite and rich taste in every dish.",
    },
    {
        name: "Soft Wheat",
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2021/9/PI/OI/HC/42057076/brown-wheat-tukdi-500x500.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2023/9/340003566/PM/UW/WS/194357229/soft-white-wheat-grain.jpg"
        ],
        desc: "Soft wheat has a lower protein content, making it perfect for bakery applications like cakes, pastries, biscuits, and cookies. It gives a light, fluffy texture and delicate flavor.",
    },
    {
        name: "Hard Red Wheat",
        images: [
            "https://fairhavenmill.com/cdn/shop/files/HardRedWheatBerry_2048x.png?v=1698203580",
            "https://2.wlimg.com/product_images/bc-full/2025/5/2056756/hard-red-wheat-1746693541-8050110.jpeg"
        ],
        desc: "Hard red wheat is high in gluten and essential minerals, ideal for bread, chapati, and other baked products that require elasticity and strength. It is widely used in global food industries.",
    },
];

const WheatPage = () => {

    const videos = [
        "https://video.wixstatic.com/video/bff149_4feeb45470564354a42041206ce424fc/480p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_5ae12325cac745209651501c0867d344/480p/mp4/file.mp4",

    ]

    return (
        <div className="rice-page">

            {/* Hero Section */}
            <section
                className="rice-hero text-center text-light d-flex align-items-center justify-content-center w-100"
                style={{
                    background: `url(${WheatHero}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: "80vh"
                }}
            >
                <Container>
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold shadow" style={{
                            WebkitTextStroke: "1px white",
                            color: "#3A2E5F",
                        }}>Premium Wheat Varieties</h1>
                        <p className="lead">High-quality wheat for flour, pasta, and bakery needs</p>
                        <div className="mt-3">
                            <Button href="/products" variant="light" className="px-4 me-2">Explore Products</Button>
                            <Button href="/contact" variant="outline-light" className="px-4">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Introduction Section */}
            <Container className="my-5 text-center">
                <h2 className="fw-bold text-purple">About Our Wheat</h2>
                <div className="underline mb-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    BBS India Pvt Ltd is a trusted name in exporting high-quality wheat.
                    Our wheat is sourced from premium farms, processed with advanced milling technology,
                    and packaged to maintain its natural nutrition and flavor.
                </p>
            </Container>

            {/* Wheat Types Section */}
            <Container className="my-5">
                {wheatProducts.map((wheat, idx) => (
                    <Row
                        key={idx}
                        className={`align-items-center mb-5 rice-item ${idx % 2 !== 0 ? "flex-row-reverse" : ""}`}
                    >
                        <Col md={6}>
                            <Carousel interval={1500} fade={true}>
                                {wheat.images.map((img, i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100 rounded shadow-sm img-fluid"
                                            style={{ borderRadius: "50%" }}
                                            src={img}
                                            alt={`${wheat.name} ${i + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <h3 className="fw-bold mt-3 mt-md-0">{wheat.name}</h3>
                            <p className="text-muted">{wheat.desc}</p>
                        </Col>
                    </Row>
                ))}
            </Container>

            <section className="video-section text-center py-5" style={{ backgroundColor: "#000" }}>
                <Container>
                    <h3 className="fw-bold text-light mb-4">Watch Our Wheat Process</h3>
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

            {/* Packaging & Export Info */}
            <Container className="my-5">
                <h2 className="fw-bold text-purple text-center mb-3">Packaging & Export Info</h2>
                <div className="underline mb-4"></div>
                <Table bordered responsive className="text-center shadow-sm rounded">
                    <thead className="table-light">
                        <tr>
                            <th>Wheat Type</th>
                            <th>Packaging Sizes</th>
                            <th>Export Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Durum Wheat</td>
                            <td>10kg, 25kg, 50kg</td>
                            <td>Global</td>
                        </tr>
                        <tr>
                            <td>Soft Wheat</td>
                            <td>10kg, 25kg</td>
                            <td>Asia, Europe</td>
                        </tr>
                        <tr>
                            <td>Hard Red Wheat</td>
                            <td>25kg, Bulk</td>
                            <td>Worldwide</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

            <section className="rice-cta text-center text-light py-5">
                <Container>
                    <h3 className="fw-bold">Looking for premium wheat suppliers?</h3>
                    <p>Partner with BBS India Pvt Ltd for quality wheat exports.</p>
                    <Button href="/contact" variant="light" className="px-4 mt-3">Get in Touch</Button>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="rice-why bg-light py-5 text-center">
                <Container>
                    <h2 className="fw-bold text-purple mb-4">Why Choose BBS Wheat</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>🌾 Superior Quality</h4>
                            <p className="text-muted small">High-grade wheat inspected for purity and nutrition.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>🚢 Export Expertise</h4>
                            <p className="text-muted small">Trusted globally for consistent and timely supply.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>📦 Flexible Packaging</h4>
                            <p className="text-muted small">Custom packaging for retail, bulk, and international markets.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact CTA */}


        </div>
    );
};

export default WheatPage;
