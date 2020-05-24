import React, { Component } from 'react'
import Footer from '../CommonComponents/footer';
import axios from "axios";
import swal from "sweetalert";
const queryString = require('query-string');


export class StoreManagerDetails extends Component {

    constructor(props) {
        super(props);


        this.OnChangeName = this.OnChangeName.bind(this);
        this.OnChangeEmail = this.OnChangeEmail.bind(this);
        this.OnChangePassword = this.OnChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            id:'',
            Name:'',
            Email:'',
            Password:'',
            Admin:''
        }

    }
    OnChangeName(e){
        this.setState({
            Name:e.target.value
        })
    }
    OnChangeEmail(e){
        this.setState({
            Email:e.target.value
        })
    }
    OnChangePassword(e){
        this.setState({
            Password:e.target.value
        })
    }
    componentDidMount() {
        var values = queryString.parse(this.props.location.search);
        // console.log(this.props.location.search)

        // console.log(values.username)
        this.setState({
            id: values.id,

        });
        //console.log("Id is "+this.state.id);

        axios.get('http://18.207.3.182:5000/storemanager/findstoreManager/'+values.id)
            .then(response=>{

                this.setState({

                    Name : response.data.map(storemanager=>storemanager.UserName),
                    Email :  response.data.map(storemanager=>storemanager.Email),
                    Password:response.data.map(storemanager=>storemanager.Password),
                    Admin  : response.data.map(storemanager=>storemanager.Admin)
                })



            }).catch(err=>console.log("Error:"+err))

    }

    onSubmit(e){
        e.preventDefault();

        // var id = this.state.id;
        // var Name = this.state.Name;
        // var Emails = this.state.Email;
        // var Password = this.state.Password;
        // var Admin = this.state.Admin;

       // console.log(Name+","+Emails+","+Password+","+Admin);

        const storeManagerUpdate = {
            "smId": this.state.id.toString(),
            "UserName":this.state.Name.toString(),
            "Email":this.state.Email.toString(),
            "Password": this.state.Password.toString(),
            "RePassword": this.state.Password.toString(),
            "Admin": this.state.Admin.toString()
    }
    console.log(storeManagerUpdate);
        swal({
            title: "Do you want to update your profile ?,",

            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your profile has been Updated!", {
                        icon: "success",


                    });
                    axios.put('http://18.207.3.182:5000/storemanager/updatestoreManager',storeManagerUpdate)
                        .then(res => {
                            // window.location.reload(false);
                        });
                    this.setState({

                        Name: "",
                        Email: "",

                        Password: "",


                    })


                } else {
                    swal("Canceled");
                }
            });




    }

    render() {
        return (

            <div>

                <div className="conatainer">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"><br/>
                            <div className="card">
                                <div className="card-body" id="registre">
                                    <form ref="myform" onSubmit={this.onSubmit}>
                                        <p className="h4 text-center py-4" id="topic">Store Manager Details</p>
                                        <div className="md-form">

                                            <input type="text" id="materialFormCardNameEx" className="form-control"
                                                   placeholder="Stock Manager Name" ref="StoreManagerName"
                                                   name="StoreManagerName" defaultValue={this.state.Name}  onChange={this.OnChangeName} multiple= {false}/>
                                            {/*<label for="materialFormCardNameEx" class="font-weight-light" id="placeholder">Stock Manager Name</label>*/}
                                        </div>
                                        <div className="md-form">
                                            {/*<i class="fa fa-envelope prefix grey-text"></i>*/}
                                            <input type="email" id="materialFormCardEmailEx" className="form-control"
                                                   placeholder="Enter  email" ref="email" name="email" defaultValue={this.state.Email} onChange={this.OnChangeEmail} multiple= {false}/>
                                            {/*<label for="materialFormCardEmailEx" class="font-weight-light" id="placeholder">Enter  email</label>*/}
                                        </div>

                                        <div className="md-form">
                                            {/*<i class="fa fa-lock prefix grey-text"></i>*/}
                                            <input type="password" id="materialFormCardPasswordEx"
                                                   className="form-control" placeholder="password" ref="password"
                                                   name="password" defaultValue={this.state.Password}  onChange={this.OnChangePassword} multiple= {false}/>
                                            {/*<label for="materialFormCardPasswordEx" class="font-weight-light" id="placeholder">password</label>*/}
                                        </div>

                                        <div className="md-form">
                                            {/*<i className="fa fa-exclamation-triangle prefix grey-text"></i>*/}
                                            <input type="text" id="materialFormCardNameEx" className="form-control"
                                                   defaultValue={this.state.Admin}  ref="admin"
                                                   name="admin"/>
                                            {/*<label for="materialFormCardConfirmEx" class="font-weight-" lightid="placeholder">Confirm the email</label>*/}
                                        </div>


                                        <div className="text-center py-4 mt-3">

                                            <button className="btn" id="btn" type="submit">Save Changers
                                            </button>

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

export default StoreManagerDetails