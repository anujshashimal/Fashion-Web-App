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

    // componentDidMount(){
    //     axios.get('http://localhost:5000/user/find')
    //     .then(response=>{
    //       if(response.data.length>0){
    //         this.setState({
    //             users :  response.data.map(users=>users),
    //         //   subcategory : response.data[0].CategoryName
    //      })
    //       }
    //     })
    // }

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
        // if(this.state.user.length != 1){
        //     alert("invalid");
        // } else{
            // this.setState({
            //     user: this.state.users.filter(users => users.username === this.state.username).map(users => users)
            // })
            
            // console.log(this.state.user)
            // console.log(this.state.users)
            
        // }
        
    }

    async getUser (){
        console.log(this.state.username)
        axios.get('http://100.24.72.11:5000/user/finds/'+this.state.username)
        .then(response=>{

            console.log(response.data.length)
            console.log('res',response.data[0])
            if(response.data.length != 1){
                // alert("Please Ragister");
                // NotificationManager.success('Please Ragister', 'Hi....');
                swal("Hi User...", "Please Register Before Login", "info");
                // NotificationManager.warning('Click hear to register', 'Please Register', 5000, () => {
                //     (this.setState({register: true}))
                //   });
                this.setState({register: true});
            }

            this.setState({
                user : response.data[0]
            },()=>{
                console.log('password',this.state.password)
                console.log('user password',this.state.user.password)
                console.log('user password',this.state.user.username)
                if(this.state.password == this.state.user.password){
                    // sessionStorage.setItem('userData', this.state.user);
                    // swal("Login Success", "Hi "+this.state.username, "success");
                    // alert("Login Success");
                    // NotificationManager.success('Hi '+this.state.username, 'Login Success');
                    this.setState({success: true});
                } else{
                    // NotificationManager.success('Success message', 'Title here');
                    // alert("Password incorect");
                    // swal("Password incorect", "", "error");
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

        // if(sessionStorage.getItem("userData")) {
        //     return <Redirect to={"/viewProduct"} />
        // }
            
        const {username, password} =this.state
        return(
            <div className="" style={{marginLeft: "5%", marginRight: "5%", marginTop: "2%"}}>
                {/* <div className="row" style={{backgroundColor: "#ef9a9a"}}>
                    <br/>
                    </div> */}
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
                {/* <div className="row" style={{backgroundColor: "#ef9a9a"}}>
                    <br/>
                    </div> */}
                    <NotificationContainer/>
            </div>
        )
    }
}
