import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import dogWalking from '../../assets/ourstory.jpg'

const OurStoryHeader = () => {

    return (
        <Container fluid className="containers mb-5">
            <Row>
                <Col lg="4" md="12" className="d-flex flex-column justify-content-end text-start">
                    <h1 className="header-text display-4">Our Story</h1>
                    <p>Our story isn't the longest one ever, but we have definitely had some interesting times already! It all started when Taylor and Matthew met
                        at a Ski Area in 2018! Matthew was working there and Taylor was snowboarding with her brother, Jordan, and their friend, Wyatt. Now, Wyatt 
                        is naturally very outgoing and sometimes a little obnoxious (don't tell him we said that), so he made it his goal this day to befriend all
                        of the lift operators, and wouldn't ya know that Matthew just so happened to be one of them!
                    </p>
                    <p> Well, after Wyatt befriended them, he wanted to keep in touch so he asked all of them for their Snapchat's. Matthew isn't a huge social media
                        person and because of this, he didn't know his Snapchat username off the top of his head so he just told us his name and told us to ask someone
                        on the front side for his number. Newsflash, we were not going to do that. So Wyatt asked me to look him up on facebook, since he didn't have
                        one of his own, so I did and I found him! But I wasn't going to be the one to reach out and talk to him, but Wyatt insisted. I finally did and well
                        now here we are! 3 years later, married with the best fur baby anyone could ask for! (Definitely not bias). But how did Oakley get to us you may
                        be wondering? Well, that's a pretty simple story.
                    </p>
                    <p> Taylor had another dog before Oakley, named Roxie, but she got her when she was really young, so we like to joke that Taylor wasn't responsible 
                        enough for a dog at that time and that Roxie's grandparents (Taylor's parents) had to raise her. Because of this, Roxie became very much a family
                        dog and Taylor was not able to take her with her when she left for college, so Taylor set out on a quest to find a dog that could be hers, since
                        now she was responsible enough to be a parent. Well, Oakley came to us from a small, local, ethical breeder that we knew before we even thought
                        about getting a dog. We found out they had some pups available and the rest is history! 
                    </p>
                </Col>
                <Col lg="8" md="12">
                    <img src={dogWalking} className="img-fluid rounded"></img>
                </Col>
            </Row>
        </Container>
    )
}

export default OurStoryHeader;