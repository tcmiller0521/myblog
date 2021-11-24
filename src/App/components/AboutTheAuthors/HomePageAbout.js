import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import React, { useState } from 'react'
import AuthorInfo from '../../assets/ContentFiles/authorInfo'

const HomePageAuthors = () => {
    const[content] = useState(AuthorInfo)

   console.log(content)

    return (
        <Container fluid className="containers text-start mt-5 pt-4">
            <Row className="mb-4">
                <Col>
                    <h1>About the Authors</h1>
                    <div className="aboutus-divider"></div>
                </Col>
            </Row>
            <Row>
            {content.map(AuthorInfo => (
                        <Col lg="4" md="4" sm="6" xs="12">
                        <Card className={AuthorInfo.color}>
                            <Card.Img variant="top" src={AuthorInfo.image} />
                            <Card.Body>
                                <h2 className="author-name">{AuthorInfo.author}</h2>
                                <p className="text-light">
                                    {AuthorInfo.brief}
                                </p>
                            </Card.Body>
                            <Card.Footer>
                                    <small className="d-flex justify-content-end card-date"><Link to={AuthorInfo.link} className="text-light">Learn More About this Author</Link></small>
                                </Card.Footer>
                        </Card>
                    </Col>
                        ))}
                </Row>
        </Container>
    )
}

export default HomePageAuthors;