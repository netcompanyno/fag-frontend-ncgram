import React from 'react';
import { Classes } from "@blueprintjs/core";
import NC_logo from '../../../../NC_Logo.jpg';

const Image = ({imgSrc, loading}) => {
    let imageSource = NC_logo;
    if (imgSrc !== "") {
        imageSource = imgSrc;
    }

    return (
        <div className={loading ? Classes.SKELETON : undefined}>
            <img src={imageSource} className="image-size" alt="logo" />
        </div>
    );
};

export default Image;
