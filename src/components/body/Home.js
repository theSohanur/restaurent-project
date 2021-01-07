import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Welcome!</h1>
                    <p className="lead">To visit out Restaurent website</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Link to='/menu' className="btn btn-danger">Show Menu</Link>
                    </p>
                </Jumbotron>
            </div>

        )
    }
}

export default Home
