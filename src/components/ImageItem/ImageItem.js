import React from 'react';
import Likes from '../Likes';
import "./ImageItem.css"

export const ImageItem=({imgSrc, alt})=>{
    return (
        <div className='image-item'><img key={imgSrc} src={imgSrc} height="300" alt={alt} /><Likes /></div>
    )
}