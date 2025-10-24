import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We’ll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (

        <>
            <section
                className="contact-section py-5 mt-5"
                style={{ backgroundColor: "#201547", minHeight: "100vh" }}
            >
                <Container>
                    <div className="text-center mb-5 mt-5">
                        <h2 className="fw-bold text-light">Contact Us</h2>
                        <p className="text-light">
                            We’re here to answer your questions and help you grow your business.
                        </p>
                    </div>

                    <Row className="justify-content-center">
                        {/* Form Section */}
                        <Col md={6} className="mb-4">
                            <Card className="p-4 shadow-lg border-0 rounded-4">
                                <h5 className="fw-bold mb-4 text-center">Get in Touch</h5>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Control
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formSubject">
                                        <Form.Control
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            placeholder="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="px-5 py-2 fw-bold"
                                            style={{
                                                backgroundColor: "#3A2E5F",
                                                border: "none",
                                                borderRadius: "30px",
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </Form>
                            </Card>
                        </Col>

                        <Col md={5}>
                            <div className="text-light ps-md-4">
                                <h5 className="fw-bold mb-3">Contact Information</h5>
                                <p>
                                    <strong>Address:</strong> Raheja Towers, 177 Anna Salai (Mount Road), Chennai - 600002, Tamil Nadu, India
                                </p>
                                <p>
                                    <strong>Email:</strong> marketing@bbsindiapvtltd.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> +91- 80881 62610
                                </p>


                                <div className="mt-4">
                                    <iframe
                                        title="Raheja Towers Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.57674023717!2d80.2623965737335!3d13.062591912879515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266177ab3c1e7%3A0x43fcda2afdada5d8!2sRaheja%20Towers!5e0!3m2!1sen!2sin!4v1761218615780!5m2!1sen!2sin"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0, borderRadius: "10px" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ContactUs;
