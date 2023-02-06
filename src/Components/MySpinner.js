import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function MySpinner({showSpinner}){
    if (showSpinner) {
        return (
            <Row className="justify-content-md-center">
                <Col><Spinner animation="border" size="sm"/></Col>
            
            </Row>
        )
    }
}