import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Slider from "react-slick"; // optional: for testimonial carousel
import "./HomeFull.css";

const heroSlides = [
    {
        title: "Grow Your Business Globally",
        subtitle: "Connect with clients worldwide and expand your market reach.",
        cta1: "Get Quote",
        cta2: "Learn More",
        img: "https://images.unsplash.com/photo-1505765055401-0b4f8f6c5408?auto=format&fit=crop&w=1600&q=60",
    },
    {
        title: "Trusted Commodities & Trade",
        subtitle: "Sourcing quality products with global logistics support.",
        cta1: "Our Services",
        cta2: "Contact Us",
        img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1600&q=60",
    },
];

const services = [
    { icon: "⚙️", title: "Petroleum", text: "High-grade petroleum products sourced responsibly." },
    { icon: "⛏️", title: "Minerals & Ores", text: "Reliable supply of metals, ores and mining outputs." },
    { icon: "🌾", title: "Agro Products", text: "Fresh, processed and bulk agricultural commodities." },
    { icon: "📦", title: "Logistics", text: "End-to-end shipping and supply chain management." },
    { icon: "✅", title: "Quality Control", text: "Strict QC & compliance for each shipment." },
    { icon: "🤝", title: "Trade Finance", text: "Flexible payment & trade financing solutions." },
];

