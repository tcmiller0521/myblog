import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import blogLogo from '../../assets/blog-logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (

        <div>
            <div className='banner'></div>
            <Navbar expand="lg" className="topnav bg-light">
                <Container fluid className="nav-container">
                    <Navbar.Brand href="#" className="me-4"><img src={blogLogo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Link to='/#' className="navtext text-dark mt-4 pt-1 me-3 text-decoration-none">Home</Link>
                            <Link to='/browse' className="navtext text-dark mt-4 pt-1 me-3 text-decoration-none">Browse</Link>
                            <Link to='/about/taylormiller' className="navtext text-dark mt-4 pt-1 me-3 text-decoration-none">About Us</Link>
                            <Link to='/contact' className="navtext text-dark mt-4 pt-1 me-3 text-decoration-none">Contact</Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button className="btn-alert">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;