import ImgPets from "../pictures/ImgPets"
import {ImageItem} from "../components/ImageItem/ImageItem";
import "./style.css"

export const Pets = () => {
    return (
        <div className="image-list">
            {ImgPets.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Pets"}/>))}
        </div>
    );
}