import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import OakleyArticleInfo from '../../assets/ContentFiles/OakleyArticles'
import { Link } from 'react-router-dom'

const OakleyArticles = () => {
    const [content] = useState(OakleyArticleInfo)

    return (
        <Container fluid className="containers mt-5 pt-4 text-start">
            <Row>
                <Col className="mb-4">
                    <h1>Articles by Oakley</h1>
                    <div className="blue-card" style={{ width: 260, height: 5 }}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="mb-5">
                        {content.map(OakleyArticleInfo => (
                            <Carousel.Item>
                                <Card style={{ width: '90vw' }}>
                                    <Card.Img className="carousel-image img-fluid" variant="top" src={OakleyArticleInfo.image} />
                                    <Link to={OakleyArticleInfo.link} className="text-decoration-none">
                                        <Card.Body className="carousel-card" className={OakleyArticleInfo.color}>
                                            <Card.Title>
                                                <h2>{OakleyArticleInfo.title}</h2>
                                            </Card.Title>
                                            <Card.Text>
                                                <p className="text-light mb-4">
                                                    {OakleyArticleInfo.description}
                                                </p>
                                                <small className="text-light">By {OakleyArticleInfo.author}</small>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className={OakleyArticleInfo.color}>
                                            <small className="d-flex justify-content-end text-light me-4">{OakleyArticleInfo.date}</small>
                                        </Card.Footer>
                                    </Link>
                                </Card>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default OakleyArticles;