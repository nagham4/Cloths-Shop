import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <section id="about" className="py-5 text-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="text-uppercase small fw-semibold mb-2 text-secondary">Who We Are</p>
            <h4 className="fw-bold lh-base">
              We’re Juliette Candles and we're here to help you find your signature candles.
            </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
