import ImgChildren from "../pictures/ImgChildren"

export const Kids = () => {
    return (
        <div>
            {ImgChildren.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='Children'/>))}
        </div>
    );
}