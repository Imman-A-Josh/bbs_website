import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pertroliumImage from '../Assets/petrolium.jpg';
import pet1 from '../Assets/p1.avif';
import pet2 from '../Assets/p2.avif';
import pet3 from '../Assets/p3.jpg';
import pet4 from '../Assets/p4.jpg';

const Petroleum = () => {

    const products = [
        {
            id: "overview",
            title: "PETROLEUM",
            description: [
                "We provide sustainable, safe petroleum services with minimal environmental impact.",
                "Our solutions ensure world-class efficiency and reliability.",
            ],
            image: pertroliumImage,
            imgLeft: false,
        },
        {
            id: "crude-oil",
            title: "Crude Oils - BLCO",
            description: [
                "BBS Trading offers high-grade Bonny Light Crude Oil (BL) from Nigeria.",
                "BLCO is valuable and easy-to-process with low sulfur content and high gravity.",
                "It is in high demand due to its ability to generate high profits.",
            ],
            image: pet1,
            imgLeft: true,
        },
        {
            id: "diesel",
            title: "DIESEL EN 590 10PPM",
            description: [
                "EN 590 diesel fuel standard enhances air quality, engine efficiency, and reduces health hazards.",
                "ULSD conforming to EN 590 has max sulfur content of 10 ppm and reduces harmful emissions.",
                "However, it may increase costs for refineries and pose system challenges such as injector clogging.",
            ],
            image: pet2,
            imgLeft: false,
        },
        {
            id: "jet-fuel",
            title: "Jet Fuel",
            description: [
                "Jet fuel is specialized aviation fuel for gas-turbine engine aircraft.",
                "The main types are Jet A and Jet A-1, meeting strict international safety standards.",
                "These fuels offer high energy, clean combustion, and are vital for global aviation.",
            ],
            image: pet3,
            imgLeft: true,
        },
        {
            id: "bitumen",
            title: "Bitumen",
            description: [
                "Produced by blowing hot air into pure bitumen during refining, increasing oxidation.",
                "This makes it suitable for roofing and industrial uses due to higher softening point.",
                "Also produced by dissolving bitumen in solvents for cold applications like road construction.",
            ],
            image: pet4,
            imgLeft: false,
        },
    ];

    return (
        <section id="petroleum" className="py-5 mt-4" style={{ backgroundColor: "#f5f7fa" }}>
            <Container>
                {products.map(({ id, title, description, image, imgLeft }, index) => (
                    <Row
                        key={id}
                        className={`align-items-center my-5 py-4 shadow-sm rounded-4 bg-white`}
                        style={{ flexDirection: imgLeft ? "row-reverse" : "row" }}
                    >
                        <Col md={6} className="p-4">
                            <h2 className="fw-bold mb-4" style={{ color: "#3A2E5F" }}>
                                {title}
                            </h2>
                            <div style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
                                {description.map((text, i) => (
                                    <p key={i} className="mb-3">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </Col>
                        <Col md={6}>
                            <img
                                src={image}
                                alt={title}
                                className="w-100 rounded-end"
                                style={{ objectFit: "cover", maxHeight: "350px", borderRadius: imgLeft ? "25px 0 0 25px" : "0 25px 25px 0" }}
                            />
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};

export default Petroleum;
