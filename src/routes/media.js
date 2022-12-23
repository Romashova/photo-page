import ImgMedia from "../pictures/ImgMedia"

export const Media = () => {
    return (
        <div>
            {ImgMedia.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='Media'/>))}
        </div>
    );
}