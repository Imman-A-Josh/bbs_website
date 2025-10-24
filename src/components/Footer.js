import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3A2E5F', color: 'white', padding: '40px 20px' }}>
            <Container>
                {/* Top Section */}
                <Row className="mb-4">
                    {/* Address */}
                    <Col md={3} className="mb-3">
                        <h6 className="fw-bold mb-3">Address</h6>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                            306, Raheja Tower, Office No: 505,<br />
                            5th Floor, Delta Wing, Anna Salai,<br />
                            Tamil Nadu - 600002.
                        </p>
                    </Col>

                    {/* About Us & Products */}
                    <Col md={3} className="mb-3">
                        <h6 className="fw-bold mb-3">Company</h6>
                        <ul className="list-unstyled" style={{ fontSize: "0.9rem", paddingLeft: 0 }}>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
                            </li>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/services" className="text-light text-decoration-none">Services</Link>
                            </li>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/contact" className="text-light text-decoration-none">Contact Us</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6 className="fw-bold mb-3">Products</h6>
                        <ul className="list-unstyled" style={{ fontSize: "0.9rem", paddingLeft: 0 }}>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/products/petroleum" className="text-light text-decoration-none">Petroleum</Link>
                            </li>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/products/metals" className="text-light text-decoration-none">Metal & Mineral</Link>
                            </li>
                            <li style={{ marginBottom: "6px" }}>
                                <Link to="/products/agro" className="text-light text-decoration-none">Agro Product</Link>
                            </li>
                        </ul>
                    </Col>
                    {/* Registered Office */}
                    <Col md={3}>
                        <h6 className="fw-bold">Registered Office</h6>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                            Plot No- 164, Tasiowa Nagar,<br />
                            Palanthandalam Village, Thirumudivakkam,<br />
                            Chennai - 600 044.
                        </p>
                    </Col>
                </Row>

                {/* Branches */}
                <Row className="mb-4">
                    <Col md={6}>
                        <h6 className="fw-bold">Branches</h6>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                            Dubai, Qatar, Singapore, Malaysia, Indonesia, United Kingdom, Ireland, Germany, Switzerland, Portugal, Spain, USA - Miami, Mexico, Canada
                        </p>
                    </Col>
                </Row>

                {/* Bottom Footer */}
                <Row className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}>
                    {/* Left side */}
                    <Col md={8} style={{ fontSize: "0.85rem" }}>
                        © 2025 <strong>BIBLIA BUSINESS SOLUTIONS INDIA PRIVATE LIMITED</strong>. All Rights Reserved.{" "}
                        <a href="/" className="text-decoration-none text-light mx-1">
                            Disclaimer
                        </a>
                        |
                        <a href="/" className="text-decoration-none text-light mx-1">
                            Privacy Policy
                        </a>
                        |
                        <a href="/" className="text-decoration-none text-light mx-1">
                            T&amp;C
                        </a>
                    </Col>

                    {/* Right side with icons */}
                    <Col md={4} className="text-md-end mt-3 mt-md-0" style={{ fontSize: "0.85rem" }}>
                        Stay Connected:
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                            <FaYoutube />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light ms-3">
                            <FaLinkedinIn />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
