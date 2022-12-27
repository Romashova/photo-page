import ImgGirls from "../pictures/ImgGirls"
import Likes from '../components/Likes';

export const Girls = () => {
    return (
        <div >
            {ImgGirls.map(imgSrc => (<><img key={imgSrc} src={imgSrc} height="300" alt='GIRLS'/><Likes /></>))}
        </div>
    );
}