import { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GearFill, GraphUp, PeopleFill } from "react-bootstrap-icons";

const services = [
  {
    icon: <GearFill size={40} color="#3A2E5F" />,
    title: "PETROLEUM",
    text: "Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida.",
    bg: "#fff"
  },
  {
    icon: <GraphUp size={40} color="#3A2E5F" />,
    title: "MINERALS & ORES",
    text: "Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida.",
    bg: "#fff"
  },
  {
    icon: <PeopleFill size={40} color="#3A2E5F" />,
    title: "AGRO PRODUCTS",
    text: "Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida.",
    bg: "#fff"
  }
];

const OurServices = () => {

  // Fade Codes
  const refs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    // Cleanup
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="services" className="py-5 text-center">
      <Container>
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div
          className="mx-auto mb-5"
          style={{ width: "60px", height: "3px", background: "#3A2E5F" }}
        ></div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col
              md={4}
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className={`fade-in-section ${
                visibleIndexes.includes(index) ? "is-visible" : ""
              }`}
            >
              <Card className="border-0 shadow-sm p-4 h-100">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ background: service.bg, width: "80px", height: "80px" }}
                >
                  {service.icon}
                </div>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.text}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
