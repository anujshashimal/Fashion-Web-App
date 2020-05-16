import React, { Component } from 'react'

import women from '../../img/women.jpg'
import men from '../../img/men.jpg'
import kids from '../../img/kids.jpg'
import others from '../../img/others.jpg'
import  './Styles/style.css';
import {Link} from "react-router-dom";

import Header from '../CommonComponents/adiminHeader';
import Footer from "../CommonComponents/footer";


export class MainCategory extends Component {
    render() {
        return (


            <div>
                <Header username='Vishaka' />
                <br/><br/><br/><br/>
                {/*<div className="container-fluid">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-1"></div>*/}
                {/*        <div className="col-10">*/}
                {/*            <div className="card" style="width: 18rem;">*/}
                {/*                <img src="..." className="card-img-top" alt="..."/>*/}
                {/*                <div className="card-body">*/}
                {/*                    <h5 className="card-title">Card title</h5>*/}
                {/*                    <p className="card-text">Some quick example text to build on the card*/}
                {/*                        title and make up the bulk of the card's content.</p>*/}
                {/*                    <a href="#" className="btn btn-primary">Go somewhere</a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-1"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div class="conatainer">
                    <div class="row">
                        <div class="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-3">

                                    <div class="card">


                                        <div class="view overlay">
                                            <div class="inner">
                                                <img class="card-img-top" src={women} alt="Card image cap"/>

                                                <a  ><Link to={'/AddCategory?mainCategory=women'}>
                                                    <div class="mask rgba-white-slight "></div>
                                                </Link>
                                                </a>
                                            </div>
                                        </div>


                                        <div class="card-body">


                                            <h4 class="card-title">WOMEN</h4>

                                            <p class="card-text">Hey Sir, To add subcategories under the women category.</p>

                                            <a  class="btn red darken-3 darken-1" id="btnName"> <Link to={'/AddCategory?mainCategory=women'}>
                                                <text className="font">Women</text></Link></a>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-3">
                                    <div className="card">


                                        <div className="view overlay">
                                            <div className="inner">
                                            <img className="card-img-top"
                                                 src={men}
                                                 alt="Card image cap"/>
                                                <a><Link to={'/AddCategory?mainCategory=men'}>
                                                    <div className="mask rgba-white-slight "></div>
                                                </Link>
                                                </a>
                                            </div>
                                        </div>


                                        <div className="card-body">


                                            <h4 className="card-title">MEN </h4>

                                            <p className="card-text">Hey Sir, To add subcategories under the men category.</p>

                                            <a className="btn red darken-3 darken-1" id="btnName"><Link to={'/AddCategory?mainCategory=men'}>
                                                <text className="font">Men</text></Link></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card">


                                        <div className="view overlay">
                                            <div className="inner">
                                            <img className="card-img-top"
                                                 src={kids}
                                                 alt="Card image cap"/>
                                                <a><Link to={'/AddCategory?mainCategory=kids'}>
                                                    <div className="mask rgba-white-slight "></div>
                                                </Link>
                                                </a>
                                            </div>
                                        </div>


                                        <div className="card-body">


                                            <h4 className="card-title">KIDS</h4>

                                            <p className="card-text">Hey Sir, To add subcategories under the kids category.</p>

                                            <a  className="btn red darken-3 darken-1" id="btnName"><Link to={'/AddCategory?mainCategory=kids'}>
                                                <text className="font">Kids</text></Link></a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card">


                                        <div className="view overlay">
                                            <div className="inner">
                                            <img className="card-img-top"
                                                 src={others}
                                                 alt="Card image cap"/>
                                                <a><Link to={'/AddCategory?mainCategory=others'}>
                                                    <div className="mask rgba-white-slight "></div>
                                                </Link>
                                                </a>
                                            </div>
                                        </div>


                                        <div className="card-body">


                                            <h4 className="card-title">OTHERS</h4>

                                            <p className="card-text">Hey Sir, To add subcategories under the other category. </p>

                                            <a className="btn  red darken-3 darken-1" id="btnName"><Link to={'/AddCategory?mainCategory=others'}><text class="font">Others</text></Link> </a>

                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="col-1"></div>




                    </div>




                </div><br/>

                <Footer />
            </div>
        )
    }
}

export default MainCategory