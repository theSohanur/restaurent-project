import React, { Component } from 'react'
// import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="container-fluid bg">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="jumbotron min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                            <h1 className="display-4">Welcome!!! To visit Our Reataurent.</h1>
                            <p className="lead">This is a full-screen centered hero unit.</p>
                            <p className="lead">
                                <Link className="btn btn-primary btn-lg mx-2" to='/menu' role="button">Show Menu</Link>
                                <Link className="btn btn-danger btn-lg mx-2" to='/contact' role="button">Contact Us</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
