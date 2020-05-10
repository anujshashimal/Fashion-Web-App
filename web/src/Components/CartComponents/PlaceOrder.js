import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBTabPane, MDBTabContent,MDBNav,MDBNavItem,MDBNavLink } from 'mdbreact';
import axios from 'axios'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import  { Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

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
             expireDate: ''

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

     handleOrderIDNoChange = event => {
         this.setState({
             OrderId: event.target.value
         })
     }


     handleRegisterSubmit = event => {
            event.preventDefault()
            this.sendOrderData();
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

     return(
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form onClick={this.handleRegisterSubmit}>
                        <p className="h4 text-center mb-4">Add Order Details</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="defaultFormContactNameEx"
                            className="form-control"
                            value={fullname}
                            onChange={this.handleFullnameChange}
                            required/>
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="defaultFormContactEmailEx"
                            className="form-control"
                            value={email}
                            onChange={this.handleEmailChange}
                            required/>
                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Address
                        </label>
                        <input
                            type="text"
                            id="defaultFormContactSubjectEx"
                            className="form-control"
                            value={address}
                            onChange={this.handleAddressChange}
                            required/>

                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Contact No
                        </label>
                        <input
                            type="text"
                            id="defaultFormContactSubjectEx"
                            className="form-control"
                            value={contactNo}
                            onChange={this.handleContactNoChange}
                            required/>
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
                        <input
                            type='static'
                            id="defaultFormContactSubjectEx"
                            className="form-control"
                            placeholder={this.props.basketProps.cartCost} />

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
                                <input
                                    type="text"
                                    id="defaultFormContactSubjectEx"
                                    className="form-control"
                                    onChange={this.handleCardNumberChange}
                                    value={cardNumber}
                                    required/>
                                <br />

                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormContactSubjectEx"
                                    className="form-control"
                                    onChange={this.handleCVVChange}
                                    value={cvv}
                                    required/>

                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Expire Date
                                </label>
                                <input
                                    type="date"
                                    id="defaultFormContactSubjectEx"
                                    className="form-control"
                                    onChange={this.handleExpireDateChange}
                                    value={expireDate}
                                    required/>
                                    <br />
                            </MDBTabPane>


                        </MDBTabContent>

                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

)}
}

const mapStateToPropss = state => ({
    basketProps : state.basketState
})

export default connect(mapStateToPropss)(PlaceOrder);





