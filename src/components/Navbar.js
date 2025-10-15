import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <Navbar expand="lg" bg="white" fixed="top" className="py-3 shadow-sm" >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold">
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
                            className={({ isActive }) =>
                                `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                            }
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/petroleum"
                            className={({ isActive }) =>
                                `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                            }
                        >
                            Petroleum
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/metals"
                            className={({ isActive }) =>
                                `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                            }
                        >
                            Metals
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/agro"
                            className={({ isActive }) =>
                                `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                            }
                        >
                            Agro
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/vision"
                            className={({ isActive }) =>
                                `fw-semibold nav-link ${isActive ? "text-active" : "text-secondary"}`
                            }
                        >
                            Vision
                        </Nav.Link>

                    </Nav>
                        <Button
                            as={NavLink}
                            to="/contact"
                            variant="primary"
                            className="fw-semibold px-4 py-2"
                            style={{ backgroundColor: "#3A2E5F", border: "none", borderRadius: "6px" }}
                        >
                            Contact Us
                        </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
