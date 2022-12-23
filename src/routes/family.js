import ImgFamily from "../pictures/ImgFamily"

export const Family = () => {
    return (
        <div>

            {ImgFamily.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='Family' />))}
        </div>
    );
}