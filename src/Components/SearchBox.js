import { useState, CSSProperties } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import MySpinner from "./MySpinner";


async function invokeOpenApi(searchTerm,setSpinner2,setPrimaryImageUrl) {
    console.log("invokeOpenApi searchTerm = " + searchTerm);
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        
    });
    
    const openai = new OpenAIApi(configuration);
    setSpinner2(true);
    //spinnerSetter(true);
    const response = await openai.createImage({
        prompt: searchTerm,
        n: 3,
        size: "1024x1024",
      });
      setSpinner2(false);
      //spinnerSetter(false);
      console.log(response.data.data[0].url);
      setPrimaryImageUrl(response.data.data[0].url);
      
}
export default function SearchBox ({setPrimaryImageUrl,setImageTitle}) {
    const [searchTerm,setSearchTerm] = useState('an astronaut riding a horse');
    const [spinner2,setSpinner2] = useState(false);
    const [imageStyle, setImageStyle] = useState('photo realistic');
    
    const [radioValue, setRadioValue] = useState('photo realistic');
    const radios = [
        { name: 'photo realistic', value: 'photo realistic', imgStyle:'photo realistic' },
        { name: 'andy warhole', value: 'andy warhole', imgStyle:'andy warhole'},
        { name: 'vincent van gogh', value: 'vincent van gogh' , imgStyle:'vincent van gogh'},
        { name: 'pencil drawing', value: 'pencil drawing' , imgStyle:'pencil drawing'},
        { name: 'pop art', value: 'pop art' , imgStyle:'pop art'},
        { name: 'abstract art', value: 'abstract art' , imgStyle:'abstract art'},
        { name: 'spray paint', value: 'spray paint' , imgStyle:'spray paint'},
        { name: 'oil', value: 'oil' , imgStyle:'oil'},
        { name: 'acrylic', value: 'acrylic' , imgStyle:'acrylic'},
      ];
    let [loading, setLoading] = useState(true);

    return (
        
        <div>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    
                <Stack gap={3}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control type="text" className="me-auto" placeholder="What do you want to create:" onChange={handleTextChange} disabled={spinner2} value={searchTerm}/>
                        <Button variant="primary" onClick={handleFormSubmit} disabled={spinner2}>{!spinner2 ? 'Search' : 'Loading...'}</Button>
                        
                    </Stack>
                    
                    
                    <Stack  gap={3}>
                            
                            <h3>in a</h3>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant= 'outline-success'
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => {
                                        setRadioValue(e.currentTarget.value);
                                        const searchFor = searchTerm + ' in a ' + e.currentTarget.value + ' style';
                                        setImageStyle(e.currentTarget.value);
                                        setImageTitle(searchFor);
                                        invokeOpenApi(searchFor,setSpinner2,setPrimaryImageUrl);
                                    }}
                                >
                                    {radio.name}
                                </ToggleButton>
                                ))}
                            </ButtonGroup>
                            <h3>style</h3>
                            <MySpinner showSpinner={spinner2}/> 
                        
      
                    </Stack>
                    
                    </Stack>
                </Col>
                
   
            </Row>
            
            
        
    
    </div>
    )
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const searchFor = searchTerm + ' in a ' + imageStyle + ' style';
        console.log(searchFor);
        setImageTitle(searchFor);
        invokeOpenApi(searchFor,setSpinner2,setPrimaryImageUrl);
        
    }
    function handleTextChange(e) {
        setSearchTerm(e.target.value);
    }
    
        
    
}
