import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Components/MyNavbar';
import Button from 'react-bootstrap/Button';

import MyContainer from './Components/MyContainer';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut }) {
  
  return (
    
    <Container  >
      <MyNavbar/>
    <Row>
      <Col><MyContainer/></Col>
      
    </Row>
    <Row>
    <Button onClick={signOut}>Sign Out</Button>
    </Row>
  </Container>
    
  );
}

export default withAuthenticator(App);
