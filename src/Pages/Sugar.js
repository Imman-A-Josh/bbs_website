import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RicePage.css";
import { Container, Button, Row, Col, Carousel, Table } from "react-bootstrap";

import SugarImage from '../Assets/sugar.jpg';

const sugarProducts = [
    {
        name: "S-30 White Sugar",
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2020/10/PR/LU/GC/106270270/s30-white-refined-sugar.jpg",
            "https://tiimg.tistatic.com/fp/1/007/993/100-pure-unadulterated-high-quality-white-s30-sugar-340.jpg",
            "https://2.wlimg.com/product_images/bc-500/2025/6/9366848/s30-sugar-1749617229-8126718.jpeg",
        ],
        desc: "S-30 White Sugar is refined to a standardized granule size ensuring consistent sweetness, high purity, and excellent solubility. Ideal for both domestic consumption and large-scale industrial applications like beverages, confectionery, and baked goods. Its uniform quality makes it preferred by clients worldwide.",
    },
    {
        name: "ICUMSA 45 White Sugar",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeff7fq-wNlQHLhqOtEFGdRMDs-qxeUBtPsw&s",
            "https://5.imimg.com/data5/SELLER/Default/2020/10/PY/FX/GV/11217368/refined-sugara-500x500.jpg",
            "https://cpimg.tistatic.com/07821825/b/4/Refined-White-Sugar-Icumsa-45.jpeg",
        ],
        desc: "ICUMSA 45 White Sugar is a highly refined, bright white sugar with superior purity and fine granulation. Perfect for premium confectionery, beverages, and industrial food processing. It meets international standards for color, solubility, and sweetness consistency.",
    },
    {
        name: "Brazil Sugar ICUMSA 45",
        images: [
            "https://www.akzcorps.com/upload_images/sugar-icumsa-4513-10-2024-133925.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSxLvIFZIom8uN6i1_YWDe6CqgyENTC8euw&s",
            "https://2.wlimg.com/product_images/bc-500/2024/8/5244036/icumsa-45-sugar-brazil-origin-1723549939-7563785.jpg",
        ],
        desc: "Imported from Brazil, ICUMSA 45 Sugar offers high-quality granules with excellent color and purity. Suitable for international markets and industrial usage, ensuring consistent sweetness, solubility, and hygiene standards.",
    },
    {
        name: "Raw Sugar",
        images: [
            "https://www.motherjones.com/wp-content/uploads/sugar-master.gif?w=990",
            "https://tastecooking.com/wp-content/uploads/2018/10/shutterstock_433545598-2000x1333.jpg",
            "https://media.istockphoto.com/id/535504284/photo/raw-sugar-still-life.jpg?s=612x612&w=0&k=20&c=VuBa-2javxRFBj1fZyGeeRjVBS_B7JVwPCXX8rImGww=",
        ],
        desc: "Raw Sugar retains natural molasses content, giving a rich aroma and slightly brown color. Less processed than refined sugar, it’s ideal for natural sweetening in beverages, baking, and food manufacturing, while providing trace minerals and a unique flavor profile.",
    },
];

const SugarPage = () => {

    const videos = [
        "https://video.wixstatic.com/video/bff149_2e6bf81db44b40aa959a78859a3418c5/480p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_fabf0d15060b472f9fff952ed68ad136/480p/mp4/file.mp4",
        "https://video.wixstatic.com/video/bff149_3ab41d8c6c234c898921e52850824820/480p/mp4/file.mp4"
    ];

    return (
        <div className="sugar-page">
            {/* Hero Section */}
            <section
                className="sugar-hero text-center text-light d-flex align-items-center justify-content-center w-100"
                style={{
                    background: `url(${SugarImage}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: "80vh"
                }}
            >
                <Container>
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold shadow" style={{
                            WebkitTextStroke: "1px white",
                            color: "#3A2E5F",
                        }}>Our Premium Sugar Collection</h1>
                        <p className="lead">High-quality sugars sourced and processed for global markets</p>
                        <div className="mt-3">
                            <Button href="/products" variant="light" className="px-4 me-2">Explore Products</Button>
                            <Button href="/contact" variant="outline-light" className="px-4">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Introduction Section */}
            <Container className="my-5 text-center">
                <h2 className="fw-bold text-purple">About Our Sugar</h2>
                <div className="underline mb-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    BBS India Pvt Ltd is a trusted name in the export of high-quality sugar varieties.
                    Our products are sourced from select refineries and mills, processed to retain purity and quality.
                </p>
            </Container>

            {/* Sugar Types Section */}
            <Container className="my-5">
                {sugarProducts.map((sugar, idx) => (
                    <Row
                        key={idx}
                        className={`align-items-center mb-5 sugar-item ${idx % 2 !== 0 ? "flex-row-reverse" : ""}`}
                    >
                        <Col md={6}>
                            <div className="carousel-wrapper">
                                <Carousel interval={1500} fade={true}>
                                    {sugar.images.map((img, i) => (
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100 rounded shadow-sm img-fluid"
                                                src={img}
                                                alt={`${sugar.name} ${i + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>

                        <Col md={6}>
                            <h3 className="fw-bold mt-3 mt-md-0">{sugar.name}</h3>
                            <p className="text-muted">{sugar.desc}</p>
                        </Col>
                    </Row>
                ))}
            </Container>

            <section className="video-section text-center py-5" style={{ backgroundColor: "#000" }}>
                <Container>
                    <h3 className="fw-bold text-light mb-4">Watch Our Sugar Process</h3>
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

            {/* Packaging & Export Info */}
            <Container className="my-5">
                <h2 className="fw-bold text-purple text-center mb-3">Packaging & Export Info</h2>
                <div className="underline mb-4"></div>
                <Table bordered responsive className="text-center shadow-sm rounded">
                    <thead className="table-light">
                        <tr>
                            <th>Sugar Type</th>
                            <th>Packaging Sizes</th>
                            <th>Export Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S-30 White Sugar</td>
                            <td>25kg, 50kg, 1MT</td>
                            <td>Global</td>
                        </tr>
                        <tr>
                            <td>ICUMSA 45 White Sugar</td>
                            <td>25kg, 50kg, 1MT</td>
                            <td>Global</td>
                        </tr>
                        <tr>
                            <td>Brazil Sugar ICUMSA 45</td>
                            <td>25kg, 50kg, 1MT</td>
                            <td>Global</td>
                        </tr>
                        <tr>
                            <td>Raw Sugar</td>
                            <td>25kg, 50kg, Bulk</td>
                            <td>Domestic & Export</td>
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

export default SugarPage;
