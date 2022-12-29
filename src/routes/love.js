import ImgLove from "../pictures/ImgLove"
import {ImageItem} from "../components/ImageItem/ImageItem";
import "./style.css"

export const Love = () => {
    return (
        <div className="image-list">
            {ImgLove.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"LoveStory"}/>))}
        </div>
    );
}