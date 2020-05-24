import React, {Component} from 'react';
import './LoginRegister.css';
import back from './shopping.gif'
import logo from './logo.gif'
import  { Redirect, Link } from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import swal from 'sweetalert';
import { MDBIcon } from "mdbreact";


const axios = require('axios');

export default class header extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: '',
            users: [],
            user: [],
            success: false,
            register: false,
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        this.getUser();
    }

    async getUser (){
        console.log(this.state.username)
        axios.get('http://100.24.72.11:5000/user/finds/'+this.state.username)
        .then(response=>{

            console.log(response.data.length)
            console.log('res',response.data[0])
            if(response.data.length != 1){
                swal("Hi User...", "Please Register Before Login", "info");
                this.setState({register: true});
            }
            this.setState({
                user : response.data[0]
            },()=>{
                console.log('password',this.state.password)
                console.log('user password',this.state.user.password)
                console.log('user password',this.state.user.username)
                if(this.state.password == this.state.user.password){

                    this.setState({success: true});
                } else{
                    NotificationManager.error(this.state.username+' Please enter correct password', 'Password incorect');
                }
            });
            
           
            
        }).catch(err=>console.log("Error:"+err))
        
    }


    
    render() {
        if(this.state.success) {
            return <Redirect to={"/?username="+this.state.user.username} />
        } else if(this.state.register){
            return <Redirect to={"/Register?username="+this.state.username} />
        }

        const {username, password} =this.state
        return(
            <div className="" style={{marginLeft: "5%", marginRight: "5%", marginTop: "2%"}}>
                <div className="row">
                    <div className="col-md-6">
                    <div style={{textAlign: "center"}}>
                    <a href="/"><img src={logo} width="50%" /></a>
                            </div>
                            
                            <img src={back} width="100%"/>
                    </div>
                    <div className="col-md-6">
                        
                        <br/><br/><br/>
                        
                        <br/>
                    <form onSubmit={this.handleLoginSubmit}>
                                    <div className="formalign">
                                        <h1 align="center">
                                            <i class="fa fa-lock icon"></i> User Login
                                        </h1>

                                        <div className="input-container">
                                            <i className="fa fa-user icon fa-lg"></i>
                                            <input 
                                            className="input-field1" 
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            value={username}
                                            onChange={this.handleUsernameChange}
                                            required />
                                        </div>

                                        <div className="input-container">
                                            <i className="fa fa-key icon fa-lg"></i>
                                            <input
                                            className="input-field1"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={this.handlePasswordChange}
                                            required />
                                        </div>

                                        <button type="submit" className="btn2">Login</button>

                                        <br /><br />

                                        <p align="center">
                                            {/* <a href="reset.html">Lost your password?</a><br/> */}
                                            <a href="/Register">Don't have an account?</a>
                                        </p>
                                        <br/><br/>
                                        <div style={{textAlign: "center"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to={'/Storemanagerlogin'} style={{color: "#ffffff"}} className="btn btn-pink"><h5><MDBIcon icon="user-tie" /> StoreManager/Admin Login</h5></Link>
                        </div>
                                    </div>
                                </form>
                    </div>
                </div>
                    <NotificationContainer/>
            </div>
        )
    }
}
