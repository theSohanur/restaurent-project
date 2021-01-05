import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card style = {{margin:"10px"}}>
                <CardBody>
                    <CardImg width="100%" alt ={props.dish.name} src = {props.dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle className="lead" style= {{cursor:"pointer",display:"block",padding:"10px 15px",backgroundColor:"rgba(255,255,255,.6)"}} onClick={props.DishSelect} >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem
