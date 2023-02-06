//Search Box
// Gallery
import { useState } from 'react';
import Gallery from "./Gallery";
import SearchBox from './SearchBox';
import Image from './Image';

import ImageCard from './ImageCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
export default function Container () {
    const [primaryImageUrl,setPrimaryImageUrl] = useState('img-1.png');
    const [imageTitle,setImageTitle] = useState('an astronaut riding a horse in a photo realistic style');

       
    return (
        
        <div>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                <h2>Text to Picture</h2>
                    <Stack gap={3}>
                        <SearchBox setPrimaryImageUrl={setPrimaryImageUrl} setImageTitle={setImageTitle}/>
                        <ImageCard url={primaryImageUrl} title={imageTitle}/>
                    </Stack>
                </Col>

                
   
            </Row>
            
            
            
            
        </div>
    )
}