import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Components/MyNavbar';

import MyContainer from './Components/MyContainer';

function App() {
  
  return (
    
    <Container  >
      <MyNavbar/>
    <Row>
      <Col><MyContainer/></Col>
      
    </Row>
  </Container>
    
  );
}

export default App;
