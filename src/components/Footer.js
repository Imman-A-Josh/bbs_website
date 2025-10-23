import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                        <ul className="list-unstyled" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '6px' }}>About Us</li>
                            <li style={{ marginBottom: '6px' }}>Services</li>
                            <li style={{ marginBottom: '6px' }}>Contact Us</li>
                        </ul>

                    </Col>
                    <Col md={3}>
                        <h6 className="fw-bold mb-3">Products</h6>
                        <ul className="list-unstyled" style={{ fontSize: '0.9rem', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '6px' }}>Petroleum</li>
                            <li style={{ marginBottom: '6px' }}>Metal & Mineral</li>
                            <li style={{ marginBottom: '6px' }}>Agro Product</li>
                            <li style={{ marginBottom: '6px' }}>Apparel</li>
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
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.5}}>
                            Dubai, Qatar, Singapore, Malaysia, Indonesia, United Kingdom, Ireland, Germany, Switzerland, Portugal, Spain, USA - Miami, Mexico, Canada
                        </p>
                    </Col>
                </Row>

                {/* Bottom Footer */}
                <Row className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
                    <Col md={8} style={{ fontSize: '0.85rem' }}>
                        2025 BIBLIA BUSINESS SOLUTIONS INDIA PRIVATE LIMITED. All Rights Reserved. Disclaimer | Privacy Policy | T&C
                    </Col>
                    <Col md={4} className="text-md-end" style={{ fontSize: '0.85rem' }}>
                        Stay Connected: <span style={{ marginLeft: '10px' }}>FB | INSTA | TW | YT | LIN</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
