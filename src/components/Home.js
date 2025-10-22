import { Container, Button, Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import "./HomeFull.css";
import CountUp from 'react-countup';
import Blog1 from '../Assets/blog1.jpg';
import Blog2 from '../Assets/blog2.jpg';
import Blog3 from '../Assets/blog3.jpg';
import "../styles/CategoryCarosuel.css";

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
import metalImage7 from '../Assets/metal7.jpg';


import { FaSmile, FaStar, FaGlobe, FaBolt } from "react-icons/fa";

const features = [
    { icon: <FaSmile />, title: "Client Satisfaction" },
    { icon: <FaStar />, title: "24/7 Support" },
    { icon: <FaGlobe />, title: "Global Service" },
    { icon: <FaBolt />, title: "Advanced Tech" },
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

    return (

        <>
            <section
                id="home"
                className="d-flex align-items-center mt-4 "
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        {/* Left Content */}
                        <Col md={6} className="text-start p-3">
                            <h1 className="fw-bold display-5 mb-3">
                                International Trade{" "}
                                <span style={{ color: "#3A2E5F" }}>Reality</span>
                            </h1>

                            <p className="lead mb-4 mt-4" style={{ color: "#555" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rem repellendus quasi fuga nesciunt
                                dolorum nulla magnam veniam sapiente, fugiat! Lorem ipsum dolor sit amet.
                            </p>


                            <div className="d-flex gap-3 mt-5">
                                <Button
                                    variant="primary"
                                    className="px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#3A2E5F",
                                        border: "none",
                                    }}
                                >
                                    Explore Products →
                                </Button>

                                <Button
                                    variant="outline-secondary"
                                    className="px-4 py-2 fw-semibold"
                                    style={{ borderRadius: "8px" }}
                                >
                                    Contact Us →
                                </Button>
                            </div>
                        </Col>

                        <Col md={6} className="text-center mt-5 mt-md-0">
                            <img
                                src="https://img.freepik.com/premium-photo/people-suits-are-working-business-meeting-isolated-white-background-simple-style_660230-8713.jpg?w=360"
                                alt="developer"
                                className="img-fluid"
                                style={{ maxHeight: "500px", width: "100%", objectFit: "contain" }}
                            />
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
                                <CountUp end={500} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">Worldwide Sourcing</p>
                        </Col>
                        <Col md={3}>
                            <h1 className="stat-number text-light">
                                <CountUp end={50} duration={5} />+
                            </h1>
                            <p className="stat-label text-light">Branches</p>
                        </Col>
                        <Col md={3}>
                            <h1 className="stat-number text-light">24/7</h1>
                            <p className="stat-label text-light">Availability</p>
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
                                    <Card className="main-category-card shadow-lg" style={{background:"#3A2E5F"}}>
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
