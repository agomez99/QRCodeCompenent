import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
function App() {

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={4}>
            <Card className="card">
              <Card.Img src="./qr-code.png" className="card-img" alt="card-image" />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Improve your front-end skills by building projects</Card.Title>
                <Card.Text style={{ fontSize: '15px', color: 'hsl(210, 3%, 55%)' }} className="text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
