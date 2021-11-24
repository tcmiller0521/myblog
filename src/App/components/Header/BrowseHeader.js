import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import BrowseContent from "../../assets/ContentFiles/Browse";
import Oakley from '../../assets/images/oakley-header-02.png'
import { Link } from "react-router-dom";

const BrowsePageHeader = () => {
    const [content] = useState(BrowseContent)

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-4">
                    <h1>Browse</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mb-4">
                    <div className="bg-primary" style={{ width: 190, height: 4, }} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Link className="pe-3 text-dark">Training</Link>
                    <Link className="pe-3 text-dark">Lifestyle</Link>
                    <Link className="pe-3 text-dark">Travel</Link>
                    <Link className="pe-3 text-dark">Food and Treats</Link>
                    <Link to="./byauthor" className="pe-3 text-dark">By Author</Link>
                </Col>
            </Row>

        </Container>
    )
}

export default BrowsePageHeader;