import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DogTreatsBody from './components/body/DogTreatsBody';
import DogTreatsArticleHeader from './components/Header/DogTreatsArticleHeader';
import TreatRelatedArticles from './components/RelatedArticles/TreatsRelated';
import ArticlePageLatest from './components/FeaturedArticles/ArticlePageFeatured';

const DogTreatsArticle = () => {

    return (
        <>
            <DogTreatsArticleHeader />
            <Container fluid className="containers">
                <Row>
                    <Col lg="9" md="8">
                        <DogTreatsBody/>
                    </Col>
                    <Col>
                        <TreatRelatedArticles />
                    </Col>
                </Row>
            </Container>
            <ArticlePageLatest />
        </>
    )
}

export default DogTreatsArticle;