import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Components/MyNavbar';

import MyContainer from './Components/MyContainer';

function App() {
  
  return (
    <div className="App">
      <MyNavbar/>
      <Container>
      <Row>
        <Col><MyContainer/></Col>
        
      </Row>
      
    </Container>
      
      
      
    
    </div>
  );
}

export default App;
