import ImgChildren from "../pictures/ImgChildren"
import {ImageItem} from "../components/ImageItem/ImageItem";
import "./style.css"

export const Kids = () => {
    return (
        <div className="image-list">
            {ImgChildren.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Children"}/>))}
        </div>
    );
}