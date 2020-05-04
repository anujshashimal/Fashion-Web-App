import React, { Component } from 'react'
import axios from "axios";

export class showStoreManager extends Component {

    constructor(props) {
        super(props);
        this.state={
            smId:"",
            UserName:"",
            Email:"",
            Password:"",
            RePassword:"",
            Admin:""

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/storemanager/findstoreManager/003')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        smId : response.data.map(storeManager=>storeManager.smId) ,
                        UserName : response.data[0].UserName,
                        Email :  response.data.map(storeManager=>storeManager.Email),
                        Password : response.data[0].Password


                    })


                }
            })
    }


    render() {
        return (
            <div>




            </div>
        );
    }
}

export default showStoreManager