import ImgPets from "../pictures/ImgPets"

export const Pets = () => {
    return (
        <div>
            {ImgPets.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='Pets'/>))}
        </div>
    );
}