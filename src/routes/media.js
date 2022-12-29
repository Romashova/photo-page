import ImgMedia from "../pictures/ImgMedia"
import {ImageItem} from "../components/ImageItem/ImageItem";
import "./style.css"

export const Media = () => {
    return (
        <div className="image-list">
            {ImgMedia.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Media"}/>))}
        </div>
    );
}