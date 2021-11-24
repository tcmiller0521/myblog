
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import dogWalking from '../../assets/images/dog-walking.jpg'
import blogContent from '../../assets/ContentFiles/blogContent'

const ArticleHeader = () => {

    return (
        <Container fluid className="containers mb-5">
            <Row>
                <Col lg="4" md="12" className="d-flex flex-column justify-content-end text-start">
                    <h1 className="header-text display-4">{blogContent[0].title}</h1>
                    <p className="blog-content">
                        {blogContent[0].description}
                    </p>
                    <p>{blogContent[0].date} | By {blogContent[0].author}</p>
                </Col>
                <Col lg="8" md="12">
                    <img src={blogContent[0].image} className="img-fluid rounded"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleHeader;