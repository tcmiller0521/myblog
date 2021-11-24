
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import aussieHeader from '../../assets/oakley-header2.jpg'
import Oakley from '../../assets/images/oakley-head-03.png'

const HomePageHeader = () => {

    return (
        <Container fluid className="containers">
            <Row>
                <Col lg="4" md="12" className="d-flex flex-column justify-content-end text-end">
                    <h1 className="header-text display-4">Hi there,</h1>
                    <h1 className="header-text display-4">My Name is Oakley!</h1>
                    <p>Welcome to our blog! I am a 2 year old aussiedoodle named Oakley! I live with my mom, Taylor, and dad, Matthew and this is our life and journery!
                        We love camping, hiking and chasing rabbits together! My parents spoil me rotten, but they still say I am the goodest girl ever! We hope you will
                        stick around and watch us make mistake and try to fix them! Thanks for visiting! 
                    </p>
                </Col>
                <Col lg="8" md="12">
                    <img src={Oakley} className="img-fluid rounded"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePageHeader