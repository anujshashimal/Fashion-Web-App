import React, { Component } from 'react'
import axios from "axios";


export class showStoreManager extends Component {

    constructor(props) {
        super(props);
        this.state={
            smId:[],
            UserName:[],
            Email:[],
            Password:[],
            RePassword:"",
            Admin:"",
            storeManager:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/storemanager/getallstoremanagers')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        storeManager : response.data.map(storeManager=>storeManager)
                        // UserName : response.data.map(storeManager=>storeManager),
                        // Email :  response.data.map(storeManager=>storeManager),
                        // Password : response.data.map(storeManager=>storeManager)




                    })



                }
            })
    }


    render() {
        return (
            <div>

                {this.state.storeManager.map(function(storeManager){
                    return <li>
                        <div className="conatainer">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8"><br/>
                        <div className="card">


                            <div className="card-body">


                                <h4 className="card-title"><a>{storeManager.UserName}</a></h4>

                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's
                                    content.</p>

                                <a href="#" className="btn btn-primary">Button</a>

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


            </div>
        );
    }
}

export default showStoreManager