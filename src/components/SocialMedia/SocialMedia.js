import React from "react";
import './SocialMedia.css';

export const SocialMedia = () => {
    return (
    <div className="field">
        <a className="field-link-container" href="https://vk.com/venevi" target="_blank" rel="noreferrer">
            <img src="https://w7.pngwing.com/pngs/157/634/png-transparent-black-white-circle-high-quality-long-shadow-social-social-media-vk-social-media-black-white-icon.png" alt="vk"/>
        </a>
        <a className="field-link-container" href="https://t.me/iaromash" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/1200px-Telegram_X_2019_Logo.svg.png" alt="telegram"/>
        </a>
        <a className="field-link-container" href="https://www.instagram.com/iaph_nn/?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
            <img src="https://phonoteka.org/uploads/posts/2021-04/1619706233_12-phonoteka_org-p-znachok-instagram-bez-fona-dlya-fotoshopa-12.png" alt="instagram"/>
        </a>
    </div>
    );
};
