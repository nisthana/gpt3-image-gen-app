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
import { Container } from 'react-bootstrap';
export default function MyContainer () {
    const [primaryImageUrl,setPrimaryImageUrl] = useState('photo-realistic.png');
    const [imageTitle,setImageTitle] = useState('an astronaut riding a horse');

       
    return (
        
            <>
            <Stack gap={"3"}>
            <Row >
                <Col lg="2"/>
                <Col lg="8">
                    <SearchBox setPrimaryImageUrl={setPrimaryImageUrl} setImageTitle={setImageTitle}/>
                </Col>
                <Col lg="2"/>
            </Row>
            
            <Row>
                <Col>
                <ImageCard url={primaryImageUrl} title={imageTitle}/>
                </Col>
            </Row>
            </Stack>
            </>
            
    )
}