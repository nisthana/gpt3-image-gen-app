import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function ImageCard ({url,title}) {
    return (
        <Row className="justify-content-md-center">
          <Col>
            <Card >
            
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              
              <Card.Img variant="bottom" src={url} />
            </Card.Body>
            </Card>
        </Col>
        
        </Row>
      );
}