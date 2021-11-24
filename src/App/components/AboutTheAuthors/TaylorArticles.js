import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import TaylorArticlesInfo from '../../assets/ContentFiles/TaylorArticles'


const TaylorArticles = () => {
    const[content] = useState(TaylorArticlesInfo)

    return (
        <Container fluid className="containers mt-5 pt-4 text-start">
            <Row>
                <Col className="mb-4">
                    <h1>Articles by Taylor</h1>
                    <div className="bg-secondary" style={{width: 250, height: 5}}></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="mb-5">
                    {content.map(TaylorArticlesInfo => (
                        <Carousel.Item>
                            <Card style={{ width: '90vw' }}>
                                <Card.Img className="carousel-image img-fluid" variant="top" src={TaylorArticlesInfo.image} />
                                <Card.Body className="carousel-card" className={TaylorArticlesInfo.color}>
                                    <Card.Title>
                                        <h2>{TaylorArticlesInfo.title}</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="text-light mb-4">
                                            {TaylorArticlesInfo.description}
                                        </p>
                                        <small className="text-light">By {TaylorArticlesInfo.author}</small>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={TaylorArticlesInfo.color}>
                                    <small className="d-flex justify-content-end text-light me-4">{TaylorArticlesInfo.date}</small>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                        ))} 
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default TaylorArticles;