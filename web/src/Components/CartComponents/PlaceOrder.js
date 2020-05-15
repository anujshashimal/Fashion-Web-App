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
import CashOnDelivery from '../../img/Cash-On-Delivery.png'
import {Button} from "semantic-ui-react";
import { Label } from 'semantic-ui-react'
import {Form, Col} from 'react-bootstrap';

class PlaceOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            email: '',
            address: '',
            contactNo: '',
            OrderId: '',
            TotalCost: this.props.basketProps.cartCost,
            activeItem: "",
            cardNumber: '',
            cvv: '',
            expireDate: '',
            success: false,
            deliver: ''

        }

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

         const {fullname, email, address, contactNo, OrderId, cardNumber,cvv,expireDate} =this.state

         if( this.state.success){
             return <Redirect to={'orderDetails?username='+ this.state.fullname} />
         }


         return(
         <div className='Container'>
         <Header />

         <div className='total'>
             <MDBCol>

             </MDBCol>

         </div>
             {/*<div className='total1'>*/}
             {/*    <MDBCol>*/}
             {/*        <MDBCard style={{ width: "26rem" }}>*/}
             {/*            <MDBCardImage className="img-fluid" src={CashOnDelivery}  />*/}
             {/*            <MDBCardBody>*/}
             {/*                <MDBCardTitle>Now We Are Avaliable On Cash On Dilevery</MDBCardTitle>*/}
             {/*            </MDBCardBody>*/}
             {/*        </MDBCard>*/}
             {/*    </MDBCol>*/}
             {/*</div>*/}

         <MDBContainer>
             {/*<MDBRow>*/}
             {/*   <MDBCol md="6">*/}
                    {/*<form className='myform' onSubmit={this.handleRegisterSubmit} >*/}
                    {/*    <p className="h4 text-center mb-4">Add Order Details</p>*/}
                    {/*    <label htmlFor="defaultFormContactNameEx" className="grey-text">*/}
                    {/*        Full Name*/}
                    {/*    </label>*/}
                    {/*    <div className="input-container">*/}
                    {/*        <i className="fa fa-user icon fa-lg"></i>*/}
                    {/*    <input*/}
                    {/*        class="input-field1"*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Fulll Name"*/}
                    {/*        value={fullname}*/}
                    {/*        onChange={this.handleFullnameChange}*/}
                    {/*        required/>*/}
                    {/*    </div>*/}
                    {/*    <br />*/}
                    {/*    <label htmlFor="defaultFormContactEmailEx" className="grey-text">*/}
                    {/*        Your email*/}
                    {/*    </label>*/}

                    {/*    <div className="input-container">*/}
                    {/*        <i className="fa fa-user-plus icon fa-lg"></i>*/}
                    {/*    <input*/}
                    {/*        class="input-field1"*/}
                    {/*        type="email"*/}
                    {/*        placeholder="Email"*/}
                    {/*        id="defaultFormContactEmailEx"*/}
                    {/*        value={email}*/}
                    {/*        required/>*/}
                    {/*    </div>*/}
                    {/*    <br />*/}

                    {/*    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">*/}
                    {/*        Address*/}
                    {/*    </label>*/}

                    {/*    <div className="input-container">*/}
                    {/*        <i className="fa fa-address-book icon fa-lg"></i>*/}
                    {/*    <input*/}
                    {/*        class="input-field1"*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Address"*/}
                    {/*        id="defaultFormContactSubjectEx"*/}
                    {/*        value={address}*/}
                    {/*        onChange={ this.handleAddressChange}*/}
                    {/*        required/>*/}
                    {/*    </div>*/}
                    {/*    <br />*/}
                    {/*    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">*/}
                    {/*        Contact No*/}
                    {/*    </label>*/}
                    {/*    <div className="input-container">*/}
                    {/*        <i className="fa fa-phone icon fa-lg"></i>*/}
                    {/*    <input*/}
                    {/*        class="input-field1"*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Contact No"*/}
                    {/*        id="defaultFormContactSubjectEx"*/}
                    {/*        value={contactNo}*/}
                    {/*        onChange={ this.handleContactNoChange}*/}
                    {/*        required/>*/}
                    {/*    </div>*/}
                    {/*    <br />*/}
                    {/*    /!*<label htmlFor="defaultFormContactMessageEx" className="grey-text">*!/*/}
                    {/*    /!*    Order ID*!/*/}
                    {/*    /!*</label>*!/*/}
                    {/*    /!*<input*!/*/}
                    {/*    /!*    type='text'*!/*/}
                    {/*    /!*    id="defaultFormContactSubjectEx"*!/*/}
                    {/*    /!*    className="form-control"*!/*/}
                    {/*    /!*    value={OrderId}*!/*/}
                    {/*    /!*    onChange={this.handleOrderIDNoChange}*!/*/}
                    {/*    /!*    required/>*!/*/}
                    {/*    <br />*/}
                    {/*    <label htmlFor="defaultFormContactMessageEx" className="grey-text">*/}
                    {/*        Total Amount*/}
                    {/*    </label>*/}
                    {/*    <div className="input-container">*/}
                    {/*        <i className="fa fa-cart-plus icon fa-lg"></i>*/}
                    {/*    <input*/}
                    {/*        class="input-field1"*/}
                    {/*        type='static'*/}
                    {/*        id="defaultFormContactSubjectEx"*/}
                    {/*        className="form-control"*/}
                    {/*        placeholder={ this.props.basketProps.cartCost} />*/}
                    {/*    </div>*/}
                    {/*    <MDBNav className="nav-tabs mt-5">*/}
                    {/*        <MDBNavItem>*/}
                    {/*            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >*/}
                    {/*                Card Payment*/}
                    {/*            </MDBNavLink>*/}
                    {/*        </MDBNavItem>*/}
                    {/*        <MDBNavItem>*/}
                    {/*            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >*/}
                    {/*                Cash On Delivery*/}
                    {/*            </MDBNavLink>*/}
                    {/*        </MDBNavItem>*/}
                    {/*    </MDBNav>*/}
                    {/*    <MDBTabContent activeItem={this.state.activeItem} >*/}
                    {/*        <MDBTabPane tabId="1" role="tabpanel">*/}
                    {/*            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">*/}
                    {/*                Card Number*/}
                    {/*            </label>*/}

                    {/*            <div className="input-container">*/}
                    {/*                <i className="fa fa-credit-card icon fa-lg"></i>*/}
                    {/*            <input*/}
                    {/*                class="input-field1"*/}
                    {/*                type="text"*/}
                    {/*                placeholder="Card Number"*/}
                    {/*                id="defaultFormContactSubjectEx"*/}
                    {/*                onChange={this.handleCardNumberChange}*/}
                    {/*                value={cardNumber}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <br />*/}

                    {/*            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">*/}
                    {/*                CVV*/}
                    {/*            </label>*/}

                    {/*            <div className="input-container">*/}
                    {/*                <i className="fa fa-credit-card icon fa-lg"></i>*/}
                    {/*            <input*/}
                    {/*                class="input-field1"*/}
                    {/*                type="text"*/}
                    {/*                placeholder="CVV"*/}
                    {/*                id="defaultFormContactSubjectEx"*/}
                    {/*                onChange={this.handleCVVChange}*/}
                    {/*                value={cvv}*/}
                    {/*                />*/}
                    {/*            </div>*/}

                    {/*            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">*/}
                    {/*                Expire Date*/}
                    {/*            </label>*/}

                    {/*            <div className="input-container">*/}
                    {/*                <i className="fa fa-calendar icon fa-lg"></i>*/}
                    {/*            <input*/}
                    {/*                class="input-field1"*/}
                    {/*                type="date"*/}
                    {/*                id="defaultFormContactSubjectEx"*/}
                    {/*                onChange={this.handleExpireDateChange}*/}
                    {/*                value={expireDate}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*                <br />*/}
                    {/*        </MDBTabPane>*/}

                    {/*        <MDBTabPane tabId="2" role="tabpane1">*/}
                    {/*            <br/>*/}
                    {/*            <label htmlFor="defaultFormContactMessageEx" className="grey-text">*/}
                    {/*                Total Amount*/}
                    {/*            </label>*/}
                    {/*            <div className="input-container">*/}
                    {/*                <i className="fa fa-cart-plus icon fa-lg"></i>*/}
                    {/*                <input*/}
                    {/*                    className="input-field1"*/}
                    {/*                    type='static'*/}
                    {/*                    id="defaultFormContactSubjectEx"*/}
                    {/*                    className="form-control"*/}
                    {/*                    placeholder="Cash On Deliver  "*/}
                    {/*                    onChange={this.handleDeliverChange}*/}
                    {/*                />*/}
                    {/*            </div>*/}

                    {/*        </MDBTabPane>*/}

                    {/*    </MDBTabContent>*/}

                        {/*<div className="text-center mt-4">*/}
                        {/*    <Button type="button" className="btn btn-secondary" type="submit" >*/}
                        {/*        Send*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    {/*</form>*/}
            {/*    </MDBCol>*/}
            {/*</MDBRow>*/}

             <Form className='myform' onSubmit={this.handleRegisterSubmit}>
                 <Form.Row>
                     <Form.Group as={Col} controlId="formGridEmail">
                         <MDBCard style={{ width: "26rem" }}>
                            <MDBCardImage className="img-fluid" src={paymentLogo}  />
                                <MDBCardBody>
                                    <MDBCardTitle>Total Amount You Have To Pay :</MDBCardTitle>
                                    <MDBCardTitle>
                                        Rs {this.props.basketProps.cartCost}.00
                                    </MDBCardTitle>
                                </MDBCardBody>
                         </MDBCard>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridEmail">
                         <MDBCard style={{ width: "26rem" }}>
                                <MDBCardBody>
                                 <MDBCardTitle>
                                     You got {this.props.basketProps.getdiscount} Discount <br /> <br />
                                     You got {this.props.basketProps.getdiscount} Discount <br /> <br />
                                 </MDBCardTitle>
                             </MDBCardBody>
                         </MDBCard>
                     </Form.Group>
                 </Form.Row>

                 <br />
                 <br />
                 <br />

                 <Form.Row>
                     <Form.Group as={Col} controlId="formGridEmail">
                         <div className="input-container">
                             <i className="fa fa-user icon fa-lg"></i>
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
                             placeholder="Address"
                             id="defaultFormContactSubjectEx"
                             value={address}
                             onChange={this.handleAddressChange}
                             required/>
                     </div>
                 </Form.Group>

                 <Form.Group controlId="formGridAddress2">
                     <div className="input-container">
                         <i className="fa fa-phone icon fa-lg"></i>
                         <input
                             className="input-field1"
                             type="text"
                             placeholder="Contact No"
                             id="defaultFormContactSubjectEx"
                             value={contactNo}
                             onChange={this.handleContactNoChange}
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

                 <div className="text-center mt-4">
                     <Button type="button" className="btn btn-secondary" type="submit" >Send</Button>
                 </div>
             </Form>


         </MDBContainer>



             <Footer />

         </div>


)}
}

const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(PlaceOrder);





