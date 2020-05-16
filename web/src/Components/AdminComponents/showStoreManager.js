import React, { Component } from 'react'
import axios from "axios";
import  './Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import Header from '../CommonComponents/header';
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

        axios.get('http://localhost:5000/storemanager/getallstoremanagers')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        storeManager : response.data.map(storeManager=>storeManager)
                    })
                }
            })
    }
    componentDidMount() {
        axios.get('http://localhost:5000/storemanager/getallstoremanagers')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        storeManager : response.data.map(storeManager=>storeManager)
                    })
                }
            })
    }
    // updatesm=(e,id,name,email,password,admin)=>{
    //     e.preventDefault();
    //     this.state.Email=this.refs.UpdateEmail.value;
    //     this.state.password=this.refs.updatePassword.value;
    //     const updateStoreManager={
    //         "smId":id,
    //         "UserName":name,
    //         "Email":this.state.Email,
    //         "Password":this.state.password,
    //         "RePassword":this.state.password,
    //         "Admin":admin
    //
    //     }
    //     console.log(name);
    //     swal({
    //         title: "Do you want to Update "+name,
    //
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //         .then((willDelete) => {
    //             if (willDelete) {
    //                 swal("Poof! "+name+" has been updated!", {
    //                     icon: "success",
    //
    //
    //                 });
    //
    //                 axios.delete('http://localhost:5000/storemanager/updatestoreManager',updateStoreManager)
    //                     .then(res=>console.log(res.data));
    //             } else {
    //                 swal("Store Manager is safe!");
    //             }
    //         });
    //
    //
    // }

    render() {

        return (    <div> <Header username='Vishaka' /><br/><br/>
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
                                                                    axios.delete('http://localhost:5000/storemanager/deletestoreManager/'+storeManager.smId)
                                                                        .then(res=>console.log(res.data));
                                                                } else {
                                                                    swal("Store Manager is safe!");
                                                                }
                                                            });


                                                    }}>Remove</a>
                                                    {/*<a href="#" id="button" className="btn " onClick={() =>{*/}
                                                    {/*    const email =*/}
                                                    {/*    alert(email);*/}
                                                    {/*    const updateStoreManager={*/}
                                                    {/*                "smId":storeManager.smId,*/}
                                                    {/*                 "UserName":storeManager.UserName,*/}
                                                    {/*                 "Email":email,*/}
                                                    {/*                 "Password":email,*/}
                                                    {/*                 "RePassword":email,*/}
                                                    {/*                 "Admin":storeManager.Admin*/}

                                                    {/*             }*/}

                                                    {/*    axios.post('http://localhost:5000/storemanager/updatestoreManager',updateStoreManager)*/}
                                                    {/*                        .then(res=>console.log(res.data));*/}





                                                    {/*   }}*/}

                                                    {/*>Update</a>*/}
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
                                                               id="inlineFormInputGroup" ref="UpdateEmail" placeholder={storeManager.Email} />
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-key"></div>
                                                        </div>
                                                        <input type="password" className="form-control py-0"
                                                               id="inlineFormInputGroup" ref="updatePassword" placeholder={storeManager.Password}/>
                                                    </div>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text fa fa-user"></div>
                                                        </div>
                                                        <input type="text" className="form-control py-0"
                                                               id="inlineFormInputGroup" disabled="disabled" placeholder={storeManager.Admin}/>
                                                    </div>
                                                        {/*<button type="submit" id="button" className="btn " onClick={(e) =>this.updatesm(e,storeManager.smId,storeManager.UserName,storeManager.Password,storeManager.Password,storeManager.Admin)*/}

                                                        {/*    // this.state.Email=this.refs.UpdateEmail.value;*/}
                                                        {/*    // this.state.password=this.refs.updatePassword.value;*/}

                                                        {/*//     const updateStoreManager={*/}
                                                        {/*//     "smId":storeManager.smId,*/}
                                                        {/*//     "UserName":storeManager.UserName,*/}
                                                        {/*//     "Email":this.refs.UpdateEmail.value,*/}
                                                        {/*//     "Password":storeManager.Password,*/}
                                                        {/*//     "RePassword":storeManager.Password,*/}
                                                        {/*//     "Admin":storeManager.Admin*/}
                                                        {/*//*/}
                                                        {/*// }*/}
                                                        {/*//     console.log(storeManager.UserName);*/}
                                                        {/*//     swal({*/}
                                                        {/*//     title: "Do you want to Update "+storeManager.UserName,*/}
                                                        {/*//*/}
                                                        {/*//     icon: "warning",*/}
                                                        {/*//     buttons: true,*/}
                                                        {/*//     dangerMode: true,*/}
                                                        {/*// })*/}
                                                        {/*//     .then((willDelete) => {*/}
                                                        {/*//     if (willDelete) {*/}
                                                        {/*//     swal("Poof! "+storeManager.UserName+" has been updated!", {*/}
                                                        {/*//     icon: "success",*/}
                                                        {/*//*/}
                                                        {/*//*/}
                                                        {/*// });*/}
                                                        {/*//*/}
                                                        {/*//     axios.delete('http://localhost:5000/storemanager/updatestoreManager',updateStoreManager)*/}
                                                        {/*//     .then(res=>console.log(res.data));*/}
                                                        {/*// } else {*/}
                                                        {/*//     swal("Store Manager is safe!");*/}
                                                        {/*// }*/}
                                                        {/*// });*/}






                                                        {/*}*/}

                                                        {/*>Update</button>*/}
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