import AboutPageAuthors from "./components/AboutTheAuthors/TaylorArticles";
import MeetTheTeam from "./components/AboutTheAuthors/MeetTheTeam";
import OurStoryHeader from "./components/Header/AboutPageHeader";
import TaylorArticles from "./components/AboutTheAuthors/TaylorArticles";
import { Route, Switch } from 'react-router-dom';
import OakleyArticles from "./components/AboutTheAuthors/OakleyArticles";
import MatthewArticles from "./components/AboutTheAuthors/MatthewArticles";

const AboutUsPage = () => {

    return (
        <>
            <OurStoryHeader />
            <MeetTheTeam />
        </>
    )
}

export default AboutUsPage;