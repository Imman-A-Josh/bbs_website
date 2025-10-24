import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavClick = () => {
        // Collapse only in mobile view
        if (window.innerWidth < 992) {
            setExpanded(false);
        }
    };

    return (
        <>
            <Navbar
                expand="lg"
                bg="white"
                fixed="top"
                className="py-3 shadow-sm"
                expanded={expanded}
            >
                <Container>
                    <Navbar.Brand
                        href="/"
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
                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "gray",
                                    marginTop: "-5px",
                                }}
                            >
                                BUSINESS SOLUTIONS
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="main-navbar"
                        onClick={() => setExpanded(expanded ? false : true)}
                    />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto d-flex align-items-center text-center gap-4">
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"
                                    }`
                                }
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"
                                    }`
                                }
                            >
                                About
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/products"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"
                                    }`
                                }
                            >
                                Products
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/services"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"
                                    }`
                                }
                            >
                                Services
                            </Nav.Link>

                            <Nav.Link
                                as={NavLink}
                                to="/contact"
                                onClick={handleNavClick}
                                className={({ isActive }) =>
                                    `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"
                                    }`
                                }
                            >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
