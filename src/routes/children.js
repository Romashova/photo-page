import ImgChildren from "../pictures/ImgChildren"
import Likes from '../components/Likes';

export const Kids = () => {
    return (
        <div>
            {ImgChildren.map(imgSrc => (<div><img key={imgSrc} src={imgSrc} height="300" alt='Children' /><Likes /></div>))}
        </div>
    );
}