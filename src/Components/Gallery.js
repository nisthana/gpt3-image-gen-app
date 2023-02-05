//Image
import Image from './Image';
export default function Gallery ({images}){
  
    return (
        <div>
       <ul>
        {images.map(image => (
            <li><Image url={image.src} title='alt'/></li>
        ))}
        </ul>
        </div>
    );
}