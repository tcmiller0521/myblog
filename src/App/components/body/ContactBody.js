import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ContactModal from '../MISC/contactModal';

const ContactForm = () => {

    return (
        <>
            <Container>
                <h1 className="mt-4 mb-2">Contact Us</h1>
                <p className="mb-4 pb-2">Have questions, concerns, business inquiries or just want to chat? Fill out the form below, and we will get back to you as soon as we can!</p>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="First Name" placeholder="John" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Last Name" placeholder="Smith" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="johnsmith@hotmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="Business Inquiry" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group controlId="Textarea" label="Comments" className="mb-3">
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>
                    </Row>

                    <ContactModal />
                </Form>
            </Container>
        </>
    )
}

export default ContactForm;