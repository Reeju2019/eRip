import {
    Button,
    Container,
    Image,
    Modal,
    Row,
    InputGroup,
    Form,
    Nav,
} from 'react-bootstrap';
import { useState } from 'react';
import './Header.css';
const Header: React.FunctionComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container className="mt-2">
                <Container fluid>
                    <Row className="Navbar">
                        <Image
                            src="/static/image/logo_erip.png"
                            className="col-2 Logo align-self-center"
                            alt="logo"
                        />

                        <div className="modal-search d-flex col-6">
                            {/* Modal */}
                            <Button
                                type="button"
                                className="btn modal-btn rounded-0 bg-transparent text-muted fw-bold"
                                data-toggle="modal"
                                data-target="#myModal"
                                onClick={handleShow}
                            >
                                <i className="fas fa-map-marker-alt"></i>
                                Bengaluru
                                <i className="fa-solid fa-caret-down"></i>
                            </Button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Current Location</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>have to implement</Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Understood
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* <!--End of Modal -->  */}

                            <InputGroup className="search_btn d-flex">
                                <div className="align-self-center m-3">
                                    <i className="fas fa-search"></i>
                                </div>
                                <Form.Control
                                    type="search"
                                    className="form-control rounded-0 border-0"
                                    id="search-border"
                                    placeholder="Search for a services"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </InputGroup>
                        </div>
                        <Nav className="modal-search d-flex col-4 justify-content-end align-self-center">
                            <Nav.Link
                                href="home"
                                className="text-muted fw-bold"
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="contact"
                                className="text-muted fw-bold"
                            >
                                Contact Us
                            </Nav.Link>
                            <Nav.Link
                                href="/login"
                                className="d-flex flex-row text-muted fw-bold"
                            >
                                <i className="fa-regular fa-user"></i>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Header;
