import { Container, Button, Row, Col, Card, Badge, Carousel } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import "./HomeFull.css";
import CountUp from 'react-countup';
import Blog1 from '../Assets/blog1.jpg';
import Blog2 from '../Assets/blog2.jpg';
import Blog3 from '../Assets/blog3.jpg';

import Back2 from '../Assets/back2.jpg';
import Back3 from '../Assets/back3.jpg';

import aboutImage from '../Assets/about.png'

import { FaSmile, FaStar, FaGlobe, FaBolt } from "react-icons/fa";

const features = [
    { icon: <FaSmile />, title: "Client Satisfaction" },
    { icon: <FaStar />, title: "24/7 Support" },
    { icon: <FaGlobe />, title: "Global Service" },
    { icon: <FaBolt />, title: "Advanced Tech" },
];

const HeroSection = () => {

    const services = [
        { icon: "⚙️", title: "Petroleum", text: "High-grade petroleum products sourced responsibly." },
        { icon: "⛏️", title: "Minerals & Ores", text: "Reliable supply of metals, ores and mining outputs." },
        { icon: "🌾", title: "Agro Products", text: "Fresh, processed and bulk agricultural commodities." },
        { icon: "📦", title: "Logistics", text: "End-to-end shipping and supply chain management." },
        { icon: "✅", title: "Quality Control", text: "Strict QC & compliance for each shipment." },
        { icon: "🤝", title: "Trade Finance", text: "Flexible payment & trade financing solutions." },
    ];

    const cardData = [
        {
            image: Blog1,
            title: 'Best UI components for modern websites',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.'
        },
        {
            image: Blog2,
            title: '9 simple ways to improve your design skills',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.'
        },
        {
            image: Blog3,
            title: 'Tips to quickly improve your coding speed.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.'
        }
    ];

    const refs = useRef([]);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible((v) => Array.from(new Set([...v, entry.target.dataset.idx])));
                    }
                });
            },
            { threshold: 0.2 }
        );

        refs.current.forEach((el) => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);


    return (

        <>

            {/* <section id="home">

                <div
                    className="hero-section d-flex align-items-center text-center text-white"
                >
                    <Container>
                        <h1 className="fw-bold display-5 mb-4 animate-fade-in">
                            App, Business & SaaS <br /> Landing Page Template
                        </h1>
                        <p className="lead mx-auto mb-5" style={{ maxWidth: "800px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rem repellendus quasi fuga nesciunt
                            dolorum nulla magnam veniam sapiente, fugiat! Lorem ipsum dolor sit amet.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Button
                                variant="outline-light"
                                className="px-4 py-2 fw-semibold shadow-sm"
                                style={{ borderRadius: "30px", transition: "all 0.3s ease", }}
                            >
                                DOWNLOAD NOW
                            </Button>
                            <Button
                                variant="outline-light"
                                className="px-4 py-2 fw-semibold"
                                style={{
                                    borderRadius: "30px",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.backgroundColor = "white", e.target.style.color = "#4b0082")}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "white")}
                            >
                                LEARN MORE
                            </Button>
                        </div>
                    </Container>
                </div>
            </section> */}

            <section id="home">
                <Carousel fade controls={true} indicators={true} interval={1000}>

                    {/* Slide 1 */}
                    <Carousel.Item>
                        <div
                            className="hero-slide d-flex align-items-center text-center text-white"
                            style={{
                                minHeight: "100vh",
                                background: `linear-gradient(135deg, rgba(58,46,95,0.7), rgba(0,128,0,0.5)), url(https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1600&q=60) no-repeat center center/cover`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Container>
                                <h1 className="fw-bold display-5 mb-4">
                                    App, Business & SaaS <br /> Landing Page Template
                                </h1>
                                <p className="lead mx-auto mb-5" style={{ maxWidth: "800px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="d-flex justify-content-center gap-3">
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold shadow-sm"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        DOWNLOAD NOW
                                    </Button>
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold"
                                        style={{ borderRadius: "30px" }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "#4b0082";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "white";
                                        }}
                                    >
                                        LEARN MORE
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Carousel.Item>

                    {/* Slide 2 */}
                    <Carousel.Item>
                        <div
                            className="hero-slide d-flex align-items-center text-center text-white"
                            style={{
                                minHeight: "100vh",
                                background: `linear-gradient(135deg, rgba(75,0,130,0.7), rgba(0,128,128,0.5)), url(${Back2}) no-repeat center center/cover`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Container>
                                <h1 className="fw-bold display-5 mb-4">
                                    Grow Your Business Globally
                                </h1>
                                <p className="lead mx-auto mb-5" style={{ maxWidth: "800px" }}>
                                    Connect with clients worldwide and expand your market reach.
                                </p>
                                <div className="d-flex justify-content-center gap-3">
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold shadow-sm"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        GET STARTED
                                    </Button>
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold"
                                        style={{ borderRadius: "30px" }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "#4b0082";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "white";
                                        }}
                                    >
                                        LEARN MORE
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Carousel.Item>

                    {/* Slide 3 */}
                    <Carousel.Item>
                        <div
                            className="hero-slide d-flex align-items-center text-center text-white"
                            style={{
                                minHeight: "100vh",
                                background: `linear-gradient(135deg, rgba(0,0,128,0.7), rgba(128,0,128,0.5)), url(${Back3}) no-repeat center center/cover`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <Container>
                                <h1 className="fw-bold display-5 mb-4">
                                    Innovative Solutions for Your Startup
                                </h1>
                                <p className="lead mx-auto mb-5" style={{ maxWidth: "800px" }}>
                                    Build, scale, and succeed with cutting-edge solutions.
                                </p>
                                <div className="d-flex justify-content-center gap-3">
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold shadow-sm"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        CONTACT US
                                    </Button>
                                    <Button
                                        variant="outline-light"
                                        className="px-4 py-2 fw-semibold"
                                        style={{ borderRadius: "30px" }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "#4b0082";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "white";
                                        }}
                                    >
                                        LEARN MORE
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </section>

            <section className="stats-section text-center py-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1 className="stat-number">
                                <CountUp end={100} duration={5} />+
                            </h1>
                            <p className="stat-label">Our Products</p>
                        </Col>
                        <Col md={4}>
                            <h1 className="stat-number">
                                <CountUp end={500} duration={5} />+
                            </h1>
                            <p className="stat-label">Worldwide Sourcing</p>
                        </Col>
                        <Col md={4}>
                            <h1 className="stat-number">24/7</h1>
                            <p className="stat-label">Availability</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Section */}

            <section className="about-section py-5">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md={6}>
                            <img
                                src={aboutImage} width={800}
                                alt="about"
                                className="img-fluid rounded-4 shadow"
                            />
                        </Col>
                        <Col md={6} className="text-center">
                            <h2 className="fw-bold mb-4">About US</h2>
                            <div
                                className="mx-auto mb-5"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                            <p className="text-muted">
                                We are committed to facilitating seamless international trade operations and building lasting business relationships.
                                Our experienced team offers end-to-end commodity sourcing, logistics & compliance.
                            </p>

                            <Row className="mt-4">
                                <Col xs={4} className="text-center">
                                    <div className="about-highlight">
                                        <div className="h-icon">🤝</div>
                                        <div className="h-title">Trusted Partners</div>
                                        <div className="h-sub">Global network</div>
                                    </div>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <div className="about-highlight">
                                        <div className="h-icon">🌍</div>
                                        <div className="h-title">Global Reach</div>
                                        <div className="h-sub">Worldwide sourcing</div>
                                    </div>
                                </Col>
                                <Col xs={4} className="text-center">
                                    <div className="about-highlight">
                                        <div className="h-icon">📈</div>
                                        <div className="h-title">Proven Track</div>
                                        <div className="h-sub">Years of excellence</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services */}

            <section className="services-section py-5 bg-light">
                <Container>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Our Services</h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Row className="g-4">
                        {services.map((s, idx) => (
                            <Col md={4} key={idx}>
                                <Card className={`service-card ${visible.includes(String(idx)) ? "is-visible" : ""}`} data-idx={idx} ref={(el) => (refs.current[idx] = el)}>
                                    <Card.Body className="text-center">
                                        <div className="service-icon">{s.icon}</div>
                                        <Card.Title className="mt-3">{s.title}</Card.Title>
                                        <Card.Text className="text-muted small">{s.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Product Categlog */}

            <section id="#catelog" className="py-5 text-center">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2 className="fw-bold mb-4">Product Categlog</h2>
                            <div
                                className="mx-auto mb-5"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                        </div>
                        <Col md={6}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCZiyv4ZGfGBkhPKOWoO12ihExHTNtkfHvw&s" className="w-100" alt="Product Categlog" />
                        </Col>
                        <Col md={6}>
                            <p>
                                At BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED, we are dedicated to facilitating seamless international trade operations and fostering global business connections. Our team comprises experienced professionals with in-depth knowledge of international trade regulations, market trends, and global business practices. We are committed to delivering exceptional services that drive international trade success for our clients.
                            </p>
                            <p>At BIBLIA BUSINESS SOLUTIONS (INDIA) PRIVATE LIMITED, we are dedicated to facilitating seamless international trade operations and fostering global business connections. Our team comprises experienced professionals with in-depth knowledge of international trade regulations, market trends, and global business practices. We are committed to delivering exceptional services that drive international trade success for our clients.</p>
                        </Col>
                    </Row>
                </Container>

            </section>


            <section className="features-section">
                <div className="features-container">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-box">{feature.icon}</div>
                            <h5>{feature.title}</h5>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blogs */}

            <section id='blogs'>
                <Container className="py-5 text-center">
                    <h2 className="fw-bold mb-4">Blogs</h2>
                    <div className="mx-auto mb-5" style={{ width: "60px", height: "3px", background: "#3A2E5F" }}></div>
                    <Row>
                        {cardData.map((card, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <Card className="h-100 text-white border-rounded">
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={card.image}
                                            alt={card.title}
                                            style={{ height: '250px', objectFit: 'cover' }}
                                        />
                                        <Badge
                                            bg="primary"
                                            className="position-absolute top-0 start-0 m-2"
                                        >
                                        </Badge>
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold">{card.title}</Card.Title>
                                        <Card.Text className="text-secondary">
                                            {card.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="contact-cta py-5">
                <Container className="text-center">
                    <h3 className="fw-bold">Ready to Start a Project?</h3>
                    <p className="text-muted mb-4">Get a quote, discuss supply needs or request samples.</p>
                    <Button className="btn-primary-cta me-2">Request Quote</Button>
                    <Button variant="outline-dark" className="btn-outline-cta">Contact Sales</Button>
                </Container>
            </section>

        </>

    );
};

export default HeroSection;
