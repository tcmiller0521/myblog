import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleHeader from './components/Header/ArticleHeader';
import ArticleBody from './components/body/ArticleBody';
import RelatedArticles from './components/RelatedArticles/ArticlePageRelated';
import ArticlePageLatest from './components/FeaturedArticles/ArticlePageFeatured';

const ArticlePage = () => {

    return (
        <>
            <ArticleHeader />
            <Container fluid className="containers">
                <Row>
                    <Col lg="9" md="8">
                        <ArticleBody />
                    </Col>
                    <Col>
                        <RelatedArticles />
                    </Col>
                </Row>
            </Container>
            <ArticlePageLatest />
        </>
    )
}

export default ArticlePage;