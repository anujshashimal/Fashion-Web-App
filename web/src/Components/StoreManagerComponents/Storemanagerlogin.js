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
                console.log('password',this.state.storemanagerpassword)
                console.log('storenamager password',this.state.storemanager.Password)
                console.log('storenamager username',this.state.storemanager.Username)
                console.log('storemanager id',this.state.storemanager.smId)
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
            <div className="container" >
                <div className="raw">
                    <div className="rowalign">
                        <div className="col-md-6">
                            <p align="center">
                                <img src={logo} width="50%" />
                            </p>
                            <br />
                            {/* <img src={back} width="100%"/> */}
                        </div>

                        <div className="col-md-5">
                            <div className="centeralign">
                                <br /><br /><br /><br /><br />

                                <form onSubmit={this.handleLoginSubmit}>
                                    <div className="formalign">
                                        <h1 align="center">
                                            <i class="fa fa-lock icon"></i> Store Manager Login
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
