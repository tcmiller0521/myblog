
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import dogWalking from '../../assets/images/dog-walking.jpg'
import blogContent from '../../assets/ContentFiles/blogContent'

const DogTreatsArticleHeader = () => {

    return (
        <Container fluid className="containers mb-5">
            <Row>
                <Col lg="4" md="12" className="d-flex flex-column justify-content-end text-start">
                    <h1 className="header-text display-4">{blogContent[1].title}</h1>
                    <p className="blog-content">
                        {blogContent[1].description}
                    </p>
                    <p>{blogContent[1].date} | By {blogContent[1].author}</p>
                </Col>
                <Col lg="8" md="12">
                    <img src={blogContent[1].image} className="img-fluid rounded"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default DogTreatsArticleHeader;