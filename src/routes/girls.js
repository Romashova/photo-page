import ImgGirls from "../pictures/ImgGirls"
import './ImgGirls.css';

export const Girls = () => {
    return (
        <div className="ImgGirls">
            {ImgGirls.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='GIRLS'/>))}
        </div>
    );
}