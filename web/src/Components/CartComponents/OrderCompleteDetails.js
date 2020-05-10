import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import axios from 'axios';
import {Link} from 'react-router-dom';
const queryString = require('query-string');

class OrderCompleteDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            UserDetails:[],
            OrderID: '',
            Name: '',
            Address:'',
        }
    }
    componentDidMount() {
        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values)
        console.log(values.username)
        const response = axios({
            method: 'get',
            url: 'http://localhost:5000/cart/findUserOrder/' + values.username,
        }).then(response=>{
            this.setState({
                UserDetails :  response.data.map(product=>product),
            })
        });
        console.log(this.state.UserDetails)
    }

render() {

    return (
<div>

    {this.state.UserDetails.map( val => (
                            <div className="container" style={{textAlign: "center"}}>
                                <h1> ORDER DETAILS </h1>
                                <div className="row">
                                    <div className="col-md" style={{textAlign: "left"}}>
                                        <label htmlFor="exampleDisabled" className="disabled">FULL NAME:</label>
                                        <input type="text" id="exampleDisabled" className="form-control" placeholder={val.fullname} disabled />
                                        <br />

                                        <label htmlFor="exampleDisabled" className="disabled">ADDRESS:</label>
                                        <input type="text" id="exampleDisabled" className="form-control" placeholder={val.address} disabled />
                                        <br />

                                        <label htmlFor="exampleDisabled" className="disabled">TOTAL COST:</label>
                                        <input type="text" id="exampleDisabled" className="form-control" placeholder={val.TotalCost} disabled />
                                        <br />

                                        <label htmlFor="exampleDisabled" className="disabled">ORDER ID:</label>
                                        <input type="text" id="exampleDisabled" className="form-control" placeholder={val.OrderId} disabled />
                                        <br />
                                        <Link to={"/ViewProduct"} type ='button'> Back To Home  </Link>
                                    </div>
                                </div>
                            </div>

                        )

                    )}
</div>

    );
}
};

export default OrderCompleteDetails;