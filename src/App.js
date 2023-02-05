import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyContainer from './Components/MyContainer';

function App() {
  console.log(process.env.OPENAI_API_KEY) 
  return (
    <div className="App">
      
      <Container>
      <Row>
        <Col><MyContainer/></Col>
        
      </Row>
      
    </Container>
      
      
      
    
    </div>
  );
}

export default App;
