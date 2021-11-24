import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import FeaturedArticleInfo from '../../assets/ContentFiles/featuredArticles'
import { Link } from 'react-router-dom'


const HomePageFeatured = () => {
    const[content] = useState(FeaturedArticleInfo)
    return (
        <Container fluid className="containers mt-5 pt-4 text-start">
            <Row>
                <Col className="mb-4">
                    <h1>Featured Articles</h1>
                    <div className="featured-divider"></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                    {content.map(FeaturedArticleInfo => (
                        <Carousel.Item>
                            <Card style={{ width: '90vw' }}>
                                <Card.Img className="carousel-image img-fluid" variant="top" src={FeaturedArticleInfo.image} />
                                <Link to={FeaturedArticleInfo.link} className="text-decoration-none">
                                <Card.Body className="carousel-card" className={FeaturedArticleInfo.color}>
                                    <Card.Title>
                                        <h2>{FeaturedArticleInfo.title}</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <p className="text-light mb-4">
                                            {FeaturedArticleInfo.description}
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={FeaturedArticleInfo.color}>
                                    <small className="d-flex justify-content-end text-light me-4">{FeaturedArticleInfo.date} | By {FeaturedArticleInfo.author}</small>
                                </Card.Footer>
                                </ Link>
                            </Card>
                        </Carousel.Item>
                        ))} 
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePageFeatured;