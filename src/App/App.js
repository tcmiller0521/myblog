import './App.css'
import Navigation from './components/Navbar/Navbar';
import Homepage from './Homepage';
import ArticlePage from './ArticlePage'
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUs';
import Footer from './components/Footer/HomepageFooter';
import { Route, Switch, } from 'react-router-dom';
import BrowsePage from './Browse';
import TaylorArticles from './components/AboutTheAuthors/TaylorArticles';
import OakleyArticles from './components/AboutTheAuthors/OakleyArticles';
import MatthewArticles from './components/AboutTheAuthors/MatthewArticles';
import DogTreatsArticle from './DogTreatsArticle';
import ScrollToTop from './components/ScrollToTop';
import BrowseLatest from './components/LatestArticles/BrowseLatest';
import FavHikeArticle from './FavHikeArticle';

const App = () => {

  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Switch>
        <Route path exact="/#">
          <ScrollToTop />
          <Homepage />
        </Route>
        <Route path="/teachyourdoghowtowalkonalooseleash">
          <ArticlePage />
        </Route>
        <Route path="/myfavoritetreats">
          <DogTreatsArticle />
        </Route>
        <Route path="/ourfavoriteplacestohike">
          <FavHikeArticle />
        </Route>
        <Route path="/about/taylormiller">
          <AboutUsPage />
          <TaylorArticles />
        </Route>
        <Route path="/about/oakleymiller">
          <AboutUsPage />
          <OakleyArticles />
        </Route>
        <Route path="/about/matthewmiller">
          <AboutUsPage />
          <MatthewArticles />
        </Route>
        <Route path="/browse">
          <BrowsePage />
          <BrowseLatest />
        </Route>
        <Route path="/contact">
          <ContactUsPage />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App;