import footerLogo from '../../assets/footer-logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import NewsletterModal from '../MISC/newsletterModal';


const Footer = () => {

    return (
        <>
            <Container fluid className="newsletter-container bg-primary">
                <div className="news-div"></div>
            </Container>
            <div className="bg-secondary footer-div">
                <Container fluid className="bg-primary newsletter-container py-4">
                    <Container>
                        <Row>
                            <Col lg="3" className="text-start">
                                <h1 className="text-light">Join our Newsletter!</h1>
                                <p className="text-light">Get updates on when we post</p>
                            </Col>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col className="pt-3">
                                            <Form.Control placeholder="Email" />
                                            <Row>
                                                <Col lg="auto" sm="auto" className="pe-0 me-0">
                                                    <Form.Check aria-label="option 1" />
                                                </Col>
                                                <Col lg="auto" sm="auto">
                                                    <p className="footer-text p-1 ps-0">I agree to subscribe to emails and receive offers from Aussiedoodle Diaries</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg="1" md="1" sm="1" xs="2" className="pt-3">
                                            <NewsletterModal />
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
            <Navbar expand="lg" className="footer-box bg-secondary d-flex flex-column">
                <Container fluid className="footer-container d-flex justify-content-center">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav navbarScroll >
                            <Link to='/#' className="navtext text-light mt-4 pt-1 me-3 text-decoration-none">Home</Link>
                            <Link to='/browse' className="navtext text-light mt-4 pt-1 me-3 text-decoration-none">Browse</Link>
                        </Nav>
                        <Navbar.Brand href="#" className="me-4"><img src={footerLogo}></img></Navbar.Brand>
                        <Nav navbarScroll>
                            <Link to='/about/taylormiller' className="navtext text-light mt-4 pt-1 me-3 text-decoration-none">About Us</Link>
                            <Link to='/contact' className="navtext text-light mt-4 pt-1 me-3 text-decoration-none">Contact</Link>
                            <ScrollToTop smooth/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Footer;