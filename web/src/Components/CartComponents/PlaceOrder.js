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
             activeItem: "1",
             cardNumber:'',
             cvv: '',
             expireDate: '',
             success: false

         }
         console.log(props);

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
             expireDate: this.state.expireDate
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
         <div>
         <Header />
         <div className='total'>
             <MDBCol>
                 <MDBCard style={{ width: "26rem" }}>
                     <MDBCardImage className="img-fluid" src={paymentLogo}  />
                     <MDBCardBody>
                         <MDBCardTitle>Total Amount You Have To Pay :</MDBCardTitle>
                         <MDBCardTitle>
                             Rs {this.props.basketProps.cartCost}.00
                         </MDBCardTitle>
                     </MDBCardBody>
                 </MDBCard>
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
             <MDBRow>
                <MDBCol md="6">
                    <form className='myform' onSubmit={this.handleRegisterSubmit} >
                        <p className="h4 text-center mb-4">Add Order Details</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Full Name
                        </label>
                        <div className="input-container">
                            <i className="fa fa-user icon fa-lg"></i>
                        <input
                            class="input-field1"
                            type="text"
                            placeholder="Fulll Name"
                            value={fullname}
                            onChange={this.handleFullnameChange}
                            required/>
                        </div>
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email
                        </label>

                        <div className="input-container">
                            <i className="fa fa-user-plus icon fa-lg"></i>
                        <input
                            class="input-field1"
                            type="email"
                            placeholder="Email"
                            id="defaultFormContactEmailEx"
                            value={email}
                            onChange={ this.handleEmailChange}
                            required/>
                        </div>
                        <br />

                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Address
                        </label>

                        <div className="input-container">
                            <i className="fa fa-address-book icon fa-lg"></i>
                        <input
                            class="input-field1"
                            type="text"
                            placeholder="Address"
                            id="defaultFormContactSubjectEx"
                            value={address}
                            onChange={ this.handleAddressChange}
                            required/>
                        </div>
                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Contact No
                        </label>
                        <div className="input-container">
                            <i className="fa fa-phone icon fa-lg"></i>
                        <input
                            class="input-field1"
                            type="text"
                            placeholder="Contact No"
                            id="defaultFormContactSubjectEx"
                            value={contactNo}
                            onChange={ this.handleContactNoChange}
                            required/>
                        </div>
                        <br />
                        {/*<label htmlFor="defaultFormContactMessageEx" className="grey-text">*/}
                        {/*    Order ID*/}
                        {/*</label>*/}
                        {/*<input*/}
                        {/*    type='text'*/}
                        {/*    id="defaultFormContactSubjectEx"*/}
                        {/*    className="form-control"*/}
                        {/*    value={OrderId}*/}
                        {/*    onChange={this.handleOrderIDNoChange}*/}
                        {/*    required/>*/}
                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                            Total Amount
                        </label>
                        <div className="input-container">
                            <i className="fa fa-cart-plus icon fa-lg"></i>
                        <input
                            class="input-field1"
                            type='static'
                            id="defaultFormContactSubjectEx"
                            className="form-control"
                            placeholder={ this.props.basketProps.cartCost} />
                        </div>
                        <MDBNav className="nav-tabs mt-5">
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                    Card Payment
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                    Cash On Delivery
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.activeItem} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Card Number
                                </label>

                                <div className="input-container">
                                    <i className="fa fa-credit-card icon fa-lg"></i>
                                <input
                                    class="input-field1"
                                    type="text"
                                    placeholder="Card Number"
                                    id="defaultFormContactSubjectEx"
                                    onChange={this.handleCardNumberChange}
                                    value={cardNumber}
                                    required/>
                                </div>
                                <br />

                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    CVV
                                </label>

                                <div className="input-container">
                                    <i className="fa fa-credit-card icon fa-lg"></i>
                                <input
                                    class="input-field1"
                                    type="text"
                                    placeholder="CVV"
                                    id="defaultFormContactSubjectEx"
                                    onChange={this.handleCVVChange}
                                    value={cvv}
                                    required/>
                                </div>

                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Expire Date
                                </label>

                                <div className="input-container">
                                    <i className="fa fa-calendar icon fa-lg"></i>
                                <input
                                    class="input-field1"
                                    type="date"
                                    id="defaultFormContactSubjectEx"
                                    onChange={this.handleExpireDateChange}
                                    value={expireDate}
                                    required/>
                                </div>
                                    <br />
                            </MDBTabPane>


                        </MDBTabContent>

                        <div className="text-center mt-4">
                            <Button type="button" className="btn btn-secondary" type="submit" >
                                Send
                            </Button>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>

         </MDBContainer>
             <Footer />

         </div>

)}
}

const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(PlaceOrder);