const products = [
    { img: "https://images.unsplash.com/photo-1582719478250-5b57b8afc6e9?auto=format&fit=crop&w=900&q=60", title: "Sugar" },
    { img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=900&q=60", title: "Rice" },
    { img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=60", title: "Wheat" },
    { img: "https://images.unsplash.com/photo-1518972559570-8fa3e4bbf1bf?auto=format&fit=crop&w=900&q=60", title: "Maize" },
];

const whyFeatures = [
    { icon: "🚚", title: "On-time Delivery", desc: "Fast & reliable shipping worldwide." },
    { icon: "🌐", title: "Global Network", desc: "Trusted partners across continents." },
    { icon: "🔬", title: "Quality Assurance", desc: "Strict compliance & inspection standards." },
    { icon: "📞", title: "24/7 Support", desc: "Dedicated support for shipments & docs." },
];

const testimonials = [
    { name: "Global Exports Ltd.", quote: "Excellent service and reliable delivery — strong partner!", rating: 5 },
    { name: "Agro Partners", quote: "Top quality produce and fast logistics. Highly recommended.", rating: 5 },
    { name: "Minerals Co.", quote: "Professional handling and clear documentation every time.", rating: 5 },
];

const team = [
    { name: "Ravi Kumar", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Anita Singh", role: "Head - Operations", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Karan Patel", role: "Head - Sales", img: "https://randomuser.me/api/portraits/men/36.jpg" },
];

const HomeFull = () => {
    // for fade in on scroll (simple)
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

    // slider settings (react-slick)
    const sliderSettings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="homefull-page">
            {/* HERO */}
            <section className="hero-section">
                <div className="hero-carousel">
                    {heroSlides.map((s, i) => (
                        <div
                            className="hero-slide"
                            key={i}
                            style={{
                                backgroundImage: `linear-gradient(rgba(58,46,95,0.6), rgba(58,46,95,0.45)), url(${s.img})`,
                            }}
                        >
                            <Container className="text-center hero-content">
                                <h1 className="display-4 fw-bold">{s.title}</h1>
                                <p className="lead mb-4">{s.subtitle}</p>
                                <div className="d-flex justify-content-center gap-3">
                                    <Button className="btn-primary-cta">{s.cta1}</Button>
                                    <Button variant="outline-light" className="btn-outline-cta">{s.cta2}</Button>
                                </div>
                            </Container>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="about-section py-5">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md={6}>
                            <img
                                src="https://images.unsplash.com/photo-1532074205216-d0e1f8d875f6?auto=format&fit=crop&w=900&q=60"
                                alt="about"
                                className="img-fluid rounded-4 shadow"
                            />
                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold">About Biblia Business Solutions</h2>
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

            {/* SERVICES */}
            <section className="services-section py-5 bg-light">
                <Container>
                    <h3 className="section-title text-center mb-4">Our Services</h3>
                    <Row className="g-4">
                        {services.map((s, idx) => (
                            <Col md={4} key={idx}>
                                <Card className={`service-card ${visible.includes(String(idx)) ? "is-visible" : ""}`} data-idx={idx} ref={(el) => (refs.current[idx] = el)}>
                                    <Card.Body className="text-center">
                                        <div className="service-icon">{s.icon}</div>
                                        <Card.Title className="mt-3">{s.title}</Card.Title>
                                        <Card.Text className="text-muted small">{s.text}</Card.Text>
                                        <Button variant="link" className="p-0 mt-2">Learn more →</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="products-section py-5">
                <Container>
                    <h3 className="section-title text-center mb-4">Product Categories</h3>
                    <Row className="g-3">
                        {products.map((p, i) => (
                            <Col md={3} key={i}>
                                <div className="product-tile">
                                    <img src={p.img} alt={p.title} className="img-fluid" />
                                    <div className="product-overlay">
                                        <h5>{p.title}</h5>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* WHY CHOOSE US */}
            <section className="why-section py-5 bg-gradient text-white">
                <Container>
                    <h3 className="section-title text-center mb-4 text-white">Why Choose Us</h3>
                    <Row className="g-4">
                        {whyFeatures.map((f, i) => (
                            <Col md={3} key={i}>
                                <div className="why-box text-center p-4 rounded-3">
                                    <div className="why-icon mb-2">{f.icon}</div>
                                    <h6 className="mb-2 fw-bold">{f.title}</h6>
                                    <p className="small">{f.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section py-5">
                <Container>
                    <h3 className="section-title text-center mb-4">What Clients Say</h3>

                    {/* If you installed react-slick, this will show as carousel. Otherwise you can map testimonials */}
                    <Slider {...sliderSettings}>
                        {testimonials.map((t, i) => (
                            <div key={i} className="px-3">
                                <Card className="p-4 text-center border-0 shadow-sm">
                                    <Card.Body>
                                        <p className="mb-3">“{t.quote}”</p>
                                        <div className="small text-muted mb-2">{"★".repeat(t.rating)}</div>
                                        <h6 className="mb-0 fw-bold">{t.name}</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>

            {/* Team */}
            <section className="team-section py-5 bg-light">
                <Container>
                    <h3 className="section-title text-center mb-4">Our Team</h3>
                    <Row className="g-4 justify-content-center">
                        {team.map((m, i) => (
                            <Col md={3} key={i}>
                                <Card className="text-center border-0">
                                    <Card.Img variant="top" src={m.img} className="rounded-circle mx-auto mt-3 team-img" />
                                    <Card.Body>
                                        <Card.Title className="mb-0">{m.name}</Card.Title>
                                        <small className="text-muted">{m.role}</small>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CONTACT CTA */}
            <section className="contact-cta py-5">
                <Container className="text-center">
                    <h3 className="fw-bold">Ready to Start a Project?</h3>
                    <p className="text-muted mb-4">Get a quote, discuss supply needs or request samples.</p>
                    <Button className="btn-primary-cta me-2">Request Quote</Button>
                    <Button variant="outline-dark" className="btn-outline-cta">Contact Sales</Button>
                </Container>
            </section>

            {/* Footer */}
            <footer className="site-footer text-white">
                <Container>
                    <Row className="py-4">
                        <Col md={4}>
                            <h5 className="fw-bold">BIBLIA</h5>
                            <p className="small">We are committed to delivering exceptional services that drive international trade success for our clients.</p>
                        </Col>
                        <Col md={2}>
                            <h6>Company</h6>
                            <ul className="footer-links">
                                <li>About</li>
                                <li>Products</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h6>Contact</h6>
                            <p className="small mb-1">hello@biblia.com</p>
                            <p className="small">+91 98765 43210</p>
                        </Col>
                        <Col md={3}>
                            <h6>Follow</h6>
                            <div className="socials">LinkedIn • Twitter • Instagram</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center small">© {new Date().getFullYear()} BIBLIA Technologies. All rights reserved.</Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default HomeFull;
