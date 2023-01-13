import ImgFamily from "../pictures/ImgFamily"
import { ImageItem } from "../components/ImageItem/ImageItem";
import "./style.css"

export const Family = () => {
    return (
        <div className="image-list">
            {ImgFamily.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Family"} />))}
        </div>
    );
}