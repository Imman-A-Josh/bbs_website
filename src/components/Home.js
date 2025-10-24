import { Container, Button, Row, Col, Card, Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { FaMedal, FaSeedling, FaStar, FaShip, FaUsers, FaGoogle } from "react-icons/fa";
import CountUp from 'react-countup';
import "../styles/CategoryCarosuel.css";
import "../styles/FAQSection.css";
import { useNavigate } from "react-router-dom";

import ScrollToTopButton from "../components/ScrollToTopButton";

import pet1 from '../Assets/p1.avif';
import pet2 from '../Assets/p2.avif';
import pet3 from '../Assets/p3.jpg';
import pet4 from '../Assets/p4.jpg';
import petrolium from '../Assets/petrolium.jpg';

import agroImage1 from '../Assets/agroMain.avif';
import sugarImage from '../Assets/sugar.jpg';
import riceImage from '../Assets/rice.avif';
import wheatImage from '../Assets/wheat.avif';
import maizeImage from '../Assets/maize.avif';
import soyaImage from '../Assets/soya.jpg';

import metalImage1 from '../Assets/metal1.avif';
import metalImage2 from '../Assets/metal2.avif';
import metalImage4 from '../Assets/metal4.jpg';
import metalImage5 from '../Assets/metal5.avif';
import metalImage6 from '../Assets/metal6.avif';

import NickelImage from '../Assets/nickel.jpg';

import HomeBackgroundImage from '../Assets/backgroundHome.jpg'


const faqs = [
    {
        question: "1. What is BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED (BBS INDIA PVT LTD) ?",
        answer:
            "BBS INDIA PVT LTD is an international trading company based in Chennai, India, specializing in petroleum, minerals, food products, apparel, and coal.",
    },
    {
        question: "2. Where is BBS India Pvt Ltd located ?",
        answer:
            "Our headquarters are located at Raheja Towers, 306 Mount Road, Chennai, India. From here, we manage operations and coordinate exports to clients worldwide.",
    },
    {
        question: "3. What products do you trade ?",
        answer:
            "Our trade portfolio includes petroleum products, minerals, rice, maize, sugar, apparel, and coal.",
    },
    {
        question: "4. Do you handle both imports and exports ?",
        answer:
            "Yes. We manage both import and export operations, serving clients globally with reliable logistics and trade expertise.",
    },
    {
        question: "5. Which countries do you operate in ?",
        answer:
            "We operate internationally, supplying goods to clients across Asia, the Middle East, Africa, and Europe.",
    },
    {
        question: "6. What makes BBS INDIA PVT LTD different from others ?",
        answer:
            "Our commitment to excellence, integrity, and customer satisfaction sets us apart. We focus on quality products, transparent business practices, and long-term partnerships.",
    },
    {
        question: "7. How can I contact your team for business inquiries ?",
        answer:
            "You can reach us via email or phone (add your contact details here) or visit our office at Raheja Towers, Chennai.",
    },
    {
        question: "8. Do you offer customized trade solutions ?",
        answer:
            "Yes. We tailor our services to meet the specific needs of our clients, ensuring efficiency and satisfaction in every deal.",
    },
];

const categories = [
    {
        title: "Petroleum",
        image: petrolium,
        products: [
            { name: "BLCO", image: pet1 },
            { name: "Diesel", image: pet2 },
            { name: "Jet Fuel", image: pet3 },
            { name: "Bitumen", image: pet4 },
        ],
    },
    {
        title: "Agro Products",
        image: agroImage1,
        products: [
            { name: "Wheat", image: wheatImage },
            { name: "Rice", image: riceImage },
            { name: "Sugar", image: sugarImage },
            { name: "Maize", image: maizeImage },
            { name: "Soya Bean", image: soyaImage },
        ],
    },
    {
        title: "Metals",
        image: metalImage1,
        products: [
            { name: "IRON ORE", image: metalImage2 },
            { name: "Nickel Ore", image: NickelImage },
            { name: "Bauxite", image: metalImage4 },
            { name: "QUARTZ", image: metalImage5 },
            { name: "Aluminum", image: metalImage6 },
            // { name: "Copper", image: metalImage7 },
        ],
    },
]

const testimonials = [
    {
        name: "Ramesh Kumar",
        feedback:
            "Outstanding quality of rice and excellent export service. Their team is very responsive and professional.",
        rating: 5,
    },
    {
        name: "Anita Sharma",
        feedback:
            "We’ve been importing from BBS India for years. Consistent quality and timely delivery every single time!",
        rating: 5,
    },
    {
        name: "Ahmed Al-Farsi",
        feedback:
            "Top-grade rice and smooth logistics process. Truly a trusted partner for international trade.",
        rating: 5,
    },
];


const HeroSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const navigate = useNavigate();

    function handleNavigateClick(value) {
        console.log("value", value);

        navigate(value);
    }

    return (
        <>
            <section
                id="contact-hero"
                className="d-flex align-items-center mt-5"
                style={{
                    backgroundImage: `url(${HomeBackgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "80vh",
                    position: "relative",
                    color: "white",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                        zIndex: 1,
                    }}
                ></div>

                <Container style={{ position: "relative", zIndex: 2 }}>
                    <Row className="align-items-center mt-4">
                        <Col md={12} className="text-start p-4 mt-3">
                            <h1 className="fw-bold mb-2 mt-4" style={{ lineHeight: "1.2" }}>
                                <span style={{ fontSize: "45x" }}> <span style={{ fontSize: "55px" }}>F</span>rom Export to Impact</span> <br />
                                <span style={{ fontSize: "28px", marginTop: "10px", display: "block" }}>
                                    Real Stories of International Trade
                                </span>
                            </h1>

                            <p className="lead mb-4 mt-4 lh-lg" style={{ fontSize: "15px" }}>
                                Every product that crosses borders tells a story. From small-scale businesses to global enterprises, exports create opportunities, drive innovation, and fuel economic growth. Explore how trade transforms ideas into tangible impact around the world
                            </p>

                            <div className="d-flex gap-3 mt-4">
                                <Button
                                    onClick={() => handleNavigateClick("/contact")}
                                    variant="outline-light"
                                    className="px-5 py-2 fw-semibold"
                                    style={{
                                        borderRadius: "10px",
                                        transition: "all 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = "#ffffff";
                                        e.currentTarget.style.color = "#3A2E5F";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                >
                                    Contact Us →
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="stats-section text-center py-5 mt-5">
                <Container>
                    <Row className="p-4 rounded-4 text-light align-items-center justify-content-center" style={{ background: "#1c1c1c" }}>
                        {/* Years of Experience */}
                        <Col md={2}>
                            <FaMedal size={40} className="mb-3 text-warning" />
                            <h2 className="fw-bold mb-0">
                                <CountUp end={10} duration={3} />+
                            </h2>
                            <p className="small text-light mt-2">Years of Experience</p>
                        </Col>

                        {/* Rice Products */}
                        <Col md={2}>
                            <FaSeedling size={40} className="mb-3 text-success" />
                            <h2 className="fw-bold mb-0">
                                <CountUp end={50} duration={3} />+
                            </h2>
                            <p className="small text-light mt-2">Agro Products</p>
                        </Col>

                        {/* Exporting Countries */}
                        <Col md={2}>
                            <FaShip size={40} className="mb-3 text-primary" />
                            <h2 className="fw-bold mb-0">
                                <CountUp end={25} duration={3} />+
                            </h2>
                            <p className="small text-light mt-2">Exporting Countries</p>
                        </Col>

                        {/* Satisfied Clients */}
                        <Col md={2}>
                            <FaUsers size={40} className="mb-3 text-danger" />
                            <h2 className="fw-bold mb-0">
                                <CountUp end={500} duration={3} />+
                            </h2>
                            <p className="small text-light mt-2">100% Satisfied Clients</p>
                        </Col>

                        {/* Google Review */}
                        <Col md={2}>
                            <FaGoogle size={40} className="mb-3 text-warning" />
                            <h2 className="fw-bold mb-0">4.8</h2>
                            <p className="small text-light mt-2">Google Review</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Section */}

            <section className="about-section mb-5" style={{ background: "#fff" }}>
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md={6}>
                            <img
                                src="https://img.freepik.com/premium-photo/png-businesspeople-discussing-table-transparent-background_53876-941255.jpg?semt=ais_hybrid&w=740&q=80"
                                width={800}
                                alt="about"
                                className="img-fluid"
                            />
                        </Col>
                        <Col md={6} className="text-center">
                            <h2 className="fw-bold mb-4">About US</h2>
                            <div
                                className="mx-auto mb-5"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                            <p className="text-muted">
                                <b>BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED <br />(BBS INDIA PVT LTD)</b> is a renowned company specializing in international trade and export expertise. Our core business areas include <b> petroleum, minerals, food products (such as rice, maize, sugar, wheat, and soybean), apparel, and coal </b>.
                            </p>
                            <Button
                                variant="primary"
                                onClick={() => handleNavigateClick('/about')}
                                className="fw-semibold px-4 py-2"
                                style={{ backgroundColor: "#3A2E5F", border: "none", borderRadius: "6px", }}
                            >
                                Discover More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <div className="additional-section text-center d-flex flex-column align-items-center justify-content-center">
                    <p className="tagline mb-2">Innovate. Build. Grow.</p>
                    <h2 className="title mb-3">Welcome to BBS India Pvt Ltd</h2>
                    <div className="rating d-flex align-items-center justify-content-center mb-3">
                    </div>
                    <Button
                        variant="primary"
                        onClick={() => handleNavigateClick('/services')}
                        className="fw-semibold px-4 py-2"
                        style={{ backgroundColor: "#3A2E5F", border: "none", borderRadius: "6px", }}
                    >
                        Explore Our Services
                    </Button>
                </div>
            </section>


            {/* Categories You May Like */}

            <section className="category-carousel py-5">
                <div className=" text-center">
                    <h2 className="fw-bold mb-4">Our Product Categories</h2>
                    <div
                        className="mx-auto mb-5"
                        style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                    ></div>

                    <Carousel controls={false} indicators={false} interval={3500} pause={false}>
                        {categories.map((category, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mt-3 p-3" >
                                    {/* Main Big Category Card */}
                                    <Card className="main-category-card " style={{ background: "#3A2E5F" }}>
                                        <Card.Img
                                            variant="top"
                                            src={category.image}
                                            className="main-category-image"
                                        />
                                        <Card.Body>
                                            <Card.Title className="fw-bold text-light  mb-0">
                                                {category.title}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>

                                    {/* Products Cards */}
                                    {category.products.map((prod, idx) => (
                                        <Card key={idx} className="product-card shadow-sm">
                                            <Card.Img
                                                variant="top"
                                                src={prod.image}
                                                className="main-category-image"
                                            />
                                            <Card.Body>
                                                <Card.Title className="fw-semibold mb-0">
                                                    {prod.name}
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </section>

            <section className="faq-section py-5">
                <Container className="py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-6 text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <Row className="gy-4 gx-4 justify-content-center">
                        {faqs.map((faq, index) => (
                            <Col md={12} key={index}>
                                <div
                                    className={`faq-card p-3 rounded-4 shadow-sm h-100 ${activeIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question d-flex justify-content-between align-items-center">
                                        <p className="fw-semibold mb-0">{faq.question}</p>
                                        <span className="faq-icon">
                                            {activeIndex === index ? "−" : "+"}
                                        </span>
                                    </div>

                                    {activeIndex === index && (
                                        <div className="faq-answer mt-3">
                                            <p className="text-muted mb-0">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Blogs */}

            <section className="testimonial-section py-5">
                <Container>
                    <div className="text-center mb-5">
                        <p className="text-light-50 mb-1" style={{ opacity: 0.8 }}>
                            A good word means a lot
                        </p>
                        <h2 className="fw-bold text-dark">What Our Buyers Say About Us</h2>
                    </div>

                    <Row className="justify-content-center">
                        {testimonials.map((t, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="testimonial-card p-4 border-0 h-100 shadow-lg">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-circle me-3">
                                            <span>{t.name.charAt(0)}</span>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold text-white mb-1">{t.name}</h6>
                                            <div className="stars">
                                                {[...Array(t.rating)].map((_, i) => (
                                                    <FaStar key={i} color="#FFD700" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-white mb-0" style={{ fontSize: "13px" }}>{t.feedback}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* <section className="contact-cta py-5">
                <Container className="text-center">
                    <h3 className="fw-bold">Ready to Start a Project?</h3>
                    <p className="text-muted mb-4">Get a quote, discuss supply needs or request samples.</p>
                    <Button className="btn-primary-cta me-2">Request Quote</Button>
                    <Button variant="outline-dark" className="btn-outline-cta">Contact Sales</Button>
                </Container>
            </section> */}

            <ScrollToTopButton />

        </>

    );
};

export default HeroSection;
