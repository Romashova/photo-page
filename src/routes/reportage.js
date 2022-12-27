import ImgReportage from "../pictures/ImgReportage"

export const Reportage = () => {
    return (
        <div className="Img">
            {ImgReportage.map(imgSrc => (<img key={imgSrc} src={imgSrc} height="300" alt='Reportage'/>))}
        </div>
    );
}