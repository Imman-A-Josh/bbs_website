import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pertroliumImage from '../Assets/petrolium.jpg'

import pet1 from '../Assets/p1.avif';
import pet2 from '../Assets/p2.avif';
import pet3 from '../Assets/p3.jpg';
import pet4 from '../Assets/p4.jpg';

const Petroleum = () => {

    return (

        <section id='petroleum' className="py-5 mt-4">
            
            <Container>
                <Row className='mt-5 d-flex align-items-center text-center text-white w-100' style={{ background: "#3A2E5F",borderRadius:"25px" }}>
                    <Col md={6} >
                        <div className="text-center">
                            <h2 className="fw-bold mb-4">PETROLEUM</h2>
                            <div
                                className="mx-auto"
                                style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                            ></div>
                        </div>
                        <div className='pt-3 lh-lg'>
                            <h6>We provide sustainable, safe petroleum services with minimal impact. </h6>
                            <h6>Our solutions ensure world-class efficiency.</h6>
                            <h6>We provide sustainable, safe petroleum services with minimal impact. </h6>
                            <h6>Our solutions ensure world-class efficiency.</h6>
                            <h6>We provide sustainable, safe petroleum services with minimal impact. </h6>
                            <h6>Our solutions ensure world-class efficiency.</h6>
                        </div>
                    </Col>
                    <Col md={6} className='m-0 p-0'>
                        <img src={pertroliumImage} alt='PETROLEUM' className='w-100' style={{borderRadius:"0px 25px 25px 0px"}} />
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Crude Oils - BLCO</h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Col md={6}>
                        <img src={pet1} className="w-100" alt='Crude Oils' />
                    </Col>
                    <Col md={6} className='p-3 lh-lg'>
                        <p>BBS Trading offers high-grade Bonny Light Crude Oil (BL) from Nigeria. BLCO is a valuable and easy-to-process crude oil with low sulfur content and high gravity. It is in high demand by refiners due to its ability to generate high profits</p>
                        <p>BBS Trading offers high-grade Bonny Light Crude Oil (BL) from Nigeria. BLCO is a valuable and easy-to-process crude oil with low sulfur content and high gravity. It is in high demand by refiners due to its ability to generate high profits</p>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">DIESEL EN 590 10PPM </h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Col md={6} className='p-4 lh-lg'>
                        <p>The implementation of EN 590 as a diesel fuel standard in the European Union has resulted in notable enhancements in air quality, engine efficiency, and mitigated health hazards. ULSD, which conforms to EN 590 specifications, has a maximum sulfur content of 10 ppm and can effectively reduce emissions of smoke, sulfur dioxide, toxics, and particulate matter. Nevertheless, adhering to EN 590 can be relatively costly for refineries and consumers, and certain ULSD systems may encounter complications such as obstructed injectors caused by contaminants.</p>
                    </Col>
                    <Col md={6}>
                        <img src={pet2} alt='DIESEL EN 590 10PPM' className="w-100" />
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Jet Fuel</h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Col md={6}>
                        <img src={pet3} className="w-100" alt='Jet Fuel' />
                    </Col>
                    <Col md={6} className='p-3 lh-lg'>
                        <p>
                            Jet Fuel Overview
                            Jet fuel is a specialized type of aviation fuel designed for aircraft powered by gas-turbine engines. It is typically clear to straw-coloured in appearance. The two most commonly used fuels in commercial aviation are Jet A and Jet A-1, both produced according to standardized international specifications to ensure safety and performance consistency across the industry.
                        </p>
                        <p>Jet A and Jet A-1 are widely recognized for their high energy content, clean combustion, and suitability for modern aircraft, making them essential for the global aviation sector.</p>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Bitumen</h2>
                        <div
                            className="mx-auto mb-5"
                            style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
                        ></div>
                    </div>
                    <Col md={6} className='p-3 lh-lg'>
                        <p>Produced by blowing hot air into pure bitumen during the final stage of refining.
                            This process increases its oxidation, making it more suitable for roofing and industrial applications due to its higher softening point and greater resistance to extreme temperatures.</p>
                        <p>Created by dissolving bitumen in solvents.

                            This makes it easier to apply and useful in cold applications like road construction.</p>
                    </Col>
                    <Col md={6}>
                        <img src={pet4} className="w-100" alt='Bitumen' />
                    </Col>
                </Row>
            </Container>

        </section >
    )

}

export default Petroleum;
