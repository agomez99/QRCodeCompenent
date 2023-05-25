import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {

  return (
    <>

<Container>
  <Row>
    <Col className="d-flex justify-content-center">
      <Card className='card'>
        <Card.Img src="./qr-code.png" className='card-img' />
        <Card.Body>
          <Card.Title style={{fontSize: '1.3rem', fontWeight: 'bold' }}>Improve your front-end skills by building projects</Card.Title>
          <Card.Text style={{fontSize: '1rem', color:'hsl(210, 3%, 55%)'}} className='text-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>




    </>
  )
}

export default App
