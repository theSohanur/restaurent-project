import React from 'react'
import {Card, CardImg,  CardBody, CardTitle,CardText } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop:"20px"}}>
                <CardImg top src={props.dish.image} />
                <CardBody style={{textAlign:"left"}} >
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>

                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail

