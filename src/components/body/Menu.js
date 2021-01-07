import React, { Component } from 'react'
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


export class Menu extends Component {

    state = {
        dishes: DISHES,
        selectedDish:null,
        modalOpen : false
    }


    onDishSelect = dish =>{
        // console.log(dish);
        this.setState({
            selectedDish:dish,
            modalOpen: !this.state.modalOpen
        })
    }

    toggleModal = () => {
        this.setState ({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const menu = this.state.dishes.map(item => {
            return(
                <MenuItem dish={item} key={item.id} DishSelect={()=>this.onDishSelect(item)} />
            )
        })

        let dishDetail = null;

        if(this.state.selectedDish != null){
            dishDetail = <DishDetail dish ={this.state.selectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu
