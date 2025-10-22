import { Container, Button, Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
// import "./HomeFull.css";
import CountUp from 'react-countup';
// import Blog1 from '../Assets/blog1.jpg';
// import Blog2 from '../Assets/blog2.jpg';
// import Blog3 from '../Assets/blog3.jpg';
import "../styles/CategoryCarosuel.css";
import "../styles/FAQSection.css";

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
import metalImage3 from '../Assets/metal3.jpg';
import metalImage4 from '../Assets/metal4.jpg';
import metalImage5 from '../Assets/metal5.avif';
import metalImage6 from '../Assets/metal6.avif';

import HomeBannerImage from '../Assets/homebanner.jpg'

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
        title: "Agriculture",
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
            { name: "Nickel Ore", image: metalImage3 },
            { name: "Bauxite", image: metalImage4 },
            { name: "QUARTZ", image: metalImage5 },
            { name: "Aluminum", image: metalImage6 },
            // { name: "Copper", image: metalImage7 },
        ],
    },
]

const HeroSection = () => {

    return (

        <>
            <section
                id="home"
                className="d-flex align-items-center mt-5"
                style={{
                    // minHeight: "100vh",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                }}
            >
                <Container>
                    <Row className="align-items-center mt-5">
                        {/* Left Content */}
                        <Col md={6} className="text-start p-4">
                            <h1 className="fw-bold mb-2 mt-4" style={{ lineHeight: "1.2" }}>
                                <span style={{ fontSize: "45x", color: "#1F1F3D" }}>From Export to Impact</span> <br />
                                <span style={{ fontSize: "28px", color: "#6C63FF", marginTop: "10px", display: "block" }}>
                                    Real Stories of International Trade
                                </span>
                            </h1>

                            <p className="lead mb-4 mt-4" style={{ color: "#555", fontSize: "18px" }}>
                                Every product that crosses borders tells a story. From small-scale businesses to global enterprises, exports create opportunities, drive innovation, and fuel economic growth. Explore how trade transforms ideas into tangible impact around the world
                            </p>

                            <div className="d-flex gap-3 mt-4">
                                <Button
                                    variant="primary"
                                    className="px-5 py-2 fw-semibold shadow-sm"
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#6C63FF",
                                        border: "none",
                                        transition: "transform 0.2s",
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    Explore Stories →
                                </Button>

                                <Button
                                    variant="outline-secondary"
                                    className="px-5 py-2 fw-semibold"
                                    style={{
                                        borderRadius: "10px",
                                        borderColor: "#6C63FF",
                                        color: "#6C63FF",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.backgroundColor = "#6C63FF";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.color = "#6C63FF";
                                    }}
                                >
                                    Contact Us →
                                </Button>
                            </div>
                        </Col>


                        <Col md={6} className="text-center mt-5 mt-md-0">
                            <img
                                src={HomeBannerImage}
                                alt="developer"
                                className="img-fluid"
                                style={{ maxHeight: "500px", width: "100%", objectFit: "contain" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Section */}

            <section className="about-section py-5" style={{ background: "#fff" }}>
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
                                className="fw-semibold px-4 py-2"
                                style={{ backgroundColor: "#3A2E5F", border: "none", borderRadius: "6px", }}
                            >
                                Discover More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="stats-section text-center pb-3">
                <Container>
                    <Row className="border text-light p-3 rounded-5" style={{ background: "#3A2E5F" }}>
                        <Col md={3}>
                            <h1 className="stat-number text-light">
                                <CountUp end={100} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">Our Products</p>
                        </Col>
                        <Col md={3}>
                            <h1 className="stat-number text-light">
                                <CountUp end={25} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">Exporting Countries</p>
                        </Col>
                        <Col md={3}>
                            <h1 className="stat-number text-light">
                                <CountUp end={500} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">100% Satisfied Clients</p>
                        </Col>
                        <Col md={3}>
                            <h1 className="stat-number text-light">
                                <CountUp end={50} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">Branches</p>
                        </Col>
                    </Row>
                </Container>
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
                <Container>
                    <h2 className="text-center mb-4 fw-bold text-light">Frequently Asked Questions</h2>
                    <p className="text-center mb-5 text-light">
                        Learn more about BBS India Pvt Ltd, our services, and how we help clients succeed in international trade.
                    </p>

                    <Accordion defaultActiveKey="0" flush>
                        {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index} className="faq-item mb-3">
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>{faq.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </section>

            {/* Blogs */}

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
