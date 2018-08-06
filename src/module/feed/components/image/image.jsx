import React from 'react';
import logo from '../../../../logo.svg';

const Image = (imgSrc) => {
    let imageSource = logo;
    if (imgSrc.imgSrc !== "") {
        imageSource = imgSrc.imgSrc;
    }

    console.log(imageSource)

    return (
        <div>
            <img src={imageSource} className="image-size" alt="logo" />
        </div>
    );
}

export default Image;
