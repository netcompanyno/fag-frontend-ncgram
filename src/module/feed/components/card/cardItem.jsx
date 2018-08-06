import React from 'react';
import { Button, Card, Elevation} from "@blueprintjs/core";
import Image from "../image/image";
import LikeHeart from "../likeHeart/likeHeart";

const CardItem = ({id, title, description, imgSrc, fetchData}) => (
          <Card i={id} className="card"  interactive={true} elevation={Elevation.TWO}>
            <h2><b>{title}</b></h2>
            <Image imgSrc={imgSrc}/>
            <h4>{description}</h4>
            <LikeHeart />
            <Button intent="primary" onClick={fetchData} text="Click Me!" />
        </Card>
);

export default CardItem;
