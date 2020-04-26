import React, { Component } from 'react'

import  './Styles/style.css';

export class MainCategory extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            reEmail:"",
            password:"",
            rePasswprd:""
        }
    }
    handleSubmit =(e)=>{
        e.preventDefault();

        this.state.name = this.refs.StoreManagerName.value;
        this.state.email= this.refs.email.value;
        this.state.reEmail= this.refs.comemail.value;
        this.state. password= this.refs.password.value;
        this.state. rePassword= this.refs.comPassword.value;

        if ( this.state.name != "" ){
            if ( this.state.email.includes("@") ||  this.state.reEmail.includes("@")){
                if( this.state.email ==  this.state.reEmail){
                    if ( this.state.password ==  this.state.rePassword && this.state. password != "" &&  this.state.rePassword !=""){
                        alert( this.state.name+" "+  this.state.email+" "+ this.state.reEmail+" "+ this.state.password+" "+ this.state.rePassword);
                        this.refs.myform.reset();
                    }else{
                        this.refs.password.focus();
                    }
                }else{
                    this.refs.email.focus();
                }
            }else {
                this.refs.email.focus();
            }
        }else{
            this.refs.StoreManagerName.focus();
        }
    }
    render() {
        return (
            <div>
                <div className="conatainer">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><br/>
                            <div class="card">
                                <div class="card-body">
                                    <form ref="myform" >
                                        <p class="h4 text-center py-4" id="topic">Store Manager Registration</p>
                                        <div class="md-form">
                                            <i class="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="materialFormCardNameEx" class="form-control" placeholder="Stock Manager Name" ref="StoreManagerName" name="StoreManagerName" />
                                                {/*<label for="materialFormCardNameEx" class="font-weight-light" id="placeholder">Stock Manager Name</label>*/}
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-envelope prefix grey-text"></i>
                                            <input type="email" id="materialFormCardEmailEx" class="form-control" placeholder="Enter  email" ref="email" name="email" />
                                                {/*<label for="materialFormCardEmailEx" class="font-weight-light" id="placeholder">Enter  email</label>*/}
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-exclamation-triangle prefix grey-text"></i>
                                            <input type="email" id="materialFormCardConfirmEx" class="form-control" placeholder="Confirm the email" ref="comemail" name="comemail" />
                                                {/*<label for="materialFormCardConfirmEx" class="font-weight-light" id="placeholder">Confirm the email</label>*/}
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-lock prefix grey-text"></i>
                                            <input type="password" id="materialFormCardPasswordEx" class="form-control" placeholder="password" ref="password" name="password" />
                                                {/*<label for="materialFormCardPasswordEx" class="font-weight-light" id="placeholder">password</label>*/}
                                        </div>
                                        <div className="md-form">
                                            <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                                            <input type="password" id="materialFormCardPasswordEx" className="form-control" placeholder="Confirm the Password" ref="comPassword" name="comPassword" />
                                            {/*<label htmlFor="materialFormCardPasswordEx" className="font-weight-light" id="placeholder">Confirm the Password</label>*/}
                                        </div>
                                        <div class="text-center py-4 mt-3">
                                            <button class="btn" id="btn" type="submit" onClick={(e)=>this.handleSubmit(e)}>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        <br/></div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainCategory