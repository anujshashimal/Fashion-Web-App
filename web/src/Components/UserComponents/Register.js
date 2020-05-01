import React, {Component} from 'react';
import './LoginRegister.css';
import back from './shop2.gif'
import logo from './logo.gif'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const axios = require('axios');

export default class header extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             email: '',
             contactno: '',
             address: '',
             password: '',
             conformpassword: '',
             gender: '',
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleContactNoChange = event => {
        this.setState({
            contactno: event.target.value
        })
    }

    handleAddressChange = event => {
        this.setState({
            address: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleConformPasswordChange = event => {
        this.setState({
            conformpassword: event.target.value
        })
    }

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handleRegisterSubmit = event => {
        event.preventDefault();
        if(this.state.password !== this.state.conformpassword){
            // alert("Conforn Password not match");
            NotificationManager.error('pleace correct', 'Confirm Password not matched');
            return false;
        }
        // console.log(this.state.username);
        // console.log(this.state.email);
        // console.log(this.state.contactno);
        // console.log(this.state.address);
        // console.log(this.state.password);
        // console.log(this.state.conformpassword);
        // console.log(this.state.gender);
        this.sendData();

        this.setState({
        username:'',
        email:'',
        contactno:'',
        address:'',
        password:'',
        conformpassword:'',
        gender:'',
    })
    }

    async sendData () {
        const data ={
            username: this.state.username,
            email: this.state.email,
            contactno: this.state.contactno,
            address: this.state.address,
            password: this.state.password,
            gender: this.state.gender
        }
        try{
            const responce = await axios({
                method: 'post',
                url: 'http://localhost:5000/user/add',
                data: data,
              });
              console.log(responce);
        }catch(ex){

        }
    }
    
    render() {
        const {username, email, contactno, address, password, conformpassword, gender} =this.state
        return(
            <div class="container" >
                <div class="raw">
                    <div className="rowalign">
                        <div class="col-md-6"><br/>
                            <p align="center">
                            <img src={logo} width="50%" />
                            </p>
                            {/* <img src={back} width="100%"/> */}
                        </div>

                        <div class="col-md-5">
                            <div className="centeralign">
                                <br />

                                <form onSubmit={this.handleRegisterSubmit}>
                                    <h2 align="center">
                                        <i class="fa fa-user-plus icon"></i> User Register
                                    </h2>

                                    <div class="input-container">
                                        <i class="fa fa-user icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="text" 
                                        placeholder="Username" 
                                        value={username}
                                        onChange={this.handleUsernameChange}
                                        required />
                                    </div>

                                    <div class="input-container">
                                        <i class="fa fa-envelope icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={email}
                                        onChange={this.handleEmailChange}
                                        required />
                                    </div>
            
                                    <div class="input-container">
                                        <i class="fa fa-phone icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="text" 
                                        placeholder="Telephone No" 
                                        value={contactno}
                                        onChange={this.handleContactNoChange}
                                        maxlength="10" 
                                        required 
                                        pattern="[0]{1}[0-9]{9}" />
                                    </div>
            
                                    <div class="input-container">
                                        <i class="fa fa-map-marker icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="text" 
                                        placeholder="Address" 
                                        value={address}
                                        onChange={this.handleAddressChange}
                                        required />
                                    </div>
            
                                    <div class="input-container">
                                        <i class="fa fa-key icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={this.handlePasswordChange}
                                        required />
                                    </div>
            
                                    <div class="input-container">
                                        <i class="fa fa-key icon fa-lg"></i>
                                        <input 
                                        class="input-field1" 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        value={conformpassword}
                                        onChange={this.handleConformPasswordChange}
                                        required />
                                    </div>
            
                                    {/* <p id="demo"></p> */}
            
                                    <div class="radio-container">
                                        <i class="fa fa-male icon fa-lg"></i> &nbsp;&nbsp;
                                        <input class="with-gap" 
                                        type="radio" 
                                        value="male" 
                                        name="gender" 
                                        checked={gender === 'male'}
                                        onChange={this.handleGenderChange}
                                        required />
                            
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                                        <i class="fa fa-female icon fa-lg"></i> &nbsp;&nbsp;
                                        <input 
                                        class="with-gap" 
                                        type="radio" 
                                        value="female" 
                                        name="gender"
                                        checked={gender === 'female'}
                                        onChange={this.handleGenderChange}
                                        required />
                                    </div>
                                    <br/>
                                    <button 
                                    type="submit" 
                                    class="btn1" 
                                    onclick="javascript: return myFunction();">Register</button>
                                </form>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
