import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import LatestArticleInfo from '../../assets/ContentFiles/latestArticleInfo'
import { Link } from 'react-router-dom'

const HomePageLatest = () => {
    const [content] = useState(LatestArticleInfo)

    return (
        <Container fluid className="containers text-start mt-5 pt-4">
            <Row className="mb-4">
                <Col>
                    <h1>Browse Latest</h1>
                    <div className="latest-line"></div>
                </Col>
            </Row>
            <Row>
                {content.map(LatestArticleInfo => (
                    <Col lg="2" md="4" sm="4" xs="6" className="mb-5">
                        <Link to={LatestArticleInfo.link} className="text-decoration-none">
                            <Card className={LatestArticleInfo.color}>
                                <Card.Img variant="top" src={LatestArticleInfo.image} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title className="article-title">{LatestArticleInfo.title}</Card.Title>
                                    <p className="text-light">
                                        {LatestArticleInfo.description}
                                    </p>
                                    <small className="text-light">By {LatestArticleInfo.author}</small>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="d-flex justify-content-end card-date">November 3, 2021</small>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomePageLatest;