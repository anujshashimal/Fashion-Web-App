import React, {Component} from 'react';
import './StoreLoginRegister.css';
import back from './shopping.gif'
import logo from './logo.gif'
import  { Redirect } from 'react-router-dom'
const axios = require('axios');

export default class header extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            storemanageruserid : '',
            storemanagerusername: '',
            storemanagerpassword: '',
            storemanagers : [],
            storemanager : [],
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
        console.log(this.state.storemanagerusername)
        axios.get('http://localhost:5000/storemanager/findstoreManager/'+this.state.storemanagerusername)
        .then(response=>{

            console.log(response.data.length)
            console.log('res',response.data[0])
            if(response.data.length != 1){
                alert("Please Ragister");
                this.setState({register: true});
            }

            this.setState({
                storemanager: response.data[0]
            },()=>{

                    
                console.log('storemanager',this.state.storemanager)
                console.log('password',this.state.storemanagerpassword)
                console.log('storenamager password',this.state.storemanager.Password)
                console.log('storenamager username',this.state.storemanager.UserName)
                console.log('storemanager id',this.state.storemanager.smId)
                if(this.state. storemanagerusername === "Vishaka" && this.state.storemanagerpassword === "apple123")
                {

                }
                if(this.state.storemanagerpassword == this.state.storemanager.Password){
                    // sessionStorage.setItem('userData', this.state.user);
                    alert("Login Success");
                    this.setState({success: true});
                } else{
                    alert("Password incorect");
                }
            });
            
           
            
        }).catch(err=>console.log("Error:"+err))
        
    }


    
    render() {
        if(this.state.success) {
            return <Redirect to={'/Product?storenamagerusername='+this.state.storemanagerusername+'&storemanagerid='+this.state.storemanager.smId} />
        } else if(this.state.register){
            return <Redirect to={"/Register"} />
        }

        // if(sessionStorage.getItem("userData")) {
        //     return <Redirect to={"/viewProduct"} />
        // }
            
        const { storemanagerusername,storemanagerpassword} =this.state
        return(

            <div className="" style={{marginLeft: "5%", marginRight: "5%", marginTop: "5%"}}>
                <div className="raw">
                    <div className="rowalign">
                        <div className="col-md-6">
                            <p align="center">
                                <img src={logo} width="50%" />
                            </p>
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

                                        <button type="submit" className="btn1">Login</button>

                                        <br /><br />

                                        <p align="center">
                                            {/* <a href="reset.html">Lost your password?</a><br/> */}
                                            <a href="/Register">Don't have an account?</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
