import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/homePage.css'

import Header from '../CommonComponents/adiminHeader';
import Footer from "../CommonComponents/footer";
import {Link} from "react-router-dom";

export class homePage extends Component {

    render() {
        return (
            <div>
                <Header username='admin' /><br/><br/><br/>
                <div className="conatainer">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">


                            <div className="row">
                                <div className="col-5">

                                    <div className="card card-image" id="background1">


                                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-3">
                                            <div>
                                                <h5 ><i className="fas fa-user"></i> Store Manager</h5>
                                                <h3 className="card-title pt-2"><strong>Store Manager Section</strong></h3>
                                                <p>To Add new store Managers , details of store managers, remove store managers done by here !.</p>
                                                <Link to={'/showstoremanager'} className="btn btn-red darken-3"><i className="fas fa-clone left"></i> View</Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-1"></div>
                                <div className="col-5">
                                    <div className="card card-image" id="background2">


                                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                            <div>
                                                <h5 ><i className="fas fa-window-maximize"></i> Category</h5>
                                                <h3 className="card-title pt-2"><strong>Category Section</strong></h3>
                                                <p>To Add new Categories , details of Categories, remove Categories done by here !.</p>
                                               <Link to={'/maincategory'}  className="white-text btn btn-red darken-3"><i className=" fas fa-clone left"></i> View</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className="col-1"></div>
                    </div>
                </div><br/><br/>

<Footer/>
            </div>
        )
    }
}
export default homePage