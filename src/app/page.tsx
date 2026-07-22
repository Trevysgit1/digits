import { Nav, Col, Container, Image, Row } from 'react-bootstrap';
import { PeopleFill, FileEarmarkTextFill, CalendarCheckFill } from 'react-bootstrap-icons'

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" className="py-3">
      <Row className="align-middle text-center">
        <Col className= "d-flex flex-column align-items-center">
        <Nav><PeopleFill size={100}/></Nav>
        <h1>
          Multiple Users
        </h1>
        <h5>
          his address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.
        </h5>
        </Col>
        <Col className= "d-flex flex-column align-items-center">
        <Nav><FileEarmarkTextFill size={100}/></Nav>
        <h1>Contract Details</h1>
        <h5>
          For each contact, you can save their name, address, and phone number.
        </h5>
        </Col>
        <Col className= "d-flex flex-column align-items-center">
        <Nav><CalendarCheckFill size={100}/></Nav>
        <h1>
          Timestamped Notes
        </h1>
        <h5>
          Each time you make contact with a contact, you can write a note that summarizes the conversation. This note is saved along with a timestamp with the contact.
        </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;