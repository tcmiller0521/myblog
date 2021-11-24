import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthorInfo from '../../assets/ContentFiles/authorInfo'
import { Link } from 'react-router-dom'

const MeetTheTeam = () => {
    const[content, setContent] = useState(AuthorInfo)


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
                                    {AuthorInfo.bio}
                                </p>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={AuthorInfo.articles} className="d-flex justify-content-end text-light" >Browse this Author's Articles</Link>
                        </Card.Footer>
                        </Card>
                    </Col>
                        ))}
                </Row>
        </Container>
    )
}

export default MeetTheTeam;