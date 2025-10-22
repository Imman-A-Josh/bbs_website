import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const navigate = useNavigate();

    const User_Location = useLocation();

    const isProductsPage = User_Location.pathname.startsWith("/products");


    const toggleMenu = (menu) => {
        setOpenMenu(openMenu == menu ? null : menu);
    };

    const handleProductClick = (path) => {
        navigate(`/products/${path}`);
        setOpenMenu(null);
    };

    const handleNavClick = () => {
        setOpenMenu(null);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".mega-menu") && !e.target.closest(".nav-link")) {
            setOpenMenu(null);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <Navbar expand="lg" bg="white" fixed="top" className="py-3 shadow-sm">
                <Container>
                    <Navbar.Brand
                        href="#home"
                        className="d-flex align-items-center fw-bold"
                        onClick={handleNavClick}
                    >
                        <img
                            src="https://static.wixstatic.com/media/bff149_feb18a27aacf48f29349c5d21f7f45e6~mv2.png/v1/fill/w_150,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-transparent-png.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="me-2"
                        />
                        <div>
                            <span style={{ color: "#3A2E5F" }}>BIBLIA</span>{" "}
                            <div style={{ fontSize: "0.8rem", color: "gray", marginTop: "-5px" }}>
                                BUSINESS SOLUTIONS
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto d-flex align-items-center text-center gap-4">
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                                }
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                                }
                            >
                                About
                            </Nav.Link>

                            {/* <Nav.Link
                                className={`fw-semibold nav-link ${isProductsPage ? "text-active" : "text-secondary"
                                    }`}
                                onClick={() => toggleMenu("products")}
                            >
                                Products{" "}
                                <i className={`bi bi-chevron-${isProductsPage ? "up" : "down"}`}></i>
                            </Nav.Link> */}

                            <Nav.Link
                                className={`fw-semibold nav-link ${isProductsPage ? "text-active" : "text-secondary"}`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    toggleMenu("products");
                                }}
                            >
                                Products{" "}
                                <i className={`bi bi-chevron-${isProductsPage ? "up" : "down"}`}></i>
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/services"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                                }
                            >
                                Services
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/blogs"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                                }
                            >
                                Blogs
                            </Nav.Link>
                        </Nav>
                        <Button
                            as={NavLink}
                            to="/contact"
                            onClick={handleNavClick}
                            variant="primary"
                            className="fw-semibold px-4 py-2"
                            style={{
                                backgroundColor: "#3A2E5F",
                                border: "none",
                                borderRadius: "6px",
                            }}
                        >
                            Contact Us
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {openMenu === "products" && (
                <div className="mega-menu shadow-sm border-top" style={{height:"400px"}}>
                    <Container className="mt-3">
                        <Row className="py-4 mt-2">
                            <Col md={3} onClick={() => handleProductClick("petroleum")} className="mega-item">
                                <h6 className="fw-bold">Petroleum</h6>
                                <p className="small mb-0">
                                    We provide sustainable, safe petroleum services
                                </p>
                            </Col>
                            <Col md={3} onClick={() => handleProductClick("metals")} className="mega-item">
                                <h6 className="fw-bold">Metals & Minerals</h6>
                                <p className="small mb-0">
                                    We are committed to providing reliable
                                </p>
                            </Col>
                            <Col md={3} onClick={() => handleProductClick("agro")} className="mega-item">
                                <h6 className="fw-bold">Agro Products</h6>
                                <p className="small mb-0">
                                    We are dedicated to upholding the highest standards of quality
                                </p>
                            </Col>
                            <Col md={3} onClick={() => handleProductClick("apparel")} className="mega-item">
                                <h6 className="fw-bold">Apparel</h6>
                                <p className="small mb-0">
                                    BBS acts as a buying office in the apparel industry
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
};

export default NavBar;
