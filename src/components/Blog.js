import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Blog1 from '../Assets/blog1.jpg';
import Blog2 from '../Assets/blog2.jpg';
import Blog3 from '../Assets/blog3.jpg';

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

const BlogCards = () => {
    return (
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
    );
};

export default BlogCards;
