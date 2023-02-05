import { useState, CSSProperties } from "react";

import Spinner from "./Spinner";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


async function invokeOpenApi(searchTerm,setSpinner,setPrimaryImageUrl) {
    
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: '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'
    });
    
    const openai = new OpenAIApi(configuration);
    setSpinner(true);
    //spinnerSetter(true);
    const response = await openai.createImage({
        prompt: searchTerm,
        n: 3,
        size: "1024x1024",
      });
      setSpinner(false);
      //spinnerSetter(false);
      console.log(response.data.data[0].url);
      setPrimaryImageUrl(response.data.data[0].url);
      
}
export default function SearchBox ({setPrimaryImageUrl,setImageTitle}) {
    const [searchTerm,setSearchTerm] = useState('');
    const [spinner,setSpinner] = useState(false);
    let [loading, setLoading] = useState(true);
    return (
        
        <div>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    
                <Stack gap={3}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control type="text" className="me-auto" placeholder="What do you want to create:" onChange={handleTextChange} disabled={spinner} value={searchTerm}/>
                        <Button variant="primary" onClick={handleFormSubmit} disabled={spinner}>{!spinner ? 'Search' : 'Loading...'}</Button>
                        
                    </Stack>
                    
                    
                    <Stack direction="horizontal" gap={3}>
                        <Button variant="outline-primary" onClick={()=>{
                                invokeOpenApi('astronaut in palace',setSpinner,setPrimaryImageUrl);
                            }}>astronaut in palace</Button>
                        <Button variant="outline-secondary" onClick={()=>{
                                invokeOpenApi('cat in the hat',setSpinner,setPrimaryImageUrl);
                            }}>cat in the hat</Button>
                        <Button variant="outline-danger" onClick={()=>{
                                invokeOpenApi('stephen curry on moon',setSpinner,setPrimaryImageUrl);
                            }}>stephen curry on moon</Button>
      
                    </Stack>
                    
                    </Stack>
                </Col>
                
   
            </Row>
            <Row><Col><Spinner showSpinner={spinner}/></Col></Row>
            
        
    
    </div>
    )
    function handleFormSubmit(e) {
        e.preventDefault();
        
        invokeOpenApi(searchTerm,setSpinner,setPrimaryImageUrl);
        
    }
    function handleTextChange(e) {
        setSearchTerm(e.target.value);
    }
    
        
    
}
