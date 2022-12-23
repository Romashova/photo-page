import ImgLove from "../pictures/ImgLove"

export const Love = () => {
    return (
        <div>
            {ImgLove.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='LoveStory'/>))}
        </div>
    );
}