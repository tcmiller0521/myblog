import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FeaturedArticleInfo from "../../assets/ContentFiles/featuredArticles";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticlePageLatest = () => {

    const[content] = useState(FeaturedArticleInfo)

    return (
        <>
            <Container fluid className="newsletter-container bg-primary">
                <Container>
                    <Row>
                        <Col className="p-3 mt-4">
                            <h1 className="text-light">Featured Articles</h1>
                            <div className="featured-divider bg-dark"></div>
                        </Col>
                    </Row>
                    <Row>
                        {content.map(FeaturedArticleInfo => (
                        <Col lg="4" md="4" sm="6" xs="6">
                            <Link to={FeaturedArticleInfo.link} className="text-decoration-none">
                            <Card className={FeaturedArticleInfo.color}>
                                <Card.Img variant="top" src={FeaturedArticleInfo.squareImage} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title className="article-title">{FeaturedArticleInfo.title}</Card.Title>
                                    <p className="text-light">{FeaturedArticleInfo.description}</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="d-flex justify-content-end card-date">{FeaturedArticleInfo.date} | By {FeaturedArticleInfo.author}</small>
                                </Card.Footer>
                            </Card>
                            </Link>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default ArticlePageLatest;