import React, {Component} from 'react';
import './css/StoreLoginRegister.css';
import back from './shopping.gif'
import logo from './images/logo.gif'
import Header from '../CommonComponents/header'
import  { Redirect } from 'react-router-dom'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import swal from 'sweetalert';
const axios = require('axios');

export default class header extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            storemanagerusername: '',
            storemanagerpassword: '',
            storemanagers : [],
            storemanager : [],
            //users: [],
            //user: [],
            success: false,
            register: false,
        }
    }



    handleStoreManagerUsernameChange = event => {
        this.setState({
            storemanagerusername: event.target.value
        })
    }

    handleStoreManagerPasswordChange = event => {
        this.setState({
            storemanagerpassword: event.target.value
        })
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        this.getStoremanager();

    }

    async getStoremanager(){
        console.log(this.state.storemanagerusername);
        axios.get('http://localhost:5000/storemanager/storemanager/'+this.state.storemanagerusername)
        .then(response=>{

            console.log(response.data.length)
            console.log('res',response.data[0])
            if(this.state.storemanagerusername === "admin" && this.state.storemanagerpassword === "admin")
            {

                this.setState({register: true});

            }
            if(response.data.length != 0){
                this.setState({
                    storemanager: response.data[0]
                });
                
                if(this.state.storemanagerpassword == this.state.storemanager.Password){
                    // sessionStorage.setItem('userData', this.state.user);
                    // alert("Login Success");
                    swal("Login Success", "Hi "+this.state.storemanagerusername, "success");

                    this.setState({success: true});
                } else{
                    // alert("Password  Incorect!!.Please Re-enter");
                    NotificationManager.error(' Please enter correct password', 'Password incorect');
                    this.setState({
                        storemanagerusername : '',
                        storemanagerpassword : ''
                    })
                }

            }else{
                NotificationManager.error(' Error', 'You are not store Manager');
            }
           
            
        }).catch(err=>console.log("Error:"+err))
        
    }


    
    render() {
        if(this.state.success) {
            return <Redirect to={'/Product?storenamagerusername='+this.state.storemanagerusername+'&storemanagerid='+this.state.storemanager.smId} />
        }
         else if(this.state.register){
            return <Redirect to={"/adminhome"} />
        }
         
        // if(sessionStorage.getItem("userData")) {
        //     return <Redirect to={"/viewProduct"} />
        // }
       
            const { storemanagerusername,storemanagerpassword} =this.state
        return(
                
            <div className="" style={{marginLeft: "5%", marginRight: "5%", marginTop: "2%"}}>
                 <Header/>
                <div className="row">
                        <br/>
                        <div className="col-md-6">
                            <div  style={{textAlign: "center"}} >
                                <img src={logo} width="50%" />
                            </div >
                            <br />
                             <img src={back} width="100%"/>
                        </div>

                        <div className="col-md-6">
                            <div className="centeralign">
                                <br /><br /><br />

                                <form onSubmit={this.handleLoginSubmit}>
                                    <div className="formalign">
                                        <h1 align="center">
                                            <i class="fa fa-lock icon"></i> Store Manager/Admin Login
                                        </h1>

                                        <div className="input-container">
                                            <i className="fa fa-user icon fa-lg"></i>
                                            <input 
                                            className="input-field1" 
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            value={storemanagerusername}
                                            onChange={this.handleStoreManagerUsernameChange}
                                            required />
                                        </div>

                                        <div className="input-container">
                                            <i className="fa fa-key icon fa-lg"></i>
                                            <input
                                            className="input-field1"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={storemanagerpassword}
                                            onChange={this.handleStoreManagerPasswordChange}
                                            required />
                                        </div>

                                        <button type="submit" className="btn2">Login</button>

                                        <br /><br />

                                        <p align="center">
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                
                </div>
                <NotificationContainer/>
            </div>
        )

    }
}
