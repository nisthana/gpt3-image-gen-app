import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Spinner from 'react-bootstrap/Spinner';
import Prompts from "../Data/Prompts";


async function invokeOpenApi(searchTerm,setSpinner2,setPrimaryImageUrl) {
    console.log("invokeOpenApi searchTerm = " + searchTerm);
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        
    });
    
    const openai = new OpenAIApi(configuration);
    setSpinner2(true);
    //spinnerSetter(true);
    try {
        const response = await openai.createImage({
            prompt: searchTerm,
            n: 1,
            size: "1024x1024",
          });
          setSpinner2(false);
          //spinnerSetter(false);
          console.log(response.data.data[0].url);
          setPrimaryImageUrl(response.data.data[0].url);
    } catch (err) {
        console.log(err);
        setSpinner2(false);
    }
    
      
}
export default function SearchBox ({setPrimaryImageUrl,setImageTitle}) {
    const [searchTerm,setSearchTerm] = useState('an astronaut riding a horse');
    const [spinner2,setSpinner2] = useState(false);
    const [imageStyle, setImageStyle] = useState('');
    const [promptSeen,setPromptSeen] = useState([])
    const [radioValue, setRadioValue] = useState('');
    const radios = [
        { name: 'photo realistic', value: 'photo realistic', imgStyle:'photo realistic',cachedImg:'photo-realistic.png' },
        { name: 'andy warhole', value: 'andy warhole', imgStyle:'andy warhole',cachedImg:'andy-warhole.png'},
        { name: 'vincent van gogh', value: 'vincent van gogh' , imgStyle:'vincent van gogh', cachedImg:'van-gogh.png'},
        { name: 'pencil drawing', value: 'pencil drawing' , imgStyle:'pencil drawing',cachedImg:'pencil.png'},
        { name: 'pop art', value: 'pop art' , imgStyle:'pop art',cachedImg:'pop-art.png'},
        { name: 'abstract art', value: 'abstract art' , imgStyle:'abstract art',cachedImg:'abstract-art.png'},
        { name: 'spray paint', value: 'spray paint' , imgStyle:'spray paint',cachedImg:'spray-paint.png'},
        { name: 'oil', value: 'oil' , imgStyle:'oil',cachedImg:'oil.png'},
        { name: 'acrylic', value: 'acrylic' , imgStyle:'acrylic',cachedImg:'acrylic.png'},
      ];
    

    return (
        <Row className="justify-content-md-center">
            <Col >
                <h3>What image do you want to generate today?</h3>
                <Stack gap={3}>
                
                
                <Stack gap={3} direction="horizontal">
                            <Form.Control type="text" placeholder="What do you want to create:" onChange={handleTextChange} disabled={spinner2} value={searchTerm}/>
                     <Button variant="primary" onClick={handleFormSubmit} disabled={spinner2}>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            
                            className={!spinner2 ? "visually-hidden" : "visually-hidden1"}
                            />
                            {!spinner2 ? 'Search' : ''}</Button>
                            <Button className="text-nowrap" variant="primary" onClick={()=>{
                                
                                var idx = Math.floor(Math.random() * Prompts.length);
                                setSearchTerm(Prompts[idx].prompt);
                                const numImages = Prompts[idx].numPics;
                                const imgIdx = Math.floor(Math.random() * numImages);
                                var imgUrl = 'img-'+Prompts[idx].imgId+'-'+imgIdx+'.png';
                                var alreadySeenImage = promptSeen.indexOf(imgUrl) !== -1;
                                while (alreadySeenImage) {
                                    
                                    idx = Math.floor(Math.random() * Prompts.length);
                                    
                                    const numImages = Prompts[idx].numPics;
                                    const imgIdx = Math.floor(Math.random() * numImages);
                                    imgUrl = 'img-'+Prompts[idx].imgId+'-'+imgIdx+'.png';
                                    
                                    var alreadySeenImage = promptSeen.indexOf(imgUrl) !== -1;
                                }

                                const alreadySeen1 = promptSeen.concat(imgUrl);
                            
                                setPrimaryImageUrl(imgUrl);
                                setImageTitle(Prompts[idx].prompt);
                                setPromptSeen(alreadySeen1);
                                if (promptSeen.length == Prompts.length) {
                                    setPromptSeen([]);
                                }
                                
                                
                                


                            }}>Surprise Me!</Button>
                            
                </Stack>  
                            
                        
                    
                    <Stack  gap={3}>
                            
                            
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
                                        if (searchTerm === 'an astronaut riding a horse') {
                                            setPrimaryImageUrl(radios[idx].cachedImg);
                                        } else {
                                            invokeOpenApi(searchFor,setSpinner2,setPrimaryImageUrl);
                                        }
                                        
                                    }}
                                >
                                    {radio.name}
                                </ToggleButton>
                                ))}
                            </ButtonGroup>
    
                    </Stack>
                </Stack>
            </Col>
        
        </Row>

    
    );
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const searchFor = imageStyle === '' ? searchTerm : searchTerm + ' in a ' + imageStyle + ' style';
        console.log(searchFor);
        setImageTitle(searchFor);
        invokeOpenApi(searchFor,setSpinner2,setPrimaryImageUrl);
        
    }
    function handleTextChange(e) {
        setSearchTerm(e.target.value);
    }
    
        
    
}
