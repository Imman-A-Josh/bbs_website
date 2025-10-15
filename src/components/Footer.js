import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Assets/logo.avif'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3A2E5F', color: 'white', paddingTop: '40px' }}>
            <Container>
                <Row className="pb-4">
                    <Col md={4} className="mb-2">
                        <div className="d-flex align-items-center mb-2">
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ width: '30px', marginRight: '10px' }}
                            />
                            <h5 className="mb-0 fw-bold">BIBLIA</h5>
                        </div>
                        <p style={{ maxWidth: '250px' }}>
                            We are committed to delivering exceptional services that drive international trade success for our clients.
                        </p>
                    </Col>

                    <Col md={3} className="mb-2">
                        <h6 className="fw-bold">Company</h6>
                        <ul className="list-unstyled  ">
                            <li><a href="#about" className="text-decoration-none text-white">About</a></li>
                            <li><a href="#product" className="text-decoration-none text-white">Products</a></li>
                        </ul>
                    </Col>

                    <Col md={3} className="mb-2">
                        <h6 className="fw-bold">Resources</h6>
                        <ul className="list-unstyled">
                            <li><a href="#contact" className="text-decoration-none text-white">Contact us</a></li>
                        </ul>
                    </Col>

                    <Col md={2} className="mb-2">
                        <h6 className="fw-bold">Help</h6>
                        <ul className="list-unstyled">
                            <li><a href="#terms" className="text-decoration-none text-white">Terms of use</a></li>
                            <li><a href="#cookies" className="text-decoration-none text-white">Cookies</a></li>
                            <li><a href="#privacy" className="text-decoration-none text-white">Privacy policy</a></li>
                        </ul>
                    </Col>
                </Row>

                <hr />

                <Row className="pb-3 text-center">
                    <small>© 2025 BIBLIA Technologies. All rights reserved</small>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
