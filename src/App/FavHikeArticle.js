import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavHikeBody from './components/body/FavHikeBody';
import FavHikeHeader from './components/Header/FavHikeHeader';
import HikeRelatedArticles from './components/RelatedArticles/HikeRelated';
import ArticlePageLatest from './components/FeaturedArticles/ArticlePageFeatured';

const FavHikeArticle = () => {

    return (
        <>
            <FavHikeHeader />
            <Container fluid className="containers">
                <Row>
                    <Col lg="9" md="8">
                        <FavHikeBody />
                    </Col>
                    <Col>
                        <HikeRelatedArticles />
                    </Col>
                </Row>
            </Container>
            <ArticlePageLatest />
        </>
    )
}

export default FavHikeArticle;