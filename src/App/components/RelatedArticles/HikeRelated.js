import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlePic from '../../assets/Aussiedoodle.png'
import { useState } from 'react'
import HikeRelatedInfo from '../../assets/ContentFiles/HikeRelated'

const HikeRelatedArticles = () => {
    const [content] = useState(HikeRelatedInfo)

    return (
        <>
            <Row className="mb-4 ms-1">
                <Col>
                    <h2 className="text-dark">Related Articles</h2>
                    <div className="related-divider"></div>
                </Col>
            </Row>
            <Container fluid>
                {content.map(HikeRelatedInfo => (
                <Row className="rounded mb-5">
                    <Col lg="4" md="5" sm="6" xs="6" className="mx-0 px-0">
                        <Image src={HikeRelatedInfo.image} className="img-fluid rounded" />
                    </Col>
                    <Col lg="8" md="7" sm="6" xs="6" className="mx-0 px-0 rounded" className={HikeRelatedInfo.color}>
                        <p className="text-light related-title mb-3 pb-0 pt-2">{HikeRelatedInfo.title}</p>
                        <div className="border-top">
                            <p className="text-light related-date text-end mb-0 pb-0 pe-2">{HikeRelatedInfo.date} | By {HikeRelatedInfo.author}</p>
                        </div>
                    </Col>
                </Row>
                ))}
            </Container>
        </>
    )
}

export default HikeRelatedArticles;