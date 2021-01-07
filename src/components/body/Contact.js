import React, { Component } from 'react';
import { Button, Form, FormGroup, Label , Input, Col } from 'reactstrap';


class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"Tel.",
            Message:"",

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 mt-4">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='firstname' placeholder='First Name' value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='Lasttname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastname' placeholder='Last Name' value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='text' name='telnum' placeholder='Tel. Number' value={this.state.telnum} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>E-mail</Label>
                                <Col md={10}>
                                    <Input type='text' name='email' placeholder='Email' value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            />
                                            <strong>May we contact you?
                                            </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        value={this.state.message}
                                        rows="12"
                                        onChange={this.handleInputChange}
                                    >

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
