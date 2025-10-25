import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/RicePage.css";
import { Container, Button, Row, Col, Carousel, Table } from "react-bootstrap";

import IndianRice from '../Assets/RIces/indianRice.avif'

const riceProducts = [
    {
        name: "Parboiled Rice",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPVG3-hy9vDTxyWZuHRu_T4qVpmH7mn78ig&s",
            "https://5.imimg.com/data5/BK/AO/MP/SELLER-51599817/ponni-boiled-rice-500x500.jpg",
            "https://grainvilleindia.com/wp-content/uploads/2023/07/POnniBoiledRice-e1689684103861.jpg",
        ],
        desc: "Long-grain aromatic rice known for its fragrance and taste. Ideal for biryani, pulao, and international cuisines.",
        details: `Parboiled Rice is partially boiled in its husk before milling — a process of soaking, steaming, and drying. This helps the grain retain more nutrients compared to white rice. It has a light golden color, firmer texture, and non-sticky grains when cooked. 
    At BBS India Pvt Ltd, we export premium-grade parboiled rice that meets global standards for quality, taste, and shelf life. It’s rich in B vitamins and minerals, making it both healthy and durable for international shipments.`,
    },
    {
        name: "White Rice",
        images: [
            "https://cdn.dotpe.in/longtail/store-items/7727539/0etCSuvT.jpeg",
            "https://www.realsimple.com/thmb/uVGcBOpcOJBCEbs4WRx8fmeoFxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/507936866_6136178378001_6129561006001-vs-03eda158973046dcbab360b0a1644f71.jpg",
            "https://www.health.com/thmb/a8GxwWgmB5KpQW8SfW6VA7UFwaI=/722x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg",
        ],
        desc: "Soft, lightweight rice widely used for daily meals and South Indian dishes.",
        details: `White Rice is one of the most popular varieties across India and international markets. Known for its clean white appearance, soft texture, and subtle taste, it complements a wide range of cuisines. 
    BBS India Pvt Ltd supplies premium white rice that is double-polished, sorted, and packed hygienically to preserve purity and freshness. Its consistent grain size and long shelf life make it ideal for home use, hotels, and exports.`,
    },
    {
        name: "Long Grain Rice",
        images: [
            "https://tiimg.tistatic.com/fp/1/009/072/long-grain-rice-812.jpg",
            "https://gropharm.in/wp-content/uploads/2022/04/sugandha-steem-basmati-rice.jpeg",
            "https://tiimg.tistatic.com/fp/1/009/072/long-grain-rice-812.jpg",
        ],
        desc: "Elongated, non-sticky rice variety perfect for biryani, pilaf, and international cuisine.",
        details: `Long Grain Rice is appreciated for its slender shape, rich aroma, and soft, separate grains after cooking. It’s the preferred choice for biryanis, pulaos, and catering due to its appealing texture and versatility. 
    At BBS India Pvt Ltd, we offer carefully processed long-grain rice sourced from trusted farms. Each grain is polished and sorted to meet export-grade quality, ensuring superior taste, aroma, and appearance.`,
    },
    {
        name: "Basmati Rice",
        images: [
            "https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?semt=ais_hybrid&w=740&q=80",
            "https://5.imimg.com/data5/PJ/FW/MY-27318931/fresh-basmati-rice-500x500.jpeg",
            "https://www.kolkatarice.com/wp-content/uploads/2024/10/bg-rice-basmati-03.jpg",
        ],
        desc: "The world-famous aromatic rice known for its long grains and rich flavor.",
        details: `Basmati Rice, often called the “Queen of Fragrance,” is a premium rice variety grown in the foothills of the Himalayas. Each grain elongates beautifully when cooked, offering unmatched aroma and flavor. 
    BBS India Pvt Ltd exports aged Basmati rice that undergoes precision sorting and grading for global markets. Ideal for gourmet dishes and fine dining, it’s cherished by consumers across Asia, Europe, and the Middle East.`,
    },
    {
        name: "Broken Rice",
        images: [
            "https://pramoda.co.in/wp-content/uploads/2018/12/Broken-Rice.jpg",
            "https://live.staticflickr.com/65535/51146829536_c83ba3bc78_o_d.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxxUYs7SIfRNDSDcF3S3R3KsNavtzLD8Zgw&s",
        ],
        desc: "Economical rice variety made from broken grains, rich in nutrition and taste.",
        details: `Broken Rice is produced during the milling process and consists of smaller rice grains. Despite its size, it maintains the same nutritional value as whole rice and is widely used in food industries, breweries, and bulk catering.
    BBS India Pvt Ltd provides clean, well-graded, and stone-free broken rice in bulk packaging options for both domestic and export markets. It’s a cost-effective, nutritious solution for large-scale food production.`,
    },
];


const RicePage = () => {
    return (
        <div className="rice-page">

            {/* Hero Section */}
            <section
                className="rice-hero text-center text-light d-flex align-items-center justify-content-center w-100"
                style={{
                    background: `url(${IndianRice}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: "80vh"
                }}
            >
                <Container>
                    <div className="hero-content">
                        <h1 className="display-4 fw-bold shadow" style={{
                            WebkitTextStroke: "1px white",
                            color: "#3A2E5F",
                        }}>Our Premium Rice Collection</h1>
                        <p className="lead">Quality grains grown with care, crafted for exports</p>
                        <div className="mt-3">
                            <Button href="/products" variant="light" className="px-4 me-2">Explore Products</Button>
                            <Button href="/contact" variant="outline-light" className="px-4">Contact Us</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Introduction Section */}
            <Container className="my-5 text-center">
                <h2 className="fw-bold text-purple">About Our Rice</h2>
                <div className="underline mb-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                    BBS India Pvt Ltd is a trusted name in the export of high-quality rice varieties.
                    Our products are sourced from select farms across India, processed using advanced
                    milling systems, and packaged to retain aroma, flavor, and nutrition.
                </p>
            </Container>

            {/* Rice Types Section */}
            <Container className="my-5">
                {riceProducts.map((rice, idx) => (
                    <Row
                        key={idx}
                        className={`align-items-center mb-5 rice-item ${idx % 2 !== 0 ? "flex-row-reverse" : ""}`}
                    >
                        <Col md={6}>
                            <Carousel interval={1500} fade={true}>
                                {rice.images.map((img, i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100 rounded shadow-sm img-fluid" style={{ borderRadius: "50%" }}
                                            src={img}
                                            alt={`${rice.name} ${i + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <h3 className="fw-bold mt-3 mt-md-0">{rice.name}</h3>
                            <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
                                {rice.desc}
                            </p>
                            <p className="text-muted" style={{ lineHeight: "1.8" }}>
                                {rice.details}
                            </p>
                        </Col>
                    </Row>
                ))}
            </Container>

            <Container className="my-5">
                <h2 className="fw-bold text-purple text-center mb-3">Packaging & Export Info</h2>
                <div className="underline mb-4"></div>
                <Table bordered responsive className="text-center shadow-sm rounded">
                    <thead className="table-light">
                        <tr>
                            <th>Rice Type</th>
                            <th>Packaging Sizes</th>
                            <th>Export Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basmati Rice</td>
                            <td>5kg, 10kg, 25kg</td>
                            <td>Global</td>
                        </tr>
                        <tr>
                            <td>Sona Masoori Rice</td>
                            <td>10kg, 25kg</td>
                            <td>Asia, Africa</td>
                        </tr>
                        <tr>
                            <td>Ponni Rice</td>
                            <td>25kg, 50kg</td>
                            <td>Worldwide</td>
                        </tr>
                        <tr>
                            <td>Idly Rice</td>
                            <td>10kg, 25kg</td>
                            <td>GCC, Europe</td>
                        </tr>
                        <tr>
                            <td>Raw Rice</td>
                            <td>25kg, Bulk</td>
                            <td>Domestic & Export</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            

            {/* Contact CTA */}
            <section className="rice-cta text-center text-light py-5">
                <Container>
                    <h3 className="fw-bold">Looking for a reliable rice export partner?</h3>
                    <p>Partner with BBS India Pvt Ltd for quality and reliability you can trust.</p>
                    <Button href="/contact" variant="light" className="px-4 mt-3">Get in Touch</Button>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="rice-why bg-light py-5 text-center">
                <Container>
                    <h2 className="fw-bold text-purple mb-4">Why Choose BBS Rice</h2>
                    <Row className="text-center">
                        <Col md={4} className="mb-3">
                            <h4>🌾 Premium Quality</h4>
                            <p className="text-muted small">High-grade rice inspected for superior quality.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>🚢 Export Expertise</h4>
                            <p className="text-muted small">Trusted by clients worldwide for consistent supply.</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h4>📦 Custom Packaging</h4>
                            <p className="text-muted small">Flexible packaging for bulk, retail, and international clients.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            

        </div>
    );
};

export default RicePage;
