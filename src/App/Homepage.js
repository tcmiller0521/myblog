import HomePageHeader from "./components/Header/HomepageHeader";
import Container from "react-bootstrap/Container";
import HomePageLatest from "./components/LatestArticles/HomepageLatest";
import HomePageFeatured from "./components/FeaturedArticles/HomepageFeatured";
import HomePageFooter from "./components/Footer/HomepageFooter";
import HomePageAuthors from "./components/AboutTheAuthors/HomePageAbout";

const Homepage = () => {

    return (
        <Container fluid>
            <HomePageHeader />
            <HomePageFeatured />
            <HomePageAuthors />
            <HomePageLatest />
        </Container>
        
    )
}

export default Homepage;