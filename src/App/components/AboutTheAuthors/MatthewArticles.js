import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import MatthewArticleInfo from '../../assets/ContentFiles/MatthewArticleInfo'
import { Link } from 'react-router-dom'

const MatthewArticles = () => {
    const[content] = useState(MatthewArticleInfo)

    return (
        <Container fluid className="containers mt-5 pt-4 text-start">
            <Row>
                <Col className="mb-4">
                    <h1>Articles by Matthew</h1>
                    <div className="bg-primary" style={{width: 290, height: 5}}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="mb-5">
                    {content.map(MatthewArticleInfo => (
                        <Carousel.Item>
                            <Card style={{ width: '90vw' }}>
                                <Card.Img className="carousel-image img-fluid" variant="top" src={MatthewArticleInfo.image} />
                                <Link to={MatthewArticleInfo.link} className="text-decoration-none">
                                <Card.Body className="carousel-card" className={MatthewArticleInfo.color}>
                                    <Card.Title>
                                        <h2>{MatthewArticleInfo.title}</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="text-light mb-4">
                                            {MatthewArticleInfo.description}
                                        </p>
                                        <small className="text-light">By {MatthewArticleInfo.author}</small>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={MatthewArticleInfo.color}>
                                    <small className="d-flex justify-content-end text-light me-4">{MatthewArticleInfo.date}</small>
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

export default MatthewArticles;