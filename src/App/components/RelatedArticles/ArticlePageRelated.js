import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlePic from '../../assets/Aussiedoodle.png'
import { useState } from 'react'
import RelatedArticleInfo from '../../assets/ContentFiles/relatedArticles'

const RelatedArticles = () => {
    const [content] = useState(RelatedArticleInfo)

    return (
        <>
            <Row className="mb-4 ms-1">
                <Col>
                    <h2 className="text-dark">Related Articles</h2>
                    <div className="related-divider"></div>
                </Col>
            </Row>
            <Container fluid>
                {content.map(RelatedArticleInfo => (
                <Row className="rounded mb-5">
                    <Col lg="4" md="5" sm="4" xs="4" className="mx-0 px-0">
                        <Image src={RelatedArticleInfo.squareImage} className="img-fluid rounded" />
                    </Col>
                    <Col lg="8" md="7" sm="8" xs="8" className="mx-0 px-0 rounded" className={RelatedArticleInfo.color}>
                        <p className="text-light related-title mb-0 pb-0 pt-2">{RelatedArticleInfo.title}</p>
                        <small className="text-light">{RelatedArticleInfo.description}</small>
                        <div className="border-top">
                            <p className="text-light related-date text-end mb-0 pb-0 pe-2">{RelatedArticleInfo.date} | By {RelatedArticleInfo.author}</p>
                        </div>
                    </Col>
                </Row>
                ))}
            </Container>
        </>
    )
}

export default RelatedArticles;