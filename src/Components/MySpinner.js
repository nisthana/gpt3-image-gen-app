import Spinner from 'react-bootstrap/Spinner';
export default function MySpinner({showSpinner}){
    if (showSpinner) {
        return (
            <Spinner animation="border" />
        )
    }
}