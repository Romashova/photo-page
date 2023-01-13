import ImgGirls from "../pictures/ImgGirls"
import { ImageItem } from "../components/ImageItem/ImageItem";
import "./style.css";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import Likes from "../components/Likes";

export const Girls = () => {
    return (
        <div className="slide-container">
            <Fade>
                {ImgGirls.map((imgSrc) => (
                    <div className="each-fade" key={imgSrc}>
                        <div className="image-item">
                            <img key={imgSrc} src={imgSrc} height="300" alt={"Girls"} /><Likes imgSrc={imgSrc} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

// <div className='image-item'><img key={imgSrc} src={imgSrc} height="300" alt={alt} /><Likes imgSrc={imgSrc}/></div>

// return (
//     <div className="image-list">
//         {ImgGirls.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Girls"}/>))}
//     </div>
// );