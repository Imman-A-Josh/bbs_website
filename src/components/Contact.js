import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";
import ContactImage from '../Assets/contact.jpg'

const ContactInfo = () => {
    const info = [
        {
            icon: <GeoAltFill size={25} color="white" />,
            bg: "#212121",
            title1: "Raheja Towers,306 Mount Road,",
            title2: "Chennai, India 600002",
        },
        {
            icon: <EnvelopeFill size={25} color="white" />,
            bg: "#f5425d",
            title1: "hello@gmail.com",
            title2: "support@gmail.com",
        },
        {
            icon: <TelephoneFill size={25} color="white" />,
            bg: "#42a5f5",
            title1: "91- 80881 62610",
            title2: "91- 80881 62610",
        },
    ];

    return (
        <section id="contactus" className="py-5 mt-5">
            <Container className="mt-5">
                <div className="text-center">
                    <h2 className="fw-bold mb-4">Contact Us</h2>
                    <div className="mx-auto mb-5" style={{ width: "60px", height: "3px", background: "#3A2E5F" }}></div>
                </div>
                <Row className="text-center text-md-start align-items-center justify-content-center g-4">
                    {info.map((item, index) => (
                        <Col md={4} key={index} className="d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: item.bg,
                                        width: "60px",
                                        height: "60px",
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="mb-0 fw-semibold">{item.title1}</p>
                                    <p className="mb-0 text-muted">{item.title2}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className="align-items-center shadow-lg rounded overflow-hidden mt-5">
                    <Col md={6} className="p-4">
                        <img
                            src={ContactImage}
                            alt="Contact"
                            className="img-fluid h-100 w-100 object-fit-cover"
                            style={{ height: '100%' }}
                        />
                    </Col>

                    <Col md={6} className="bg-white p-4 mt-3">

                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Your Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" required />
                                </Col>
                                <Col>
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control type="email" placeholder="example@gmail.com" />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Write your message</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>

                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: '#3A2E5F',
                                    borderColor: '#3A2E5F',
                                    color: '#fff'}}>
                                Send Message
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>


        </section>
    );
};

export default ContactInfo;
