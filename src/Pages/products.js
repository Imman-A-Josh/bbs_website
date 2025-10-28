import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // if using react-router
import ScrollToTopButton from "../components/ScrollToTopButton";
import agroImage from '../Assets/Agro/Agroall.jpg';
import productImage from '../Assets/ProductHome.jpg';

import petroleumImage from '../Assets/Petrol/petrol.png';
import metalImage from '../Assets/Metals/proMetalHeading.jpg';

const Products = () => {

    const products = [
        {
            id: "PETROLEUM",
            title: "PETROLEUM",
            description: "We provide sustainable, safe petroleum services with minimal environmental impact.",
            image: petroleumImage,
            navigationLink: "/products/petroleum"
        },
        {
            id: "METALS-MINERALS",
            title: "METALS & MINERALS",
            description: "BBS Trading offers high-grade Bonny Light Crude Oil (BL) from Nigeria, valuable and easy-to-process.",
            image: metalImage,
            navigationLink: "/products/metals"
        },
        {
            id: "AGRO-PRODUCTS",
            title: "AGRO PRODUCTS",
            description: "EN 590 diesel fuel standard enhances air quality, engine efficiency, and reduces health hazards.",
            image: agroImage,
            navigationLink: "/products/agro"
        },
    ];

    return (
        <>
            {/* Banner Section */}
            <section className="about-banner-section">
                <div className="image-container position-relative text-center">
                    <img
                        src={productImage}
                        alt="Banner"
                        className="banner-img"
                    />
                </div>
            </section>

            {/* Products Cards Section */}
            <section id="products" className="py-5" style={{ backgroundColor: "#f5f7fa" }}>
                <Container>
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="fw-bold" style={{ color: "#3A2E5F" }}>Our Products</h2>
                            <div
                                className="mx-auto my-3"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            />
                            <p className="lh-lg mx-auto" style={{ maxWidth: '600px', color: '#555' }}>
                                Explore our diverse range of products offering quality and reliability in every sector.
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {products.map(({ id, title, description, image, navigationLink }) => (
                            <Col md={6} lg={4} key={id}>
                                <Card className="shadow-sm h-100 hover-card">
                                    <Card.Img variant="top" src={image} style={{ height: '250px', objectFit: 'cover' }} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="fw-bold" style={{ color: "#3A2E5F" }}>{title}</Card.Title>
                                        <Card.Text className="flex-grow-1" style={{ fontSize: '0.95rem', color: '#555' }}>
                                            {description}
                                        </Card.Text>
                                        <Link to={navigationLink} className="mt-auto">
                                            <Button
                                                variant="primary"
                                                className="fw-semibold px-4 py-2"
                                                style={{ backgroundColor: "#3A2E5F", border: "none", borderRadius: "6px" }}
                                            >
                                                Read More
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <ScrollToTopButton />

        </>
    );
};

export default Products;
