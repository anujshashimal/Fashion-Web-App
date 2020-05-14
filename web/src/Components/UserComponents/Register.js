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
             UserAlreadyTaken: [],
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
            alert("Conforn Password not match");
            // NotificationManager.error('pleace correct', 'Confirm Password not matched');
            return false;
        } else{
            // this.sendData();
            // console.log(this.state.username);
            // console.log(this.state.email);
            // console.log(this.state.contactno);
            // console.log(this.state.address);
            // console.log(this.state.password);
            // console.log(this.state.conformpassword);
            // console.log(this.state.gender);
            this.getUsers();
            if(this.state.UserAlreadyTaken.length > 0){
                alert("User Already Taken");
                return false;
            } else{
                this.sendData();
                alert("register successfully");
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
        }
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

    getUsers (){
        console.log(this.state.username)
        axios.get('http://localhost:5000/user//find/'+this.state.username)
        .then(response=>{
            this.setState({
                UserAlreadyTaken : response.data.map(user=>user),
            })
            console.log(response)
            console.log('users',this.state.UserAlreadyTaken)
        }).catch(err=>console.log("Error:"+err))
        
    }
    
    render() {
        // const {data} = this.props;
        const {username, email, contactno, address, password, conformpassword, gender} =this.state
        return(
            <div class="" style={{marginLeft: "5%", marginRight: "5%", marginTop: "5%"}}>
                <div className="row" style={{marginBottom:"7%"}}>
                <div className="col-md-6">
                    <div style={{textAlign: "center"}}>
                                <img src={logo} width="50%" />
                            </div>
                            <img src={back} width="100%"/>
                            </div>
                            <div className="col-md-5">
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
                            </div>
                </div>
                
            </div>
        )
    }
}
