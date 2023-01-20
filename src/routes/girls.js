import ImgGirls from "../pictures/ImgGirls"
import { ImageItem } from "../components/ImageItem/ImageItem";
import "./style.css";
import 'react-slideshow-image/dist/styles.css';

export const Girls = () => {
    return (
        <div className="image-list">
            {ImgGirls.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"ImgGirls"}/>))}
        </div>
    );
}