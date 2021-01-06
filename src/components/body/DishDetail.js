import React from 'react'
import {Card, CardImg,  CardBody, CardTitle,CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop:"20px"}}>
                <CardImg top src={props.dish.image} />
                <CardBody style={{textAlign:"left"}} >
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                        </CardText>
                        <CardText>
                        {props.dish.price}/-

                    </CardText>
                    <hr/>
                    <h4 style={{borderBottom:"1px solid #ddd"}}>Recent Comments</h4>
                    <LoadComments comments={props.dish.comments}/>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail

