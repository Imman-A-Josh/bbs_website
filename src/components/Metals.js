import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import metalImage2 from '../Assets/metal2.avif';
// import metalImage3 from '../Assets/metal3.jpg';
import metalImage4 from '../Assets/metal4.jpg';
import metalImage5 from '../Assets/metal5.avif';
import metalImage6 from '../Assets/metal6.avif';
import metalImage7 from '../Assets/metal7.jpg';

import NickelImage from '../Assets/nickel.jpg';


import metalImage1 from '../Assets/metal1.avif';

const metals = () => {

    const contentData = [
        {
            title: "IRON ORE",
            description: "Iron ore is a mineral resource primarily composed of iron oxides like hematite and magnetite. It is essential for steel production and is mined from open-pit and underground operations, processed to produce iron and steel products.",
            img: metalImage2,
        },
        {
            title: "Bauxite",
            description: "Iron ore is a mineral resource primarily composed of iron oxides like hematite and magnetite. It is essential for steel production and is mined from open-pit and underground operations, processed to produce iron and steel products.",
            img: metalImage4,
        },
        {
            title: "Copper",
            description: "Iron ore is a mineral resource primarily composed of iron oxides like hematite and magnetite. It is essential for steel production and is mined from open-pit and underground operations, processed to produce iron and steel products.",
            img: metalImage7,
        },
        {
            title: "Nickel Ore",
            description: "Iron ore is a mineral resource primarily composed of iron oxides like hematite and magnetite. It is essential for steel production and is mined from open-pit and underground operations, processed to produce iron and steel products.",
            img: NickelImage,
        },
        {
            title: "QUARTZ",
            description: "Quartz is a durable mineral composed of silicon dioxide, known for its crystalline structure and variety of colors. It is widely used in countertops, jewelry, and decorative items due to its aesthetic appeal and resistance to scratches and heat, making it a sought-after material in various industries.",
            img: metalImage5,
        },
        {
            title: "ALUMINUM",
            description: "Aluminum ingots are solid forms produced through smelting, essential in industries like automotive and aerospace. Their lightweight, corrosion-resistant properties allow for easy shaping, making them versatile for various applications",
            img: metalImage6,
        },

        // {
        //     title: "Coal",
        //     description: "Supporting content 6.",
        //     img: pet2,
        // },
    ];


    return (

        <section id='metals' className="py-4">

            <section className="about-banner-section">
                <div className="image-container position-relative text-center">
                    <img
                        src={metalImage1}
                        alt="Banner"
                        className="banner-img"
                    />
                </div>
            </section>

            <Container>

                <Row className="mt-5 text-center">
                    <div>
                        <h2 className="fw-bold mb-4">Minerals & Metals</h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>

                    <p className="lh-lg">
                        Welcome to BBS, a trusted supplier of high-quality minerals and metals, including iron ore and quartz. We are committed to providing reliable service and excellence in every transaction.
                    </p>
                </Row>

                <Row className="g-4 mt-4">
                    {contentData.map((item, index) => (
                        <Col md={4} key={index}>
                            <Card className='hover-card'>
                                <Card.Img variant="top" height={250} src={item.img} />
                                <Card.Body className='lh-lg' style={{ height: "300px" }}>
                                    <Card.Title className='fw-bold'>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


            </Container>

        </section >
    )

}

export default metals;
