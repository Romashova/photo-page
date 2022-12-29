import ImgReportage from "../pictures/ImgReportage"
import {ImageItem} from "../components/ImageItem/ImageItem";
import "./style.css"

export const Reportage = () => {
    return (
        <div className="image-list">
            {ImgReportage.map(imgSrc => (<ImageItem imgSrc={imgSrc} alt={"Pets"}/>))}
        </div>
    );
}