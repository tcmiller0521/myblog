import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlePic from '../../assets/Aussiedoodle.png'
import { useState } from 'react'
import TreatRelatedInfo from '../../assets/ContentFiles/TreatsRelated'

const TreatRelatedArticles = () => {
    const [content] = useState(TreatRelatedInfo)

    return (
        <>
            <Row className="mb-4 ms-1">
                <Col>
                    <h2 className="text-dark">Related Articles</h2>
                    <div className="related-divider"></div>
                </Col>
            </Row>
            <Container fluid>
                {content.map(TreatRelatedInfo => (
                <Row className="rounded mb-5">
                    <Col lg="4" md="5" sm="4" xs="4" className="mx-0 px-0">
                        <Image src={TreatRelatedInfo.image} className="img-fluid rounded" />
                    </Col>
                    <Col lg="8" md="7" sm="8" xs="8" className="mx-0 px-0 rounded" className={TreatRelatedInfo.color}>
                        <p className="text-light related-title mb-0 pb-0 pt-2">{TreatRelatedInfo.title}</p>
                        <small className="text-light">{TreatRelatedInfo.description}</small>
                        <div className="border-top">
                            <p className="text-light related-date text-end mb-0 pb-0 pe-2">{TreatRelatedInfo.date} | By {TreatRelatedInfo.author}</p>
                        </div>
                    </Col>
                </Row>
                ))}
            </Container>
        </>
    )
}

export default TreatRelatedArticles;