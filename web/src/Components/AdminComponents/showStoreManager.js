import React, { Component } from 'react'
import axios from "axios";
import  './Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import Header from '../CommonComponents/adiminHeader';
import Footer from "../CommonComponents/footer";


export class showStoreManager extends Component {

    constructor(props) {
        super(props);
        this.state={
            smId:[],
            UserName:[],
            Email:"",
            Password:"",
            RePassword:"",
            Admin:"",
            storeManager:[]

        }

    }
    componentDidUpdate() {

        axios.get('http://100.24.72.11:5000/storemanager/getallstoremanagers')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        storeManager : response.data.map(storeManager=>storeManager)
                    })
                }
            })
    }
    componentDidMount() {
        axios.get('http://100.24.72.11:5000/storemanager/getallstoremanagers')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        storeManager : response.data.map(storeManager=>storeManager)
                    })
                }
            })
    }
    render() {
        return (    <div> <Header username="admin" /><br/><br/>
                {this.state.storeManager.map(function(storeManager){
                    return <li key={storeManager.smId} value={storeManager.smId}>
                        <div className="conatainer">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8"><br/>
                                    <div className="card">
                                        <div className="card-body" id="card-body">
                                            <form>
                                            <div className="row">
                                                <div className="col-3">
                                                    <h4 className="card-title"><a>{storeManager.UserName}</a></h4>
                                                    <a href="#" id="button" className="btn" onClick={() =>{
                                                        swal({
                                                            title: "Do you want to remove "+storeManager.UserName,
                                                            text: "Once deleted, you will not be able to recover !",
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        })
                                                            .then((willDelete) => {
                                                                if (willDelete) {
                                                                    swal("Poof! "+storeManager.UserName+" has been deleted!", {
                                                                        icon: "success",
                                                                    });
                                                                    axios.delete('http://100.24.72.11:5000/storemanager/deletestoreManager/'+storeManager.smId)
                                                                        .then(res=>console.log(res.data));
                                                                } else {
                                                                    swal("Store Manager is safe!");
                                                                }
                                                            });
                                                    }}>Remove</a>

                                                </div>
                                                <div className="col-1"></div>
                                                <div className="col-8">
                                                    <form ref="updateStoremanagerform">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-user"></div>
                                                        </div>
                                                        <input type="text" className="form-control py-0"
                                                               id="inlineFormInputGroup" disabled="disabled" placeholder={storeManager.UserName}/>
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-envelope"></div>
                                                        </div>
                                                        <input type="text" className="form-control py-0"
                                                               id="inlineFormInputGroup"  disabled="disabled" ref="UpdateEmail" placeholder={storeManager.Email} />
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-key"></div>
                                                        </div>
                                                        <input type="password" className="form-control py-0"
                                                               id="inlineFormInputGroup"  disabled="disabled" ref="updatePassword" placeholder={storeManager.Password}/>
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-user"></div>
                                                        </div>
                                                        <input type="text" className="form-control py-0"
                                                               id="inlineFormInputGroup" disabled="disabled" placeholder={storeManager.Admin}/>
                                                    </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                        <br/>
                    </li>
                })
                }
                <Footer />
            </div>
        )
    }}

export default showStoreManager