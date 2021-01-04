import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg width="50%" alt ={props.dish.name} src = {props.dish.image} style={{opacity:0.7}} ></CardImg>
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem
