import React, { useState, useEffect } from "react"

import "./Slider.css"

import slide1 from "../../assets/images/GIRLS/STUDIO/1.jpg"
import slide2 from "../../assets/images/GIRLS/STUDIO/5.jpg"
import slide3 from "../../assets/images/GIRLS/STUDIO/25.jpg"
import slide4 from "../../assets/images/GIRLS/STUDIO/30.jpg"
import slide5 from "../../assets/images/GIRLS/STUDIO/32.jpg"


const img = [
    <img className="img" key={slide1} src={slide1} />,
    <img className="img" key={slide2} src={slide2} />,
    <img className="img" key={slide3} src={slide3} />,
    <img className="img" key={slide4} src={slide4} />,
    <img className="img" key={slide5} src={slide5} />,
]

export function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    // hook Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 4000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    )

}