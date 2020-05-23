import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBTabPane, MDBTabContent,MDBNav,MDBNavItem,MDBNavLink,MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText } from 'mdbreact';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from "../CommonComponents/header";
import Footer from '../CommonComponents/footer'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import  { Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import './Styles/PlaceOrder.css';
import paymentLogo from '../../img/paymentlogo.jpg';
import pay from '../../img/pay.jpg';
import dislogo from '../../img/dislogo.png';
import CashOnDelivery from '../../img/Cash-On-Delivery.png'
import {Button} from "semantic-ui-react";
import { Label } from 'semantic-ui-react'
import {Form, Col} from 'react-bootstrap';
import queryString from 'query-string';
import swal from "sweetalert";

class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            email: '',
            address: '',
            address1:'',
            state:'',
            postalCode:'',
            contactNo: '',
            OrderId: '',
            TotalCost: this.props.basketProps.cartCost,
            activeItem: "",
            cardNumber: '',
            cvv: '',
            expireDate: '',
            success: false,
            deliver: '',
            activeSubmit: false,
            username:''
        }

    }

    componentDidMount() {
        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })

    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    handleFullnameChange = event => {
        this.setState({
            fullname: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }
//
    handleAddress1Change = event => {
        this.setState({
            address1: event.target.value
        })
    }

    handleState1Change = event => {
        this.setState({
            state: event.target.value
        })
    }
    handlePostalCodeChange = event => {
        this.setState({
            postalCode: event.target.value
        })
    }

    handleContactNoChange = event => {
        this.setState({
            contactNo: event.target.value
        })
    }


    handleRegisterSubmit = event => {
        event.preventDefault()
        this.sendOrderData();
        this.setState({
            success: true
        })
        swal({
            title: "You Placed The Order",
            icon: "warning",
            dangerMode: true,
        })

    }

    handleCardNumberChange = event => {
        this.setState({
            cardNumber: event.target.value
        })
    }
    handleCVVChange = event => {
        this.setState({
            cvv: event.target.value
        })
    }
    handleExpireDateChange = event => {
        this.setState({
            expireDate: event.target.value
        })
    }
    handleDeliverChange = event => {
        this.setState({
            deliver: event.target.value
        })
    }





     async sendOrderData () {
         const data ={
             fullname: this.state.fullname,
             email: this.state.email,
             address: this.state.address,
             address1: this.state.address1,
             state: this.state.state,
             postalCode: this.state.postalCode,
             contactNo: this.state.contactNo,
             OrderId: this.state.OrderId,
             TotalCost: this.state.TotalCost,
             cardNumber: this.state.cardNumber,
             cvv: this.state.cvv,
             expireDate: this.state.expireDate,
             deliver: this.state.deliver
         }
         try{
             const responce = await axios({
                 method: 'post',
                 url: 'http://localhost:5000/cart/PlaceOrder',
                 data: data,
             });
             console.log(responce);
         }catch(ex){

         }
     }


     render() {

         const {fullname, email, address, contactNo, OrderId, cardNumber,cvv,expireDate,address1,state,postalCode} =this.state

         if( this.state.success){
             return <Redirect to={'orderDetails?username='+ this.state.fullname} />
         }


         return(
         <div className='Container'>
         <Header username={this.state.username}/>

         <div className='total'>

         </div>

         <MDBContainer>
             <div className='imgheader'>
                 <MDBCardImage className="img-fluid" style={{ width: "100rem", height:"10",color:"#c62828  "}} src={pay}/>
             </div> <br/>
             <div className='mainClass'>
             <div className='myclass2'>
             <h1>Payment Info</h1>
             </div>

             <Form className='myform' onSubmit={this.handleRegisterSubmit } >
                 <div className='mycard' >
                 <Form.Row>
                     <MDBCol col='4'>
                         <MDBCard wide>
                             <MDBCardImage
                                 className='view view-cascade gradient-card-header red lighten-4'
                                 cascade
                                 tag='div'>
                                 <h2 className='h2-responsive mb-2'> Rs {this.props.basketProps.cartCost}.00 <br /> <br/>
                                     You got Rs {this.props.basketProps.getdiscount} .00 Discount <br /> <br />

                                 </h2>
                             </MDBCardImage>
                         </MDBCard>
                     </MDBCol>
                 </Form.Row>
             </div>
                 <br />
                 <br />
                 <div className='myclass2'>
                     <h3>Personal Informations</h3>
                 </div>
                 <br />

                 <Form.Row>
                     <Form.Group as={Col} controlId="formGridField1">
                         <div className="input-container">
                             <i className="fa fa-user icon fa-lg" ></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Fulll Name"
                                 value={fullname}
                                 onChange={this.handleFullnameChange}
                                 required/>
                         </div>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridPassword">
                         <div className="input-container">
                             <i className="fa fa-user-plus icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="email"
                                 placeholder="Email"
                                 id="defaultFormContactEmailEx"
                                 onChange={this.handleEmailChange}
                                 value={email}
                                 required/>
                         </div>
                     </Form.Group>
                 </Form.Row>

                 <Form.Group controlId="formGridAddress1">
                     <div className="input-container">
                         <i className="fa fa-address-book icon fa-lg"></i>
                         <input
                             className="input-field1"
                             type="text"
                             placeholder="Address line 1"
                             id="defaultFormContactSubjectEx"
                             value={address}
                             onChange={this.handleAddressChange}
                             required/>
                     </div>
                     <div className="input-container">
                         <i className="fa fa-address-book icon fa-lg"></i>
                         <input
                             className="input-field1"
                             type="text"
                             placeholder="Address line 2 (Optional)"
                             id="defaultFormContactSubjectEx"
                             value={address1}
                             onChange={this.handleAddress1Change}
                             required/>
                     </div>
                 </Form.Group>


                 <Form.Row>
                     <Form.Group as={Col} controlId="formGridField1">
                         <div className="input-container">
                             <i className="fa fa-user icon fa-lg" ></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="State / Province / Region"
                                 value={state}
                                 onChange={this.handleState1Change}
                                 required/>
                         </div>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridPassword">
                         <div className="input-container">
                             <i className="fa fa-user-plus icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Postal Code"
                                 id="defaultFormContactEmailEx"
                                 onChange={this.handlePostalCodeChange}
                                 value={postalCode}
                                 required/>
                         </div>
                     </Form.Group>
                 </Form.Row>


                 <Form.Group controlId="formGridAddress2">
                     <div className="input-container">
                         <i className="fa fa-globe icon fa-lg"></i>
                         <input
                             className="input-field1"
                             type="text"
                             placeholder="Telephone No (+94xxxxxxxxx)"
                             id="defaultFormContactSubjectEx"
                             value={contactNo}
                             onChange={this.handleContactNoChange}
                             pattern="[+]{1}[0-9]{11}"
                             required/>
                     </div>
                 </Form.Group>

                 {/*<Form.Row>*/}
                 {/*    /!*<Form.Group as={Col} controlId="formGridCity">*!/*/}
                 {/*    /!*    <Form.Label>City</Form.Label>*!/*/}
                 {/*    /!*    <Form.Control />*!/*/}
                 {/*    /!*</Form.Group>*!/*/}

                 {/*    <Form.Group as={Col} controlId="formGridState">*/}
                 {/*        /!*<Form.Label>State</Form.Label>*!/*/}
                 {/*        /!*<Form.Control as="select" value="Choose...">*!/*/}
                 {/*        /!*    <option>Choose...</option>*!/*/}
                 {/*        /!*    <option>...</option>*!/*/}
                 {/*        /!*</Form.Control>*!/*/}
                 {/*    </Form.Group>*/}

                 {/*    <Form.Group as={Col} controlId="formGridZip">*/}
                 {/*        <Form.Label>Zip</Form.Label>*/}
                 {/*        <Form.Control />*/}
                 {/*    </Form.Group>*/}
                 {/*</Form.Row>*/}

                 <Form.Group id="formAddress3">
                     <div className="input-container">
                         <i className="fa fa-cart-plus icon fa-lg"></i>
                         <input
                             className="input-field1"
                             type='static'
                             id="defaultFormContactSubjectEx"
                             className="form-control"
                             placeholder={this.props.basketProps.cartCost}/>
                     </div>
                 </Form.Group>

                 <br />

                 <div className='myclass2'>
                     <h3>Payment Details</h3>
                 </div>

                 <MDBNav className="nav-tabs mt-5">
                     <MDBNavItem>
                         <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                            <h5> Card Payment</h5>
                         </MDBNavLink>
                     </MDBNavItem>
                     <MDBNavItem>
                         <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                            <h5> Cash On Delivery</h5>
                         </MDBNavLink>
                     </MDBNavItem>
                 </MDBNav>
                 <MDBTabContent activeItem={this.state.activeItem} >
                     <MDBTabPane tabId="1" role="tabpanel">
                         <br/>
                         <br />
                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 class="input-field1"
                                 type="text"
                                 placeholder="Card Number"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleCardNumberChange}
                                 value={cardNumber}
                             />
                         </div>

                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Card Number"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleExpireDateChange}
                                 value={expireDate}
                             />
                         </div>

                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Cvv"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleCVVChange}
                                 value={cvv}
                             />
                         </div>
                     </MDBTabPane>

                     <MDBTabPane tabId="2" role="tabpane1">
                         <br/>
                         <br />
                         <div className="input-container">
                             <i className="fa fa-cart-plus icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type='static'
                                 id="defaultFormContactSubjectEx"
                                 className="form-control"
                                 placeholder="Cash On Deliver"
                                 onChange={this.handleDeliverChange}
                             />
                         </div>

                     </MDBTabPane>

                 </MDBTabContent>




                 <MDBTabContent activeItem={this.state.activeSubmit} >
                     <MDBTabPane tabId="1" role="tabpanel">
                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 class="input-field1"
                                 type="text"
                                 placeholder="Card Number"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleCardNumberChange}
                                 value={cardNumber}
                             />
                         </div>
                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Expire Date"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleExpireDateChange}
                                 value={expireDate}
                             />
                         </div>
                         <div className="input-container">
                             <i className="fa fa-credit-card icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type="text"
                                 placeholder="Cvv"
                                 id="defaultFormContactSubjectEx"
                                 onChange={this.handleCVVChange}
                                 value={cvv}
                             />
                         </div>
                     </MDBTabPane>

                     <MDBTabPane tabId="2" role="tabpane1">
                         <br/>
                         <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                             Total Amount
                         </label>
                         <div className="input-container">
                             <i className="fa fa-cart-plus icon fa-lg"></i>
                             <input
                                 className="input-field1"
                                 type='static'
                                 id="defaultFormContactSubjectEx"
                                 className="form-control"
                                 placeholder="Cash On Deliver"
                                 onChange={this.handleDeliverChange}
                             />
                         </div>
                     </MDBTabPane>
                 </MDBTabContent>


                 <div className="myclass1 mt-4">
                     <Button type="button" className="btn1" type="submit"  >Confirm Payment</Button>
                 </div>
             </Form>

             </div>
         </MDBContainer>



             <Footer />

         </div>


)}
}

const mapStateToPropss = state => ({
    basketProps : state.basketState,
    placeOrderProps: state.PlaceOrderState
})

export default connect(mapStateToPropss)(PlaceOrder);





