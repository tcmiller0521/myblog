import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import BrowseContent from "./assets/ContentFiles/Browse";
import Oakley from './assets/images/oakley-header-02.png'
import { Link } from "react-router-dom";
import BrowsePageHeader from "./components/Header/BrowseHeader";

const BrowsePage = () => {
    const [content] = useState(BrowseContent)

    return (
        <Container>
            <BrowsePageHeader />
        </Container>
    )
}

export default BrowsePage;