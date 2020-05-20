import React, { Component } from 'react'

import  './Styles/style.css';
import { MDBContainer, MDBInputGroup ,MDBBtn} from "mdbreact";
import axios from "axios";
import swal from "sweetalert";
import Header from '../CommonComponents/adiminHeader';
import Footer from "../CommonComponents/footer";
import showStoreManager from "./showStoreManager";

export class addStoreManager extends Component {

    constructor(props) {
        super(props);
        this.state={
            smid:"",
            name:"",
            email:"",
            admin:"admin",
            password:"",
            rePasswprd:""
        }
    }
    handleSubmit =(e)=>{
        e.preventDefault();

        this.state.name = this.refs.StoreManagerName.value;
        this.state.email= this.refs.email.value;
        this.state. password= this.refs.password.value;
        this.state. rePassword= this.refs.comPassword.value;
        this.state.admin= this.refs.admin.value;

        if ( this.state.name != "" ){
            if ( this.state.email.includes("@")){
                if( this.state.email != ""){
                    if (this.state.password ==  this.state.rePassword && this.state. password != "" &&  this.state.rePassword !=""){


                        axios.get('http://localhost:5000/storemanager/storemanager/'+this.state.name)
                            .then(response=>{
                                if(response.data.length==0){

                                    axios.get('http://localhost:5000/smid/storemanagerID')
                                        .then(response => {
                                            if (response.data.length > 0) {
                                                this.setState({
                                                    smid: response.data[0].smId
                                                    // UserName : response.data.map(storeManager=>storeManager),
                                                    // Email :  response.data.map(storeManager=>storeManager),
                                                    // Password : response.data.map(storeManager=>storeManager)


                                                })


                                            }
                                            console.log(this.state.smid);
                                            const storeManager = {
                                                "smId": this.state.smid,
                                                "UserName": this.state.name,
                                                "Email": this.state.email,
                                                "Password": this.state.password,
                                                "RePassword": this.state.rePassword,
                                                "Admin": this.state.admin
                                            }


                                            axios.post('http://localhost:5000/storemanager/addStoreManager', storeManager)
                                                .then(res => console.log(res.data));

                                            const storeManagerID = {
                                                "smId": this.state.smid + 1

                                            }
                                            axios.post('http://localhost:5000/smid/updatestoremanagerID', storeManagerID)
                                                .then(res => console.log(res.data));


                                            this.setState({
                                                smid: "",
                                                name: "",
                                                email: "",

                                                password: "",
                                                rePasswprd: ""

                                            })

                                            swal({
                                                title: "Success!",
                                                text: "You added new Store Manager!",
                                                icon: "success",
                                                button: "Done",
                                            });
                                            this.refs.myform.reset();

                                            // window.location.href=showStoreManager;

                                        })



                                }else{
                                    swal({
                                        title: "Failed !",
                                        text: "You entered user name already exist !",
                                        icon: "warning",
                                        button: "OK",
                                    });
                                }
                            })






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
                <Header username="admin" /><br/><br/>
                <div className="conatainer">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><br/>
                            <div class="card" >
                                <div class="card-body" id="registre" >
                                    <form ref="myform" >
                                        <p class="h4 text-center py-4" id="topic">Store Manager Registration</p>
                                        <div class="md-form">

                                            <input type="text" id="materialFormCardNameEx" class="form-control" placeholder="Stock Manager Name" ref="StoreManagerName" name="StoreManagerName" />
                                                {/*<label for="materialFormCardNameEx" class="font-weight-light" id="placeholder">Stock Manager Name</label>*/}
                                        </div>
                                        <div class="md-form">
                                            {/*<i class="fa fa-envelope prefix grey-text"></i>*/}
                                            <input type="email" id="materialFormCardEmailEx" class="form-control" placeholder="Enter  email" ref="email" name="email" />
                                                {/*<label for="materialFormCardEmailEx" class="font-weight-light" id="placeholder">Enter  email</label>*/}
                                        </div>

                                        <div class="md-form">
                                            {/*<i class="fa fa-lock prefix grey-text"></i>*/}
                                            <input type="password" id="materialFormCardPasswordEx" class="form-control" placeholder="password" ref="password" name="password" />
                                                {/*<label for="materialFormCardPasswordEx" class="font-weight-light" id="placeholder">password</label>*/}
                                        </div>
                                        <div className="md-form">
                                            {/*<i className="fa fa-exclamation-triangle prefix grey-text"></i>*/}
                                            <input type="password" id="materialFormCardPasswordEx" className="form-control" placeholder="Confirm the Password" ref="comPassword" name="comPassword" />
                                            {/*<label htmlFor="materialFormCardPasswordEx" className="font-weight-light" id="placeholder">Confirm the Password</label>*/}
                                        </div>
                                        <div className="md-form">
                                            {/*<i className="fa fa-exclamation-triangle prefix grey-text"></i>*/}
                                            <input type="text" id="materialFormCardNameEx" className="form-control"
                                                  value={this.state.admin} disabled="disabled" ref="admin" name="admin"/>
                                            {/*<label for="materialFormCardConfirmEx" class="font-weight-" lightid="placeholder">Confirm the email</label>*/}
                                        </div>


                                        <div class="text-center py-4 mt-3">

                                            <button class="btn"  id="btn" type="submit" onClick={(e)=>this.handleSubmit(e)}>Register</button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        <br/></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default addStoreManager