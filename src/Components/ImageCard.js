import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
export default function ImageCard ({url,title}) {
    return (
      
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Card >
            
            <Card.Body>
              
              
              <Card.Img variant="bottom" src={url} />
              <Card.Text>{title}</Card.Text>
            </Card.Body>
            </Card>
        </Col>
        
        </Row>
        
      );
}